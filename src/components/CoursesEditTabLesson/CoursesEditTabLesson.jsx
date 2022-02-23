import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { Button, CardBg, Input } from 'components/ui'
import { useSelector } from 'react-redux'
import { useDispatch, useInput, useRequest } from 'hooks'
import { useParams } from 'react-router-dom'
import { asyncFind, declOfNum, timeout, uid } from 'utils'
import { ReactComponent as AddSvg } from 'svg/add.svg'
import { coursesSelectors } from 'store/selectors/'
import { useFieldArray, useForm, useWatch } from 'react-hook-form'
import { ReactComponent as DeleteSvg } from 'svg/delete.svg'
import { useCallback } from 'react'
import CoursesEditArrayFields from '../CoursesEdit/CoursesEditArrayFields'
import CoursesEditTabLessonTestLesson from './CoursesEditTabLessonTestLesson'
import CoursesEditTabLessonLesson from './CoursesEditTabLessonLesson'

const CoursesEditTabLesson = ({ refTabs, refTab }) => {
   const { courseId } = useParams()
   const { setContent, setIsShow, setModules, deleteModule, deleteLesson, addModulesMass } = useDispatch()
   const course = useSelector(coursesSelectors.getCourse)
   const modules = useSelector(coursesSelectors.getModules)
   const descriptions = useSelector(coursesSelectors.getDescriptions)
   const prices = useSelector(coursesSelectors.getPrices)
   const whoms = useSelector(coursesSelectors.getWhoms)

   const hasCourse = !(Object.keys(course).length === 0)
   const hasModules = modules && !(Object.keys(modules).length === 0)
   const hasDescriptions = !(Object.keys(descriptions).length === 0)
   const hasWhoms = !(Object.keys(whoms).length === 0)
   const hasPrices = !(Object.keys(prices).length === 0)
   const hasInfo = hasDescriptions || hasWhoms || hasPrices

   const form = useForm({
      mode: 'onBlur',
      defaultValues: {
         short_desc: '',
         test_lesson: '',
         modules: [],
      },
   })

   const getEntries = async () => timeout(() => Object.entries(form.getValues()).filter(([key]) => !(key === 'inputFile' || key === 'inputFileValue')))

   useEffect(() => {
      if (hasCourse) {
         ;(async () => {
            // form.reset()
            // })
         })()
         const newModules = modules.map((m) => ({
            name: m.name,
            id: m.id,
            lessons: m.lessons.map((l) => ({ name: l.name, number: l.number, id: l.id, hidden_id: l.hidden_id })) || [],
         }))
         // setTimeout(() => {
         form.resetField('test_lesson')
         form.setValue('short_desc', course.short_desc)
         newModules.length && form.setValue('modules', newModules)
         setTimeout(() => course.test_lesson && form.setValue('test_lesson', course.test_lesson?.hidden_id || ''), 0)
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
            : setContent({ title: 'Уроки обновлены', descr: '' })

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

   // TODO CREATE COMPONENT
   const value = useWatch({
      name: 'modules',
      control: form.control,
   })

   return (
      <>
         <CardBg className='course-edit__small-desc'>
            <div className='course-edit__small-desc-title display-4'>Короткое описание</div>
            <Input form={form} name='short_desc' label='Описание' textarea />
         </CardBg>

         <CardBg className='create-module'>
            <h3 className='create-module__title display-4'>Модули</h3>
            <div className='create-module__items'>
               <CoursesEditArrayFields isNestComponent={true} name='modules' onDelete={onDeleteModule} form={form} appendFields={{ name: '', text: '', lessons: [] }} btnText='Добавить модуль'>
                  {({ id, index, onRemove, name, form }) => (
                     <div key={id} className='create-module__item form-group'>
                        <label>Название модуля {index + 1}</label>
                        <div className='create-module__input'>
                           <Input form={form} name={`${name}.${index}.name`} placeholder='Название модуля' isErrorText={false} withoutWrapper />
                           <Input form={form} name={`${name}.${index}.id`} type='hidden' withoutWrapper />
                           <button className='create-module__delete' onClick={() => onRemove(index)}>
                              <DeleteSvg />
                           </button>
                        </div>
                     </div>
                  )}
               </CoursesEditArrayFields>
            </div>
         </CardBg>

         {value.map((props, index) => {
            return <CoursesEditTabLessonLesson key={props.id || index} nestIndex={index} form={form} onDeleteLesson={onDeleteLesson} {...props} />
         })}

         <CardBg className='create-module'>
            <CoursesEditTabLessonTestLesson {...{ form }} />
         </CardBg>
      </>
   )
}

export default CoursesEditTabLesson
