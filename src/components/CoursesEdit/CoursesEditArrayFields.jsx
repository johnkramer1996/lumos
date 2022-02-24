import React from 'react'
import { Button, CardBg, Input } from 'components/ui'
import { useDispatch } from 'hooks'
import { declOfNum, getDeclOfArray, getURL, uid } from 'utils'
import { useFieldArray, useWatch } from 'react-hook-form'
import { ReactComponent as AddSvg } from 'svg/add.svg'
import CoursesEditTabLessonLesson from 'components/CoursesEditTabLesson/CoursesEditTabLessonLesson'

const CoursesEditArrayFields = ({ children, form, onDelete, onDeleteLesson, appendFields, name = '', btnText = '' }) => {
   const { setIsShow, setContent } = useDispatch()
   const { fields, append, remove } = useFieldArray({
      control: form.control,
      name,
   })
   const array = form.getValues(name)

   const onAdd = async (e) => {
      console.log(e)
      e.preventDefault()
      append(appendFields)
   }

   const onRemove = (index) => {
      console.log(fields[index].lessons)
      // TODO RETURN CONDITION
      if (fields[index].lessons?.length) {
         setIsShow(true)
         setContent({ title: 'У модуля есть уроки, ', descr: 'удалите уроки, потом удалите модуль' })
         return
      }
      onDelete(array[index].id)
      remove(index)
   }

   return (
      <>
         <div className='create-module__items'>{fields.map((props, index) => children({ ...props, index, onRemove, name, form, fields }))}</div>
         <Button className='create-module__add' onClick={onAdd} outline>
            <AddSvg />
            <span>{btnText}</span>
         </Button>
         {form.formState.errors[name] && <div className='input-error-text'>{form.formState.errors[name].message || 'Обязательное поле'}</div>}
      </>
   )
}

export default CoursesEditArrayFields

const NestArray = ({ fields, form, onDeleteLesson }) => {
   return <></>
}
