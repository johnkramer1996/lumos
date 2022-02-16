import { Button, Checkbox, Input } from 'components/ui'
import { useDispatch, useInput, useNavigate, useRequest } from 'hooks'
import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import AddCourseDescription from './AddCourseDescription'
import AddCoursePrice from './AddCoursePrice'
import { ReactComponent as AddSvg } from 'svg/add.svg'
import { coursesSelectors } from 'store/selectors'

const AddCourseTabDescription = ({ onUpdateListener }, ref) => {
   const { courseId } = useParams()
   const { setIsShow, setContent, setDescriptions, setPrices, editInfo, deleteInfo } = useDispatch()
   const course = useSelector(coursesSelectors.getCourse)
   const modules = useSelector(coursesSelectors.getModules)
   const descriptions = useSelector(coursesSelectors.getDescriptions)
   const prices = useSelector(coursesSelectors.getPrices)

   const hasDescriptions = !(descriptions.length === 0)
   const hasPrices = !(prices.length === 0)

   const courseDescription = useInput({ bind: { name: 'courseDescription' }, is: { isRequired: true, isTextarea: true } })
   const result_learn_text = useInput({ bind: { name: 'result_learn_text' }, is: { isRequired: true } })

   const getAllInputs = useCallback(() => {
      const descriptionsInputs = descriptions.map(({ inputs }) => inputs).flat()
      const pricesInputs = prices.map(({ inputs, checkboxs }) => [...inputs, checkboxs]).flat()
      return [courseDescription, result_learn_text, ...descriptionsInputs, ...pricesInputs]
   }, [courseDescription, result_learn_text, descriptions, prices])

   useEffect(() => onUpdateListener(-2), [])
   // TODO ADD ALL INPUTS
   useEffect(() => onUpdateListener(1), [[courseDescription, result_learn_text].reduce((prev, { value }) => prev + String(value), '')])

   useEffect(() => {
      course && courseDescription.setValue(course.description || '')
      course && result_learn_text.setValue(course.result_learn_text || '')
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

   useImperativeHandle(ref, () => ({
      update: () => getAllInputs().filter((i) => i.update()),
      check: () => {
         // TODO OPTIMIZE CODE
         if (!descriptions.length || !prices.length) return
         return !getAllInputs().filter((i) => i.check(i.value)).length
      },
      send: () => {
         const createId = (id, index) => (id !== undefined ? id : 'new_' + index)
         const createField = (body, inputs, fieldName) =>
            inputs.forEach((input) => body.append(`${fieldName}[${input.ref.current.name}]`, input.ref.current.name !== 'image' ? input.value : input.ref.current?.files[0]))

         const body = new FormData()

         body.append('course_description', courseDescription.value)
         body.append('result_learn_text', result_learn_text.value)
         descriptions.forEach(({ id, inputs }, index) => {
            id = createId(id, index)
            createField(body, inputs, `descriptions[${id}]`)
         })
         prices.forEach(({ id, inputs, checkboxs }, index) => {
            id = createId(id, index)
            createField(body, inputs, `prices[${id}]`)
            checkboxs.value.forEach((item) => body.append(`prices[${id}][moduls][]`, item))
         })
         for (const [key, value] of body.entries()) console.log(key, value)
         editInfoRequest.call({ courseId, body })
      },
   }))

   const onAddDescription = () => {
      const isError = descriptions.filter((descr) => descr.inputs.filter((i) => i.check(i.value)).length).length
      if (descriptions.length && isError) return
      setDescriptions([...descriptions, { name: '', text: '', image: '' }])
   }
   const onAddPrices = () => {
      const isError = prices.filter((price) => [...price.inputs, price.checkboxs].filter((i) => i.check(i.value)).length).length
      console.log(isError)

      return
      if (prices.length && isError) return
      setPrices([...prices, { name: '', width: '', price_with_sale: '', price: '', text: '' }])
   }
   const onDeleteDescription = (id, index) => {
      id && deleteInfoRequest.call({ courseId, id, type: 'desc' })
      setDescriptions(descriptions.filter((item, inx) => inx !== index))
   }
   const onDeletePrices = (id, index) => {
      id && deleteInfoRequest.call({ courseId, id, type: 'price' })
      setPrices(prices.filter((item, inx) => inx !== index))
   }
   const onDeleteImg = (id) => id && deleteInfoRequest.call({ courseId, id, type: 'image' })
   //  const changePricesModulesField = (field, index, value, checked) => {
   //     const newPrices = [...prices]
   //     newPrices[index][field] = newPrices[index][field] ? newPrices[index][field] : []
   //     checked ? newPrices[index][field].push(value) : (newPrices[index][field] = newPrices[index][field].filter((item) => item !== value))
   //     setPrices([...newPrices])
   //  }

   return (
      <>
         <div className='create-about card-bg'>
            <h3 className='create-about__title display-4'>О курсе</h3>
            <div className='create-about__editor'>
               <Input input={courseDescription} />
            </div>
         </div>
         <div className='create-whom card-bg'>
            <h3 className='create-whom__title display-4'>О курсе</h3>
            {descriptions.map((props, index) => (
               <AddCourseDescription key={index} {...props} index={index} onDelete={onDeleteDescription} onDeleteImg={onDeleteImg} descriptions={descriptions} />
            ))}
            <Button className='create-whom__add' onClick={() => onAddDescription()} outline>
               <AddSvg />
               <span>Добавить описание</span>
            </Button>
         </div>
         <div className='create-price card-bg'>
            <div className='course-edit__form-group form-group'>
               <h3 className='create-price__title display-4'>Результаты обучения</h3>
               <div className='create-about__editor'>
                  <Input input={result_learn_text} label={'Результаты обучения'} />
                  {/* <input type='text' placeholder='Результаты обучения' {...result_learn_text.bind} /> */}
               </div>
            </div>
         </div>
         <div className='create-price card-bg'>
            <h3 className='create-price__title display-4'>Стоимость</h3>
            {prices.map((props, index) => (
               <AddCoursePrice key={index} {...props} index={index} modules={modules} onDelete={onDeletePrices} prices={prices} />
            ))}
            <Button className='create-whom__add' onClick={onAddPrices} outline>
               <AddSvg />
               <span>Добавить вариант участия</span>
            </Button>
         </div>
      </>
   )
}

export default forwardRef(AddCourseTabDescription)
