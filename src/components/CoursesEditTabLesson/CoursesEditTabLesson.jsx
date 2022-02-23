import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import { Button, Input } from 'components/ui'
import { useSelector } from 'react-redux'
import CoursesEditLesson from './CoursesEditLesson'
import CoursesEditModule from './CoursesEditModule'
import { useDispatch, useInput, useRequest } from 'hooks'
import { useParams } from 'react-router-dom'
import { asyncFind, declOfNum, timeout, uid } from 'utils'
import { ReactComponent as AddSvg } from 'svg/add.svg'
import { coursesSelectors } from 'store/selectors/'
import { useFieldArray, useForm, useWatch } from 'react-hook-form'
import { ReactComponent as DeleteSvg } from 'svg/delete.svg'
import { useCallback } from 'react'

const CoursesEditTabLesson = ({ refTabs, refTab }) => {
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
      defaultValues: {
         short_desc: '',
         test_lesson: '',
         modules: [],
      },
      mode: 'onBlur',
      // reValidateMode: 'onChange',
   })

   console.log()

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
            const newModules = modules.map((m) => ({
               name: m.name,
               id: m.id,
               lessons: m.lessons.map((l) => ({ name: l.name, number: l.number, id: l.id, hidden_id: l.hidden_id })),
            }))
            form.reset()
            setTimeout(() => {
               form.setValue('short_desc', course.short_desc)
               form.setValue('modules', newModules)
               if (course.test_lesson) {
                  form.setValue('test_lesson', course.test_lesson?.hidden_id || '')
               }
            })
         })()
      }
   }, [modules, course])

   const addModulesMassRequest = useRequest({
      request: addModulesMass,
      success: ({ response, data }) => {
         setIsShow(true)
         !hasModules && !hasInfo
            ? setContent({ title: 'Уроки добавлены,', descr: 'Заполните описание курса и его стоимость.' })
            : !hasInfo
            ? setContent({ title: 'Уроки обновлены,', descr: 'Заполните описание курса и его стоимость.' })
            : setContent({ title: 'Уроки обновлены,', descr: '' })

         !hasInfo && refTabs?.current?.nextItems()
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

   const onDeleteModule = useCallback((id) => id && deleteModuleRequest.call({ courseId, id }), [])

   const onDeleteLesson = useCallback((lessonId) => lessonId && deleteLessonRequest.call({ courseId, lessonId }), [])

   const submit = async () => {
      if (!(await form.trigger())) return false

      const body = {
         modules: [],
         moduls: [],
         test_lesson: '',
      }
      ;(await getEntries()).forEach(([key, value]) => (body[key] = typeof value === 'boolean' ? +value : value))

      body.moduls = body.modules.map((m) => ({ ...m, lessons: m.lessons.map((l) => ({ ...l, is_test: l.hidden_id === body.test_lesson })) }))

      delete body.modules
      delete body.test_lesson

      addModulesMassRequest.call({ courseId, body })
   }

   useImperativeHandle(refTab, () => ({ submit }))

   return (
      <>
         <div className='course-edit__small-desc card-bg'>
            <div className='course-edit__small-desc-title display-4'>Короткое описание</div>
            <Input form={form} name='short_desc' label='Описание' textarea />
         </div>

         <CoursesEditModule {...{ form, onDeleteModule, onDeleteLesson }} />

         <TestLesson {...{ form }} />
      </>
   )
}

export default CoursesEditTabLesson

const TestLesson = ({ form }) => {
   const modules = useWatch({
      control: form.control,
      name: 'modules',
   })
   const lessons = modules
      .map((m) => m.lessons.map((l) => ({ name: l.name, id: l.hidden_id })))
      .flat()
      .filter(({ name }) => name !== '')
   lessons.unshift({ name: 'Без тестового урока', id: 0 })

   return (
      <div className='create-module card-bg'>
         <div className='create-module__top'>
            <h3 className='create-module__title display-4'>Тестовый урок</h3>
         </div>
         <div className='create-module__items'>
            <Input form={form} name='test_lesson' label='Выберите тестовый урок' options={lessons} classNameWrapper='create-module__item' />
         </div>
      </div>
   )
}
