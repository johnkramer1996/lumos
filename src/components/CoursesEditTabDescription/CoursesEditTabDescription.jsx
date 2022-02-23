import { Button, CardBg, Input } from 'components/ui'
import { useDispatch, useInput, useInputFileNew, useNavigate, useRequest } from 'hooks'
import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import CoursesEditPrice from './CoursesEditPrice'
import { coursesSelectors } from 'store/selectors'
import CoursesEditBlock from './CoursesEditBlock'
import { useForm } from 'react-hook-form'
import { asyncFind, getURL, timeout } from 'utils'
import CoursesEditBlockItem from './CoursesEditBlockItem'
import CoursesEditArrayFields from 'components/CoursesEdit/CoursesEditArrayFields'

const CoursesEditTabDescription = ({ refTabs, refTab }) => {
   const { courseId } = useParams()
   const { toCabinetCourses } = useNavigate()
   const { setIsShow, setContent, setDescriptions, setWhoms, setPrices, editInfo, deleteInfo } = useDispatch()
   const course = useSelector(coursesSelectors.getCourse)
   const modules = useSelector(coursesSelectors.getModules)
   const descriptions = useSelector(coursesSelectors.getDescriptions)
   const prices = useSelector(coursesSelectors.getPrices)
   const whoms = useSelector(coursesSelectors.getWhoms)

   const hasDescriptions = !(Object.keys(descriptions).length === 0)
   const hasWhoms = !(Object.keys(whoms).length === 0)
   const hasPrices = !(Object.keys(prices).length === 0)
   const hasInfo = hasDescriptions && hasWhoms && hasPrices

   const form = useForm({
      mode: 'onBlur',
      defaultValues: {
         course_description: 'course_description',
         result_learn_text: 'result_learn_text',
         //  descriptions: [],
         //  whoms: [],
         //  prices: [],
         descriptions: [{ name: '123', text: '456' }],
         whoms: [{ name: '123', text: '456' }],
         prices: [{ name: '123', width: '123', price_with_sale: '123', price: '123', text: '456' }],
      },
   })
   const getEntries = async () => timeout(() => Object.entries(form.getValues()).filter(([key]) => !(key === 'inputFile' || key === 'inputFileValue')))

   useEffect(() => {
      // if (hasCourse) {
      ;(async () => {
         form.setValue(
            'descriptions',
            course.descriptions.map(({ id, name, text, image }) => ({ id, name, text, inputFileValue: getURL.img(image, false) ?? '' })),
         )
         form.setValue(
            'whoms',
            course.whoms.map(({ id, name, text, image }) => ({ id, name, text, inputFileValue: getURL.img(image, false) ?? '' })),
         )
         form.setValue(
            'prices',
            course.prices.map(({ id, name, text, width, price, price_with_sale }) => ({ id, name, text, width, price, price_with_sale })),
         )
         form.setValue('course_description', course.description)
      })()
      // }
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
         body.append(`${fieldName}[${newId}][${key}]`, typeof value === 'boolean' ? +value : value)
      })
      const inputFile = fields['inputFile']
      console.log(inputFile)
      inputFile && inputFile[0] && body.append(`${fieldName}[${newId}][${'image'}]`, inputFile[0])
   }

   const submit = async () => {
      if (!(await form.trigger())) return false

      const values = {}
      ;(await getEntries()).forEach(([key, value]) => (values[key] = typeof value === 'boolean' ? +value : value))

      const body = new FormData()
      ;(await getEntries()).forEach(([key, value]) => !Array.isArray(value) && body.append(key, typeof value === 'boolean' ? +value : value))
      values.descriptions.map(async (fields, index) => await createField(fields.id, index, body, fields, 'descriptions'))
      values.whoms.map(async (fields, index) => await createField(fields.id, index, body, fields, 'whoms'))
      values.prices.map(async (fields, index) => await createField(fields.id, index, body, fields, 'prices'))

      console.log(values)

      for (const [key, value] of body.entries()) console.log(key, value)

      editInfoRequest.call({ courseId, body })
   }

   useImperativeHandle(refTab, () => ({ submit }))

   return (
      <>
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
               <CoursesEditArrayFields name='prices' onDelete={onDeleteBlock.bind(null, 'prices')} form={form} appendFields={{ name: '', text: '' }} btnText='Добавить описание'>
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
      </>
   )
}

export default CoursesEditTabDescription
