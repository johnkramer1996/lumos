import React from 'react'
import { Button } from 'components/ui'
import { useDispatch } from 'hooks'
import { useFieldArray } from 'react-hook-form'
import { ReactComponent as AddSvg } from 'svg/add.svg'

const CoursesEditArrayFields = ({ children, form, onDelete, appendFields, name = '', btnText = '' }) => {
   const { setIsShow, setContent } = useDispatch()
   const { fields, append, remove } = useFieldArray({
      control: form.control,
      name,
   })
   const array = form.getValues(name)

   const onAdd = async (e) => {
      e.preventDefault()
      form.clearErrors(`${name}`)
      append(appendFields)
   }

   const onRemove = (index) => {
      // TODO RETURN CONDITION
      if (form.getValues(`${name}.${index}.lessons`)?.length) {
         setIsShow(true)
         setContent({ title: 'У модуля есть уроки, ', descr: 'удалите уроки, потом удалите модуль' })
         return
      }
      onDelete(array[index].id)
      remove(index)
   }

   const { isDirty, errors } = form.formState

   return (
      <>
         <div className='create-module__items'>{fields.map((props, index) => children({ ...props, index, onRemove, name, form, fields }))}</div>
         <Button className='create-module__add' onClick={onAdd} outline>
            <AddSvg />
            <span>{btnText}</span>
         </Button>
         {form.formState.errors[name] && <div className='input-error-text'>{form.formState.errors[name].message}</div>}
      </>
   )
}

export default CoursesEditArrayFields
