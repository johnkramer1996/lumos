import { useInput } from 'hooks'
import React, { useEffect } from 'react'
import { ReactComponent as DragSvg } from 'svg/drag.svg'
import { ReactComponent as LinkSvg } from 'svg/link.svg'
import { ReactComponent as DeleteSvg } from 'svg/delete.svg'
import { RouteNames } from 'routes'
import { Link, useParams } from 'react-router-dom'

const AddCourseLessonItem = ({ id, indexModule, name, index, setName, onDelete, modulesState }) => {
    const { courseId } = useParams()
    const input = useInput({ is: { isRequired: true } })
    modulesState[indexModule].lessonsshort[index].input = input

    useEffect(() => name && input.setValue(name), [])

    const onChange = (e) => {
        input.bind.onChange(e)
        if (!input.isNewValue(e.target.value)) return
        setName(indexModule, index, e.target.value)
    }

    return (
        <div className='create-module__item form-group'>
            <div className='create-module__input'>
                <button className='create-module__drag'>
                    <DragSvg />
                </button>
                <Link to={`${RouteNames.CABINET_COURSES}/${courseId}/edit/lessons/${id}`} className='create-module__link'>
                    <LinkSvg />
                </Link>
                <input type='text' placeholder='Название урока' {...input.bind} onChange={onChange} />
                <button className='create-module__delete' onClick={() => onDelete(id, indexModule, index)}>
                    <DeleteSvg />
                </button>
            </div>
        </div>
    )
}

export default AddCourseLessonItem
