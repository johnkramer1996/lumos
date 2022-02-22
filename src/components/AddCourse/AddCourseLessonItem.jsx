import { useInput } from 'hooks'
import React, { useEffect } from 'react'
import { ReactComponent as DragSvg } from 'svg/drag.svg'
import { ReactComponent as LinkSvg } from 'svg/link.svg'
import { ReactComponent as DeleteSvg } from 'svg/delete.svg'
import { Link, useParams } from 'react-router-dom'
import { getURL } from 'utils'
import { useSelector } from 'react-redux'
import { coursesSelectors } from 'store/selectors'
import { useForm } from 'react-hook-form'
import { Input } from 'components/ui'

const AddCourseLessonItem = ({ id, indexModule, name, index, onDelete }) => {
   const { courseId } = useParams()
   const modules = useSelector(coursesSelectors.getModules)

   const form = useForm({
      mode: 'onBlur',
      defaultValues: {
         name: name || 'name test',
      },
   })

   const input = useInput({})
   modules[indexModule].lessons[index].input = input

   return (
      <div className='create-module__item form-group'>
         <div className='create-module__input'>
            <button className='create-module__drag'>
               <DragSvg />
            </button>
            <Link to={getURL.cabinetCoursesLessonEdit({ courseId, lessonId: id })} className='create-module__link'>
               <LinkSvg />
            </Link>
            <Input form={form} name='name' placeholder='Название урока' withoutWrapper />
            <button className='create-module__delete' onClick={() => onDelete(id, indexModule, index)}>
               <DeleteSvg />
            </button>
         </div>
      </div>
   )
}

export default AddCourseLessonItem
