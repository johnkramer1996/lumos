import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import { Button, Input } from 'components/ui'
import { useSelector } from 'react-redux'
import AddCourseLesson from './AddCourseLesson'
import { useDispatch, useInput, useRequest } from 'hooks'
import { Link, useParams } from 'react-router-dom'
import { asyncFind, declOfNum, getURL, timeout, uid } from 'utils'
import { coursesSelectors } from 'store/selectors/'
import { useFieldArray, useForm } from 'react-hook-form'
import { ReactComponent as AddSvg } from 'svg/add.svg'
import { ReactComponent as DeleteSvg } from 'svg/delete.svg'
import { ReactComponent as DragSvg } from 'svg/drag.svg'
import { ReactComponent as LinkSvg } from 'svg/link.svg'

const AddCourseModule = ({ control, register, setValue, getValues, form }) => {
   const { fields, append, remove } = useFieldArray({
      control,
      name: 'modules',
   })

   console.log(form)

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
                           <button className='create-module__delete' onClick={() => remove(index)}>
                              <DeleteSvg />
                           </button>
                        </div>
                     </div>
                  )
               })}
            </div>

            <Button
               className='create-module__add'
               onClick={() => {
                  append({ name: '' })
               }}
               outline
            >
               <AddSvg />
               <span>Добавить модуль</span>
            </Button>
         </div>

         {fields.map((item, index) => {
            return <NestedFieldArray key={item.id} nestIndex={index} {...{ control, register }} {...item} form={form} />
         })}
      </>
   )
}

export default AddCourseModule

const NestedFieldArray = ({ nestIndex, control, register, name, form }) => {
   const { courseId } = useParams()
   const { fields, remove, append } = useFieldArray({
      control,
      name: `modules.${nestIndex}.lessons`,
   })

   return (
      <div className='create-module card-bg'>
         <div className='create-module__top'>
            <h3 className='create-module__title display-4'>{name || 'Модуль ' + (nestIndex + 1)}</h3>
            <div className='create-module__num'>{/* {lessons?.length} {declOfNum(lessons?.length, getDeclOfArray['lessons'])} */}</div>
         </div>
         {fields.map((item, k) => {
            return (
               <div key={item.id} className='create-module__item form-group'>
                  <div className='create-module__input'>
                     <button className='create-module__drag'>
                        <DragSvg />
                     </button>
                     <Link to={getURL.cabinetCoursesLessonEdit({ courseId, lessonId: 1 })} className='create-module__link'>
                        <LinkSvg />
                     </Link>
                     <Input form={form} name={`modules.${nestIndex}.lessons.${k}.name`} placeholder='Название урока' withoutWrapper />
                     <button className='create-module__delete' onClick={() => remove(k)}>
                        <DeleteSvg />
                     </button>
                  </div>
               </div>
            )
         })}

         <Button
            className='create-module__add'
            onClick={() =>
               append({
                  name: '',
               })
            }
            outline
         >
            <AddSvg />
            <span>Добавить урок</span>
         </Button>
      </div>
   )
}
