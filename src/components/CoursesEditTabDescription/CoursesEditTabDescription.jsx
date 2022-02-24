import { Button, CardBg, Input } from 'components/ui'
import { useDispatch, useInput, useInputFileNew, useNavigate, useRequest } from 'hooks'
import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import CoursesEditPrice from './CoursesEditPrice'
import { coursesSelectors } from 'store/selectors'
import CoursesEditBlock from './CoursesEditBlock'
import { useForm } from 'react-hook-form'
import { getURL } from 'utils'
import CoursesEditBlockItem from './CoursesEditBlockItem'
import CoursesEditArrayFields from 'components/CoursesEdit/CoursesEditArrayFields'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const validationSchema = yup.object({
   course_description: yup.string().required('Обязательное поле'),
   result_learn_text: yup.string().required('Обязательное поле'),
   descriptions: yup.array().of(
      yup.object().shape({
         name: yup.string().required('Обязательное поле'),
         text: yup.string().required('Обязательное поле'),
         imageValue: yup.string().required('Обязательное поле'),
         image: yup
            .mixed()
            .test('type', 'Не верный формат', (value) => {
               if (value && value.length === 0) return true
               return ['image/jpg', 'image/jpeg', 'image/png'].includes(value && value[0] && value[0].type)
            })
            .test('fileSize', 'Максимальный размер файла должен быть 1 МБ', (value) => {
               if (value && value.length === 0) return true
               return value && value[0] && value[0].size <= 1000000
            })
            .imageMinSizeCheck('Минимальное разрешение должно быть 248-248px', 248, 248),
      }),
   ),
})

const CoursesEditTabDescription = ({ refTabs, refTab }) => {
   const { courseId } = useParams()
   const { toCabinetCourses } = useNavigate()
   const { setIsShow, setContent, editInfo, deleteInfo } = useDispatch()
   const course = useSelector(coursesSelectors.getCourse)
   const modules = useSelector(coursesSelectors.getModules)
   const descriptions = useSelector(coursesSelectors.getDescriptions)
   const prices = useSelector(coursesSelectors.getPrices)
   const whoms = useSelector(coursesSelectors.getWhoms)

   const hasDescriptions = !(Object.keys(descriptions).length === 0)
   const hasWhoms = !(Object.keys(whoms).length === 0)
   const hasPrices = !(Object.keys(prices).length === 0)
   const hasInfo = hasDescriptions || hasWhoms || hasPrices || course.description || course.result_learn_text

   const form = useForm({
      defaultValues: {
         course_description: '12',
         result_learn_text: '12',
         descriptions: [],
         whoms: [],
         prices: [],
      },
      resolver: yupResolver(validationSchema),
   })
   const { isDirty, errors } = form.formState

   console.log(errors)

   useEffect(() => {
      form.setValue(
         'descriptions',
         course.descriptions?.map(({ id, name, text, image }) => ({ id, name, text, imageValue: getURL.img(image, false) ?? '' })),
      )
      form.setValue(
         'whoms',
         course.whoms?.map(({ id, name, text, image }) => ({ id, name, text, imageValue: getURL.img(image, false) ?? '' })),
      )
      form.setValue(
         'prices',
         course.prices?.map(({ id, name, text, width, price, price_with_sale }) => ({ id, name, text, width, price, price_with_sale })),
      )
      form.setValue('course_description', course.description ?? '')
      form.setValue('result_learn_text', String(course.result_learn_text) ?? '')
   }, [course])

   const deleteInfoRequest = useRequest({
      request: deleteInfo,
      success: ({ response, data }) => {
         setIsShow(true)
         setContent({ title: 'Информация удалена', descr: '' })
      },
   })
   const editInfoRequest = useRequest({
      request: editInfo,
      success: ({ response, data }) => {
         if (hasInfo) {
            setIsShow(true)
            setContent({ title: 'Информация о курсе обновлена', descr: '' })
            return
         }
         setIsShow(true)
         setContent({ title: 'Информация добавлена', descr: 'Ваш курс отправлен на модерацию.' })
         toCabinetCourses()
      },
   })

   const onDeleteBlock = useCallback((type, id) => id && deleteInfoRequest.call({ courseId, id, type }), [])

   const onDeleteImg = useCallback((id) => id && deleteInfoRequest.call({ courseId, id, type: 'image' }), [])

   const createField = async (id, index, body, fields, fieldName) => {
      const newId = id ? id : 'new_' + index
      const entries = Object.entries(fields).filter(([key]) => !(key === 'id' || key === 'inputFile' || key === 'inputFileValue'))
      entries.forEach(([key, value]) => {
         if (Array.isArray(value)) return value.forEach((val) => body.append(`${fieldName}[${newId}][${key}][]`, val))
         //  body.append(`${fieldName}[${newId}][${key}]`, typeof value === 'boolean' ? +value : value)

         const val = typeof value === 'boolean' ? +value : value?.constructor.name === 'FileList' ? value[0] : value
         if (val === undefined || val === null) return
         body.append(`${fieldName}[${newId}][${key}]`, val)
      })
      const inputFile = fields['inputFile']
      inputFile && inputFile[0] && body.append(`${fieldName}[${newId}][${'image'}]`, inputFile[0])
   }

   const onSubmit = (data) => {
      const values = {}
      Object.entries(data).forEach(([key, value]) => {
         const val = typeof value === 'boolean' ? +value : value?.constructor.name === 'FileList' ? value[0] : value
         if (val === undefined || val === null) return
         values[key] = val
      })

      const body = new FormData()
      // ;(await getEntries()).forEach(([key, value]) => !Array.isArray(value) && body.append(key, typeof value === 'boolean' ? +value : value))

      values.descriptions.map(async (fields, index) => await createField(fields.id, index, body, fields, 'descriptions'))
      values.whoms.map(async (fields, index) => await createField(fields.id, index, body, fields, 'whoms'))
      values.prices.map(async (fields, index) => await createField(fields.id, index, body, fields, 'prices'))

      Object.entries(form.getValues())
         .filter(([k]) => !['descriptions', 'whoms', 'prices', 'imageValue'].includes(k))
         .forEach(([key, value]) => {
            const val = typeof value === 'boolean' ? +value : value?.constructor.name === 'FileList' ? value[0] : value
            if (val === undefined || val === null) return
            body.append(key, val)
         })

      editInfoRequest.call({ courseId, body })
   }

   useImperativeHandle(refTab, () => ({
      getForm: () => form,
   }))

   return (
      <form id='form-edit' onSubmit={form.handleSubmit(onSubmit)}>
         <CardBg className='create-about'>
            <h3 className='create-about__title display-4'>О курсе</h3>
            <div className='create-about__editor'>
               <Input form={form} name='course_description' textarea />
            </div>
         </CardBg>

         <CardBg className='create-price'>
            <h3 className='create-module__title display-4'>О курсе</h3>
            <div className='create-module__items'>
               <CoursesEditArrayFields name='descriptions' onDelete={onDeleteBlock.bind(null, 'desc')} form={form} appendFields={{ name: '', text: '' }} btnText='Добавить описание'>
                  {(props) => <CoursesEditBlockItem key={props.id || props.index} {...props} onDeleteImg={onDeleteImg} />}
               </CoursesEditArrayFields>
            </div>
         </CardBg>

         <CardBg className='create-price'>
            <h3 className='create-module__title display-4'>Кому подойдет курс</h3>
            <div className='create-module__items'>
               <CoursesEditArrayFields name='whoms' onDelete={onDeleteBlock.bind(null, 'whom')} form={form} appendFields={{ name: '', text: '' }} btnText='Добавить описание'>
                  {(props) => <CoursesEditBlockItem key={props.id || props.index} {...props} onDeleteImg={onDeleteImg} />}
               </CoursesEditArrayFields>
            </div>
         </CardBg>

         <CardBg className='create-price'>
            <h3 className='create-module__title display-4'>Стоимость</h3>
            <div className='create-module__items'>
               <CoursesEditArrayFields name='prices' onDelete={onDeleteBlock.bind(null, 'price')} form={form} appendFields={{ name: '', text: '' }} btnText='Добавить описание'>
                  {(props) => <CoursesEditPrice key={props.id || props.index} {...props} />}
               </CoursesEditArrayFields>
            </div>
         </CardBg>

         {/* <CoursesEditBlock title={'О курсе'} state={descriptions} setState={setDescriptions} onAddBlockItem={onAddBlockItem} onDeleteBlock={onDeleteBlock.bind(null, 'desc')} onDeleteImg={onDeleteImg}>
            {(props) => <CoursesEditBlockItem key={props.id || props.index} {...props} />}
         </CoursesEditBlock>
         <CoursesEditBlock title={'Кому подойдет курс'} state={whoms} setState={setWhoms} onAddBlockItem={onAddBlockItem} onDeleteBlock={onDeleteBlock.bind(null, 'whom')} onDeleteImg={onDeleteImg}>
            {(props) => <CoursesEditBlockItem key={props.id || props.index} {...props} />}
         </CoursesEditBlock>
         <CoursesEditBlock title={'Стоимость'} state={prices} setState={setPrices} onAddBlockItem={onAddBlockItem} onDeleteBlock={onDeleteBlock.bind(null, 'price')} onDeleteImg={onDeleteImg}>
            {(props) => <CoursesEditPrice key={props.id || props.index} {...props} />}
         </CoursesEditBlock> */}
         <CardBg className='create-price'>
            <div className='course-edit__form-group form-group'>
               <h3 className='create-price__title display-4'>Результаты обучения</h3>
               <div className='create-about__editor'>
                  <Input form={form} name='result_learn_text' label='Результаты обучения' textarea />
               </div>
            </div>
         </CardBg>
      </form>
   )
}

export default CoursesEditTabDescription
