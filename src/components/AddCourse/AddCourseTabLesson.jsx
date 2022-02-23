import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import { Button, Input } from 'components/ui'
import { useSelector } from 'react-redux'
import AddCourseLesson from './AddCourseLesson'
import AddCourseModule from './AddCourseModule'
import { useDispatch, useInput, useRequest } from 'hooks'
import { useParams } from 'react-router-dom'
import { asyncFind, declOfNum, timeout, uid } from 'utils'
import { ReactComponent as AddSvg } from 'svg/add.svg'
import { coursesSelectors } from 'store/selectors/'
import { useFieldArray, useForm } from 'react-hook-form'
import { ReactComponent as DeleteSvg } from 'svg/delete.svg'

const defaultValues = {
   short_desc: '',
   test_lesson: '',
   modules: [
      {
         name: 'Модуль 1',
         lessons: [],
      },
      {
         name: 'Модуль 2',
         lessons: [],
      },
   ],
}

const AddCourseTabLesson = ({ refTabs }, ref) => {
   const { courseId } = useParams()
   const { setContent, setIsShow, setModules, deleteModule, deleteLesson, addModulesMass } = useDispatch()
   const course = useSelector(coursesSelectors.getCourse)
   const modules = useSelector(coursesSelectors.getModules)
   const descriptions = useSelector(coursesSelectors.getDescriptions)
   const prices = useSelector(coursesSelectors.getPrices)

   const hasCourse = !(Object.keys(course).length === 0)
   const hasModules = modules && !(Object.keys(modules).length === 0)
   const hasInfo = !(Object.keys(descriptions).length === 0 && Object.keys(prices).length === 0)

   const form = useForm({
      defaultValues,
      mode: 'onBlur',
   })

   const {
      control,
      register,
      getValues,
      formState: { errors },
      setValue,
   } = form

   const getEntries = async () => timeout(() => Object.entries(form.getValues()).filter(([key]) => !(key === 'inputFile' || key === 'inputFileValue')))

   useEffect(() => {
      if (hasCourse) {
         ;(async () => {
            // ;(await getEntries()).forEach(([key]) => form.setValue(key, course[key] !== '0' ? course[key] : false ?? ''))
            const newModules = course.moduls.map((m) => ({ ...m, _id: m.id, lessons: m.lessons.map((l) => ({ name: '', ...l, _id: l.id, module: null })) }))
            form.reset()
            form.setValue('short_desc', course.short_desc)
            form.setValue('modules', newModules)
            if (course.test_lesson?.hidden_id) {
               form.setValue('test_lesson', course.test_lesson?.hidden_id || '')
            }
         })()
      }
   }, [course])

   const addModulesMassRequest = useRequest({
      request: addModulesMass,
      success: ({ response, data }) => {
         setIsShow(true)
         !hasModules && !hasInfo
            ? setContent({ title: 'Уроки добавлены,', descr: 'Заполните описание курса и его стоимость.' })
            : !hasInfo
            ? setContent({ title: 'Уроки обновлены,', descr: 'Заполните описание курса и его стоимость.' })
            : setContent({ title: 'Уроки обновлены,', descr: '' })

         !hasInfo && refTabs.current.nextItems()
      },
   })

   const deleteModuleRequest = useRequest({
      request: deleteModule,
      success: ({ response, data }) => {
         setIsShow(true)
         setContent({ title: 'Модуль удален,', descr: '' })
      },
   })
   const deleteLessonRequest = useRequest({
      request: deleteLesson,
      success: ({ response, data }) => {
         setIsShow(true)
         setContent({ title: 'Урок удален', descr: '' })
      },
   })

   const onDeleteModule = (id) => {
      console.log(id)
      id && deleteModuleRequest.call({ courseId, id })
   }

   const onDeleteLesson = (lessonId) => lessonId && deleteLessonRequest.call({ courseId, lessonId })

   const submit = async () => {
      if (!(await form.trigger())) return false

      const body = {}
      ;(await getEntries()).forEach(([key, value]) => (body[key] = typeof value === 'boolean' ? +value : value))
      body.moduls = body.modules.map((m) => ({ ...m, lessons: m.lessons.map((l, i) => ({ ...l, number: i, is_test: body.test_lesson === l.hidden_id })) }))

      delete body.modules
      // delete body.text_lesson

      addModulesMassRequest.call({ courseId, body })
   }

   useImperativeHandle(ref, () => ({ submit }))

   const modulesFields = form.watch('modules')
   console.log(modulesFields)
   const lessons = modulesFields
      ?.map((m) => m.lessons.map((l) => ({ ...l, id: l.hidden_id })))
      .flat()
      ?.filter(({ name }) => name !== '')

   return (
      <>
         <div className='course-edit__small-desc card-bg'>
            <div className='course-edit__small-desc-title display-4'>Короткое описание</div>
            <Input form={form} name='short_desc' label='Описание' textarea />
         </div>

         <AddCourseModule {...{ control, register, defaultValues, getValues, setValue, errors, form, onDeleteModule, onDeleteLesson }} />

         <div className='create-module card-bg'>
            <div className='create-module__top'>
               <h3 className='create-module__title display-4'>Тестовый урок</h3>
            </div>
            <div className='create-module__items'>
               <Input form={form} name='test_lesson' label='Выберите тестовый урок' options={lessons} classNameWrapper='create-module__item' />
               {/*  <div className='create-module__item form-group'>
                  <label htmlFor='test_lesson'>Выберите тестовый урок</label>

              <select {...form.register('test_lesson', { required: true })}>
                     <option defaultValue hidden>
                        Выберите тестовый урок
                     </option>
                     <option value='0'>Без тестового урока</option>
                     {lessons.map(({ _id, name, hidden_id }, indexLesson) => (
                        <option key={_id ?? hidden_id ?? indexLesson} value={hidden_id}>
                           {name}
                        </option>
                     ))}
                  </select>
                  {errors.test_lesson && 'errror'} 
               </div>*/}
            </div>
         </div>
      </>
   )
}

export default forwardRef(AddCourseTabLesson)
