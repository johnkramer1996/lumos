import { Button, Input } from 'components/ui'
import { useDispatch, useInput, useRequest } from 'hooks'
import React, { forwardRef, useCallback, useEffect, useImperativeHandle } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import AddCoursePrice from './AddCoursePrice'
import { ReactComponent as AddSvg } from 'svg/add.svg'
import { coursesSelectors } from 'store/selectors'
import AddCourseBlock from './AddCourseBlock'

const AddCourseTabDescription = ({ onUpdateListener }, ref) => {
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

   const courseDescription = useInput({ bind: { name: 'courseDescription' }, is: { isRequired: true, isTextarea: true } })
   const result_learn_text = useInput({ bind: { name: 'result_learn_text' }, is: { isRequired: true, isTextarea: true } })

   const getAllInputs = useCallback(() => {
      const descriptionsInputs = descriptions.map(({ inputs }) => inputs).flat()
      const pricesInputs = prices.map(({ inputs }) => [...inputs]).flat()
      const whomsInputs = whoms.map(({ inputs }) => [...inputs]).flat()
      return [courseDescription, result_learn_text, ...descriptionsInputs, ...pricesInputs, ...whomsInputs]
   }, [courseDescription, result_learn_text, descriptions, prices, whoms])

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
         //  if (!descriptions.length || !prices.length) return
         return !getAllInputs().filter((i) => i.check(i.value)).length
      },
      send: () => {
         const createId = (id, index) => {
            console.log(id, index)
            return id !== undefined ? id : 'new_' + index
         }
         const createField = (id, index, body, inputs, fieldName) => {
            const newId = createId(id, index)
            inputs.forEach((input) => {
               if (Array.isArray(input.value)) {
                  input.value.forEach((val) => {
                     console.log(fieldName, input)
                     body.append(`${fieldName}[${newId}][${input.bind.name}][]`, val)
                  })

                  return
               }

               body.append(`${fieldName}[${newId}][${input.ref.current.name}]`, input.ref.current.name !== 'image' ? input.value : input.ref.current?.files[0])
            })
         }

         const body = new FormData()

         body.append('course_description', courseDescription.value)
         body.append('result_learn_text', result_learn_text.value)

         descriptions.forEach(({ id, inputs }, index) => createField(id, index, body, inputs, `descriptions`))
         prices.forEach(({ id, inputs }, index) => createField(id, index, body, inputs, `prices`))
         whoms.forEach(({ id, inputs }, index) => createField(id, index, body, inputs, `whoms`))
         console.log(whoms)
         // checkboxs.value.forEach((item) => body.append(`prices[${id}][moduls][]`, item))
         for (const [key, value] of body.entries()) console.log(key, value)

         editInfoRequest.call({ courseId, body })
      },
   }))

   const onAddBlockItem = (state, setState) => {
      if (state.filter((item) => item.inputs.filter((i) => i.check(i.value)).length).length) return
      setState([...state, {}])
   }
   const onDeleteBlock = (state, setState, type, id, index) => {
      if (state.length === 1) {
         setIsShow(true)
         setContent({ title: 'Нельзя удалить единственный блок' })
         return
      }
      // id && deleteInfoRequest.call({ courseId, id, type: 'desc' })
      id && deleteInfoRequest.call({ courseId, id, type })
      setState([...state.filter((item, inx) => inx !== index)])
   }
   const onDeleteImg = (id) => id && deleteInfoRequest.call({ courseId, id, type: 'image' })

   console.log(whoms)

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
               <AddCourseBlock array={descriptions} key={index} {...props} index={index} onDelete={onDeleteBlock.bind(null, descriptions, setDescriptions, 'desc')} onDeleteImg={onDeleteImg} />
            ))}
            <Button className='create-whom__add' onClick={onAddBlockItem.bind(null, descriptions, setDescriptions)} outline>
               <AddSvg />
               <span>Добавить описание</span>
            </Button>
         </div>
         <div className='create-whom card-bg'>
            <h3 className='create-whom__title display-4'>Кому подойдет курс</h3>
            {whoms.map((props, index) => (
               <AddCourseBlock array={whoms} key={index} {...props} index={index} onDelete={onDeleteBlock.bind(null, whoms, setWhoms, 'whom')} onDeleteImg={onDeleteImg} />
            ))}
            <Button className='create-whom__add' onClick={onAddBlockItem.bind(null, whoms, setWhoms)} outline>
               <AddSvg />
               <span>Добавить описание</span>
            </Button>
         </div>
         <div className='create-price card-bg'>
            <div className='course-edit__form-group form-group'>
               <h3 className='create-price__title display-4'>Результаты обучения</h3>
               <div className='create-about__editor'>
                  <Input input={result_learn_text} label={'Результаты обучения'} />
               </div>
            </div>
         </div>
         <div className='create-price card-bg'>
            <h3 className='create-price__title display-4'>Стоимость</h3>
            {prices.map((props, index) => (
               <AddCoursePrice key={index} {...props} index={index} onDelete={onDeleteBlock.bind(null, descriptions, setDescriptions, 'price')} />
            ))}
            <Button className='create-whom__add' onClick={() => onAddBlockItem(prices, setPrices)} outline>
               <AddSvg />
               <span>Добавить вариант участия</span>
            </Button>
         </div>
      </>
   )
}

export default forwardRef(AddCourseTabDescription)
