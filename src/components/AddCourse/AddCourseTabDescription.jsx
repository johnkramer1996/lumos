import { Button, Input } from 'components/ui'
import { useDispatch, useInput, useInputFileNew, useRequest } from 'hooks'
import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import AddCoursePrice from './AddCoursePrice'
import { coursesSelectors } from 'store/selectors'
import AddCourseBlockItem from './AddCourseBlockItem'
import AddCourseBlock from './AddCourseBlock'
import { useForm } from 'react-hook-form'
import { asyncFind, timeout } from 'utils'

const AddCourseTabDescription = ({ refTabs, refTab }) => {
   const { courseId } = useParams()
   const { setIsShow, setContent, setDescriptions, setWhoms, setPrices, editInfo, deleteInfo } = useDispatch()
   const course = useSelector(coursesSelectors.getCourse)
   const modules = useSelector(coursesSelectors.getModules)
   const descriptions = useSelector(coursesSelectors.getDescriptions)
   const prices = useSelector(coursesSelectors.getPrices)
   const whoms = useSelector(coursesSelectors.getWhoms)

   // TODO THINK IT OVER
   const hasDescriptions = false
   const hasPrices = false
   if (!descriptions.length) descriptions.push({})
   if (!prices.length) prices.push({})
   if (!whoms.length) whoms.push({})

   const form = useForm({
      mode: 'onBlur',
      defaultValues: {
         course_description: 'course_description',
         result_learn_text: 'result_learn_text',
      },
   })
   const getEntries = async () => timeout(() => Object.entries(form.getValues()).filter(([key]) => !(key === 'timing' || key === 'inputFile' || key === 'inputFileValue')))

   useEffect(() => {
      // if (hasCourse) {
      ;(async () => {
         console.log(course)
         ;(await getEntries()).forEach(([key]) => form.setValue(key, course[key] !== '0' ? course[key] : false ?? ''))
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
         if (hasDescriptions && hasPrices) {
            setIsShow(true)
            setContent({ title: 'Информация о курсе обновлена' })
            return
         }
         setIsShow(true)
         setContent({ title: 'Информация добавлена', descr: 'Ваш курс отправлен на модерацию.' })
      },
   })

   const createField = async (id, index, body, form, fieldName) => {
      const newId = id !== undefined ? id : 'new_' + index

      const entries = Object.entries(await form.getValues()).filter(([key]) => !(key === 'modules0' || key === 'modules1' || key === 'inputFile' || key === 'inputFileValue'))
      entries.forEach(([key, value]) => {
         if (Array.isArray(value)) {
            value.forEach((val) => {
               body.append(`${fieldName}[${newId}][${key}][]`, val)
            })
            return
         }
         body.append(`${fieldName}[${newId}][${key}]`, typeof value === 'boolean' ? +value : value)
      })
      const inputFile = form.getValues('inputFile')
      inputFile && inputFile[0] && body.append(`${fieldName}[${newId}][${'image'}]`, inputFile[0])
   }

   const submit = async () => {
      if (!(await form.trigger())) return false

      const body = new FormData()

      ;(await getEntries()).forEach(([key, value]) => body.append(key, typeof value === 'boolean' ? +value : value))

      await Promise.all(descriptions.map(async ({ id, form }, index) => await createField(id, index, body, form, 'descriptions')))
      await Promise.all(whoms.map(async ({ id, form }, index) => await createField(id, index, body, form, 'whoms')))
      await Promise.all(prices.map(async ({ id, form }, index) => await createField(id, index, body, form, 'prices')))

      for (const [key, value] of body.entries()) console.log(key, value)

      editInfoRequest.call({ courseId, body })
   }

   useImperativeHandle(refTab, () => ({ submit }))

   const onAddBlockItem = useCallback(async (state, setState) => {
      if (await asyncFind(state, async ({ form }) => !(await form.trigger()))) return

      setState([...state, {}])
   }, [])
   const onDeleteBlock = useCallback((type, state, setState, id, index) => {
      if (state.length === 1) {
         setIsShow(true)
         setContent({ title: 'Нельзя удалить единственный блок' })
         return
      }
      id && deleteInfoRequest.call({ courseId, id, type })
      setState([...state.filter((_, inx) => inx !== index)])
   }, [])
   const onDeleteImg = useCallback((id) => id && deleteInfoRequest.call({ courseId, id, type: 'image' }), [])

   return (
      <>
         <div className='create-about card-bg'>
            <h3 className='create-about__title display-4'>О курсе</h3>
            <div className='create-about__editor'>
               <Input form={form} name='course_description' textarea />
            </div>
         </div>
         <AddCourseBlock title={'О курсе'} state={descriptions} setState={setDescriptions} onAddBlockItem={onAddBlockItem} onDeleteBlock={onDeleteBlock.bind(null, 'desc')} onDeleteImg={onDeleteImg}>
            {(props) => <AddCourseBlockItem key={props.id || props.index} {...props} />}
         </AddCourseBlock>
         <AddCourseBlock title={'Кому подойдет курс'} state={whoms} setState={setWhoms} onAddBlockItem={onAddBlockItem} onDeleteBlock={onDeleteBlock.bind(null, 'whom')} onDeleteImg={onDeleteImg}>
            {(props) => <AddCourseBlockItem key={props.id || props.index} {...props} />}
         </AddCourseBlock>
         <AddCourseBlock title={'Стоимость'} state={prices} setState={setPrices} onAddBlockItem={onAddBlockItem} onDeleteBlock={onDeleteBlock.bind(null, 'price')} onDeleteImg={onDeleteImg}>
            {(props) => <AddCoursePrice key={props.id || props.index} {...props} />}
         </AddCourseBlock>
         <div className='create-price card-bg'>
            <div className='course-edit__form-group form-group'>
               <h3 className='create-price__title display-4'>Результаты обучения</h3>
               <div className='create-about__editor'>
                  <Input form={form} name='result_learn_text' label='Результаты обучения' textarea />
               </div>
            </div>
         </div>
      </>
   )
}

export default AddCourseTabDescription
