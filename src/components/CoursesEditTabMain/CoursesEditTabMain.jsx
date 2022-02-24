import React, { forwardRef, useEffect, useImperativeHandle, useMemo, useRef } from 'react'
import { Checkbox, ImgUpload, ImgUploadNew, Input } from 'components/ui'
import { getDate, getURL, imageDimensionCheck, imageMinSizeCheck, imageRatioCheck, imageWidthAndHeight, timeout, toBoolean } from 'utils'
import { useSelector } from 'react-redux'
import { useDispatch, useInput, useInputFile, useInputFileNew, useNavigate, useRequest, useYupValidationResolver } from 'hooks'
import { useLocation, useParams } from 'react-router-dom'
import { useCallback } from 'react'
import { coursesSelectors, systemSelectors } from 'store/selectors'
import { useForm, useWatch } from 'react-hook-form'
import * as yup from 'yup'

yup.addMethod(yup.mixed, 'imageMinSizeCheck', imageMinSizeCheck)

const validationSchema = yup.object({
   name: yup.string().required('Обязательное поле'),
   category_id: yup.string().required('Обязательное поле'),
   type_study: yup.string().required('Обязательное поле'),
   format_study: yup.string().required('Обязательное поле'),
   anytime: yup.boolean().required('Обязательное поле'),
   width: yup.string().required('Обязательное поле'),
   sale_subscribe: yup.boolean().required('Обязательное поле'),
   imageValue: yup.string().required('Обязательное поле'),
   image: yup
      .mixed()
      .test('type', 'Не верный формат', (value) => {
         if (value && value.length === 0) return true
         return ['image/jpg', 'image/jpeg', 'image/png'].includes(value && value[0] && value[0].type)
      })
      .test('fileSize', 'Максимальный размер файла должен быть 5 МБ', (value) => {
         if (value && value.length === 0) return true
         return value && value[0] && value[0].size <= 5000000
      })
      .imageMinSizeCheck('Минимальное разрешение должно быть 1280-720px', 1280, 720),
})

const CoursesEditTabMain = ({ refTabs, refTab }) => {
   const { courseId } = useParams()
   const { toCabinetCoursesEdit } = useNavigate()
   const { setContent, setIsShow, CoursesEdit, putCourse } = useDispatch()
   const { themes = [], type_study = [], format = [] } = useSelector(systemSelectors.getReferences)
   const course = useSelector(coursesSelectors.getCourse)
   const hasCourse = !(Object.keys(course).length === 0)

   const form = useForm({
      mode: 'onChange',
      defaultValues: {},
      resolver: useYupValidationResolver(validationSchema),
   })
   const anytime = form.watch('anytime')
   //  const getEntries = async () => timeout(() => Object.entries(form.getValues()).filter(([key]) => !(key === 'timing' || key === 'image' || key === 'imageValue')))

   console.log(form.formState.errors)

   useEffect(() => {
      if (hasCourse) {
         ;(async () => {
            Object.entries(form.getValues())
               .filter(([k]) => k !== 'image')
               .forEach(([key]) => form.setValue(key, course[key]))
            form.setValue('anytime', toBoolean(course['anytime']))
            form.setValue('sale_subscribe', toBoolean(course['sale_subscribe']))
            form.setValue('imageValue', getURL.img(course['image'], false) ?? '')
            console.log(form.getValues())
         })()
      }
   }, [course])

   const CoursesEditRequest = useRequest({
      request: CoursesEdit,
      success: ({ response, data }) => {
         setIsShow(true)
         setContent({ title: 'Основная информация о курсе  - добавлена,', descr: 'теперь заполните Уроки' })
         toCabinetCoursesEdit({ courseId: data.course.id })
         refTabs.current.nextItems()
      },
   })
   const putCourseRequest = useRequest({
      request: putCourse,
      success: ({ response, data }) => {
         setIsShow(true)
         setContent({ title: 'Курс Обновлен' })
      },
   })

   const onSubmit = (data) => {
      const body = new FormData()

      Object.entries(data).forEach(([key, value]) => {
         const val = typeof value === 'boolean' ? +value : value?.constructor.name === 'FileList' ? value[0] : value
         if (val === undefined || val === null) return
         body.append(key, val)
      })

      console.log([...body.entries()])

      hasCourse ? putCourseRequest.call({ courseId, body }) : CoursesEditRequest.call({ body })
   }

   return (
      <form id='form-edit' onSubmit={form.handleSubmit(onSubmit)} className='course-edit__form'>
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
         <ImgUploadNew form={form} name='' title='Изображение' />
      </form>
   )
}

export default CoursesEditTabMain
