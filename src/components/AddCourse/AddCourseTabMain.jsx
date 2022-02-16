import React, { forwardRef, useEffect, useImperativeHandle, useMemo } from 'react'
import { Checkbox, ImgUpload, Input } from 'components/ui'
import { getDate, getURL } from 'utils'
import { useSelector } from 'react-redux'
import { useDispatch, useInput, useInputFile, useNavigate, useRequest } from 'hooks'
import { useParams } from 'react-router-dom'
import { useCallback } from 'react'
import { coursesSelectors } from 'store/selectors'

const AddCourseTabMain = ({ refTabs, onUpdateListener }, ref) => {
   const { courseId } = useParams()
   const { toCabinetCoursesEdit } = useNavigate()
   const { setContent, setIsShow, setCourse, addCourse, putCourse } = useDispatch()
   const { themes = [], type_study: typeStudy = [], format = [] } = useSelector(({ system }) => system.references)
   const course = useSelector(coursesSelectors.getCourse)
   const hasCourse = !(Object.keys(course).length === 0)

   const name = useInput({ bind: { name: 'name' }, is: { isRequired: true, isName: true } })
   const category_id = useInput({ bind: { name: 'category_id' }, is: { isRequired: true } })
   const type_study = useInput({ bind: { name: 'type_study' }, is: { isRequired: true } })
   const format_study = useInput({ bind: { name: 'format_study' }, is: { isRequired: true } })
   const anytime = useInput({ initialValue: '0', bind: { name: 'anytime' }, is: { isCheckbox: true } })
   const sale_subscribe = useInput({ initialValue: '0', bind: { name: 'sale_subscribe' }, is: { isCheckbox: true } })
   const timing = useInput({ initialValue: getDate(new Date(), { monthNames: false, isDayFirst: false }), bind: { name: 'timing' }, is: { isDate: true } })
   const width = useInput({ bind: { name: 'width' }, is: { isRequired: true } })
   const img = useInputFile()

   const getAllInputs = useCallback(
      () => [name, category_id, type_study, format_study, anytime, sale_subscribe, width, img],
      [name, category_id, type_study, format_study, anytime, sale_subscribe, width, img],
   )

   useEffect(() => onUpdateListener(-2), [])
   useEffect(() => onUpdateListener(1), [getAllInputs().reduce((prev, { value }) => prev + String(value), '')])

   useEffect(() => {
      name.setValue(course.name || '')
      category_id.setValue(course.category_id || '')
      type_study.setValue(course.type_study || '')
      format_study.setValue(course.format_study || '')
      sale_subscribe.setValue(course.sale_subscribe || '0')
      anytime.setValue(course.anytime || '0')
      width.setValue(course.width || '')
      img.setValue(getURL.img(course.image, false) || '')
   }, [course])

   const addCourseRequest = useRequest({
      request: addCourse,
      success: ({ response, data }) => {
         setIsShow(true)
         setContent({ title: 'Основная информация о курсе  - добавлена,', descr: 'теперь заполните Уроки' })
         refTabs.current.nextItems()
         toCabinetCoursesEdit({ id: data.course.id })
      },
   })
   const putCourseRequest = useRequest({
      request: putCourse,
      success: ({ response, data }) => {
         setIsShow(true)
         setContent({ title: 'Курс Обновлен' })
      },
   })

   useImperativeHandle(ref, () => ({
      update: () => getAllInputs().filter((i) => i.update()),
      check: () => !getAllInputs().filter((i) => i.check(i.value)).length,
      send: () => {
         if (!ref.current.check()) return
         const body = new FormData()
         // TODO OPTIMIZE CODE
         // getAllInputs().forEach((i) => body.append(i.bind.name, i.value))
         body.append('name', name.value)
         body.append('category_id', category_id.value)
         body.append('type_study', type_study.value)
         body.append('format_study', format_study.value)
         // body.append('timing', timing.value)
         body.append('anytime', +anytime.value)
         body.append('sale_subscribe', +sale_subscribe.value)
         body.append('width', width.value)
         img.ref.current?.files[0] && body.append('image', img.ref.current?.files[0])

         hasCourse ? putCourseRequest.call({ courseId, body }) : addCourseRequest.call({ body })
      },
   }))

   return (
      <div className='course-edit__form'>
         <h3 className='course-edit__form-title'>Основная информация</h3>
         <div className='course-edit__form-grid'>
            <Input className='course-edit__form-group' input={name} label={'Название'} />
            <Input className='course-edit__form-group' input={category_id} label={'Категория'} list={themes} />
            <Input className='course-edit__form-group' input={type_study} label={'Тип обучения'} list={typeStudy} />
            <Input className='course-edit__form-group' input={format_study} label={'Формат'} list={format} />
            <div className='course-edit__form-group form-group'>
               <Input className='course-edit__form-group' input={timing} label={'Старт курса'} />
               <Checkbox className='course-edit__form-checkbox' input={anytime} label={'В любое время'} />
            </div>
            <Input className='course-edit__form-group' input={width} label={'Длительность'} />
            <Checkbox className='course-edit__form-checkbox' input={sale_subscribe} label={'Разрешить продавать по подписке'} />
         </div>
         <ImgUpload img={img} title={'Изображение'} />
      </div>
   )
}

export default forwardRef(AddCourseTabMain)
