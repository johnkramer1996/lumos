import React from 'react'
import { Button, CardBg, Input } from 'components/ui'
import { useDispatch } from 'hooks'
import { Link, useParams } from 'react-router-dom'
import { declOfNum, getDeclOfArray, getURL, uid } from 'utils'
import { useFieldArray, useWatch } from 'react-hook-form'
import { ReactComponent as AddSvg } from 'svg/add.svg'

const CoursesEditArrayFields = ({ children, form, onDelete, appendFields, name = '', btnText = '' }) => {
   const { fields, append, remove } = useFieldArray({
      control: form.control,
      name,
   })
   const array = form.getValues(name)

   const onAdd = async () => {
      if (!(await form.trigger(name))) return
      console.log(name, form)
      append(appendFields)
   }

   const onRemove = (index) => {
      onDelete(array[index].id)
      remove(index)
   }
   // TODO RETURN CONDITION
   //  const { setIsShow, setContent } = useDispatch()
   // if (fields[index].lessons?.length) {
   //    setIsShow(true)
   //    setContent({ title: 'У модуля есть уроки, ', descr: 'удалите уроки, потом удалите модуль' })
   //    return
   // }

   return (
      <>
         <div className='create-module__items'>{fields.map((props, index) => children({ ...props, index, onRemove, name, form }))}</div>
         <Button className='create-module__add' onClick={onAdd} outline>
            <AddSvg />
            <span>{btnText}</span>
         </Button>
      </>
   )
}

export default CoursesEditArrayFields
