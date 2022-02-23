import React, { forwardRef, useEffect, useImperativeHandle, useMemo } from 'react'
import { Checkbox, ImgUpload, ImgUploadNew, Input } from 'components/ui'
import { getDate, getURL, timeout } from 'utils'
import { useSelector } from 'react-redux'
import { useDispatch, useInput, useInputFile, useInputFileNew, useNavigate, useRequest } from 'hooks'
import { useLocation, useParams } from 'react-router-dom'
import { useCallback } from 'react'
import { coursesSelectors, systemSelectors } from 'store/selectors'
import { useForm, useWatch } from 'react-hook-form'

const AddCourseTabMain = ({ refTabs, refTab }) => {
   const { courseId } = useParams()
   const { toCabinetCoursesEdit } = useNavigate()
   const { setContent, setIsShow, addCourse, putCourse } = useDispatch()
   const { themes = [], type_study = [], format = [] } = useSelector(systemSelectors.getReferences)
   const course = useSelector(coursesSelectors.getCourse)
   const hasCourse = !(Object.keys(course).length === 0)

   const form = useForm({
      mode: 'onBlur',
      defaultValues: {
         name: 'Название курса',
         category_id: themes[0]?.id || 1,
         type_study: type_study[0]?.id || 1,
         format_study: format[0]?.id || 1,
         sale_subscribe: false,
         anytime: true,
         width: '60 мин.',
      },
   })
   const anytime = form.watch('anytime')
   const inputFileObj = useInputFileNew({ form })
   const getEntries = async () => timeout(() => Object.entries(form.getValues()).filter(([key]) => !(key === 'timing' || key === 'inputFile' || key === 'inputFileValue')))

   useEffect(() => {
      if (hasCourse) {
         ;(async () => {
            ;(await getEntries()).forEach(([key]) => form.setValue(key, course[key] !== '0' ? course[key] : false ?? ''))
            inputFileObj.setValueImg(getURL.img(course.image, false) ?? '')
         })()
      }
   }, [course])

   const addCourseRequest = useRequest({
      request: addCourse,
      success: ({ response, data }) => {
         setIsShow(true)
         setContent({ title: 'Основная информация о курсе  - добавлена,', descr: 'теперь заполните Уроки' })
         refTabs.current.nextItems()
         toCabinetCoursesEdit({ courseId: data.course.id })
      },
   })
   const putCourseRequest = useRequest({
      request: putCourse,
      success: ({ response, data }) => {
         setIsShow(true)
         setContent({ title: 'Курс Обновлен' })
      },
   })

   const submit = async () => {
      if (!(await form.trigger())) return false

      const body = new FormData()

      ;(await getEntries()).forEach(([key, value]) => body.append(key, typeof value === 'boolean' ? +value : value))
      const inputFile = form.getValues('inputFile')
      inputFile[0] && body.append('image', inputFile[0])

      hasCourse ? putCourseRequest.call({ courseId, body }) : addCourseRequest.call({ body })
   }

   useImperativeHandle(refTab, () => ({ submit }))

   return (
      <form className='course-edit__form'>
         <h3 className='course-edit__form-title'>Основная информация</h3>
         <div className='course-edit__form-grid'>
            <Input form={form} name='name' label='Название' className='course-edit__form-group' />
            <Input form={form} name='category_id' label='Категория' options={themes} className='course-edit__form-group' />
            <Input form={form} name='type_study' label='Тип обучения' options={type_study} className='course-edit__form-group' />
            <Input form={form} name='format_study' label='Формат' options={format} className='course-edit__form-group' />
            <div className='course-edit__form-group form-group'>
               <label>Старт курса</label>
               {!anytime && <Input form={form} name='timing' placeholder='Старт курса' className='course-edit__form-group' withoutWrapper datepicker />}
               <Checkbox form={form} name='anytime' label='В любое время' className='course-edit__form-checkbox' />
            </div>
            <Input form={form} name='width' label='Длительность' className='course-edit__form-group' />
            <Checkbox form={form} name='sale_subscribe' label='Разрешить продавать по подписке' className='course-edit__form-checkbox' />
         </div>
         <ImgUploadNew inputFileObj={inputFileObj} title={'Изображение'} />
      </form>
   )
}

export default AddCourseTabMain
