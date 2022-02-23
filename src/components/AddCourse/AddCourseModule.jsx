import React from 'react'
import { Button, Input } from 'components/ui'
import { useDispatch } from 'hooks'
import { Link, useParams } from 'react-router-dom'
import { declOfNum, getDeclOfArray, getURL, uid } from 'utils'
import { useFieldArray, useWatch } from 'react-hook-form'
import { ReactComponent as AddSvg } from 'svg/add.svg'
import { ReactComponent as DeleteSvg } from 'svg/delete.svg'
import { ReactComponent as DragSvg } from 'svg/drag.svg'
import { ReactComponent as LinkSvg } from 'svg/link.svg'

const AddCourseModule = ({ form, onDeleteModule, onDeleteLesson }) => {
   const { setIsShow, setContent } = useDispatch()
   const { fields, append, remove } = useFieldArray({
      control: form.control,
      name: 'modules',
   })

   const onAdd = async () => {
      if (!(await form.trigger('modules'))) return
      append({ name: '' })
   }

   const onRemove = async (index) => {
      console.log(fields[index].lessons?.length)
      if (fields[index].lessons?.length) {
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
               {fields.map(({ id, _id }, index) => {
                  return (
                     <div key={id || _id} className='create-module__item form-group'>
                        <label>Название модуля {index + 1}</label>
                        <div className='create-module__input'>
                           <Input form={form} name={`modules.${index}.name`} placeholder='Название модуля' withoutWrapper />
                           <Input form={form} name={`modules.${index}.id`} registerOptions={{ required: false }} type='hidden' withoutWrapper />
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

         {fields.map((props, index) => {
            return <AddCourseLesson key={props.id} nestIndex={index} {...{ form }} {...props} onDeleteLesson={onDeleteLesson} />
         })}
      </>
   )
}

export default AddCourseModule

const AddCourseLesson = ({ nestIndex, form, onDeleteLesson }) => {
   const { courseId } = useParams()
   const { setIsShow, setContent } = useDispatch()
   const { fields, remove, append } = useFieldArray({
      control: form.control,
      name: `modules.${nestIndex}.lessons`,
   })

   const name = useWatch({
      control: form.control,
      name: `modules.${nestIndex}.name`,
   })

   const onAdd = async () => {
      if (!(await form.trigger('modules'))) return
      console.log(fields)
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

   const addLesson = () => {
      setIsShow(true)
      setContent({ title: 'Сначала нужно сохранить ' })
   }

   return (
      <div className='create-module card-bg'>
         <div className='create-module__top'>
            <h3 className='create-module__title display-4'>{name || 'Модуль ' + (nestIndex + 1)}</h3>
            <div className='create-module__num'>
               {fields.length} {declOfNum(fields.length, getDeclOfArray['lessons'])}
            </div>
         </div>
         {fields.map((item, index) => {
            const lessonId = form.getValues(`modules.${nestIndex}.lessons.${index}.id`)
            console.log(lessonId)
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
                     <Input form={form} name={`modules.${nestIndex}.lessons.${index}.name`} placeholder='Название урока' isErrorText={false} withoutWrapper />
                     <Input form={form} name={`modules.${nestIndex}.lessons.${index}.number`} registerOptions={{ required: false }} type='hidden' withoutWrapper />
                     <Input form={form} name={`modules.${nestIndex}.lessons.${index}.hidden_id`} registerOptions={{ required: false }} type='hidden' withoutWrapper />
                     <Input form={form} name={`modules.${nestIndex}.lessons.${index}.id`} registerOptions={{ required: false }} type='hidden' withoutWrapper />
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
