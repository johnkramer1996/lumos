import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import { Button, Input } from 'components/ui'
import { useSelector } from 'react-redux'
import { useDispatch, useInput, useRequest } from 'hooks'
import { Link, useParams } from 'react-router-dom'
import { asyncFind, declOfNum, getDeclOfArray, getURL, timeout, uid } from 'utils'
import { coursesSelectors } from 'store/selectors/'
import { useFieldArray, useForm } from 'react-hook-form'
import { ReactComponent as AddSvg } from 'svg/add.svg'
import { ReactComponent as DeleteSvg } from 'svg/delete.svg'
import { ReactComponent as DragSvg } from 'svg/drag.svg'
import { ReactComponent as LinkSvg } from 'svg/link.svg'

const AddCourseModule = ({ control, register, setValue, getValues, form, onDeleteModule, onDeleteLesson }) => {
   const { setIsShow, setContent } = useDispatch()
   const { fields, append, remove } = useFieldArray({
      control,
      name: 'modules',
   })

   const onAdd = async () => {
      if (!(await form.trigger('modules'))) return
      append({ name: '' })
   }

   const onRemove = async (index) => {
      if (fields[index].lessons.length) {
         setIsShow(true)
         setContent({ title: 'У модуля есть уроки, ', descr: 'удалите уроки, потом удалите модуль' })
         return
      }

      onDeleteModule(fields[index]._id)
      remove(index)
   }

   return (
      <>
         <div className='create-module card-bg'>
            <h3 className='create-module__title display-4'>Модули</h3>
            <div className='create-module__items'>
               {fields.map((item, index) => {
                  return (
                     <div key={item.id} className='create-module__item form-group'>
                        <label>Название модуля {index + 1}</label>
                        <div className='create-module__input'>
                           <Input form={form} name={`modules.${index}.name`} placeholder='Название модуля' withoutWrapper />
                           <button className='create-module__delete' onClick={() => onRemove(index)}>
                              <DeleteSvg />
                           </button>
                        </div>
                     </div>
                  )
               })}
            </div>

            <Button className='create-module__add' onClick={onAdd} outline>
               <AddSvg />
               <span>Добавить модуль</span>
            </Button>
         </div>

         {fields.map((item, index) => {
            return <AddCourseLesson key={item.id} nestIndex={index} {...{ control, register }} {...item} form={form} onDeleteLesson={onDeleteLesson} />
         })}
      </>
   )
}

export default AddCourseModule

const AddCourseLesson = ({ nestIndex, control, register, form, onDeleteLesson }) => {
   const { courseId } = useParams()
   const { setIsShow, setContent } = useDispatch()
   const { fields, remove, append } = useFieldArray({
      control,
      name: `modules.${nestIndex}.lessons`,
   })

   const onAdd = async () => {
      if (!(await form.trigger('modules'))) return
      append({
         name: '',
         number: fields.length,
         hidden_id: uid(),
      })
   }

   const onRemove = async (index) => {
      onDeleteLesson(fields[index]._id)
      remove(index)
   }

   const addLesson = (index) => {
      // if (!lessonId) {
      //    return
      // }
      setIsShow(true)
      setContent({ title: 'Сначала сохраните ' })
   }

   const name = form.watch(`modules.${nestIndex}.name`)

   return (
      <div className='create-module card-bg'>
         <div className='create-module__top'>
            <h3 className='create-module__title display-4'>{name || 'Модуль ' + (nestIndex + 1)}</h3>
            <div className='create-module__num'>
               {fields.length} {declOfNum(fields.length, getDeclOfArray['lessons'])}
            </div>
         </div>
         {fields.map((item, index) => {
            const lessonId = fields[index]._id
            return (
               <div key={item.id} className='create-module__item form-group'>
                  <div className='create-module__input'>
                     <button className='create-module__drag'>
                        <DragSvg />
                     </button>

                     {lessonId ? (
                        <Link to={getURL.cabinetCoursesLessonEdit({ courseId, lessonId })} className='create-module__link'>
                           <LinkSvg />
                        </Link>
                     ) : (
                        <div className='create-module__link' onClick={addLesson}>
                           <LinkSvg />
                        </div>
                     )}
                     <Input form={form} name={`modules.${nestIndex}.lessons.${index}.name`} placeholder='Название урока' withoutWrapper />
                     <Input form={form} name={`modules.${nestIndex}.lessons.${index}.number`} withoutWrapper />
                     <Input form={form} name={`modules.${nestIndex}.lessons.${index}.hidden_id`} withoutWrapper />
                     <button className='create-module__delete' onClick={() => onRemove(index)}>
                        <DeleteSvg />
                     </button>
                  </div>
               </div>
            )
         })}

         <Button className='create-module__add' onClick={onAdd} outline>
            <AddSvg />
            <span>Добавить урок</span>
         </Button>
      </div>
   )
}
