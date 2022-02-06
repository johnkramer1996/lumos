import { useInput } from 'hooks'
import React, { useEffect } from 'react'
import { ReactComponent as DeleteSvg } from 'svg/delete.svg'

const AddCourseModule = ({ id, index, name, setName, onDelete, callbackHandler, modulesState }) => {
    const input = useInput({ callbackHandler, is: { isRequired: true } })
    modulesState[index].input = input

    useEffect(() => name && input.setValue(name), [])

    const onChange = (e) => {
        input.bind.onChange(e)
        if (!input.isNewValue()) return
        setName(index, e.target.value)
    }

    return (
        <div className='create-module__item form-group'>
            <label>Название модуля {index + 1}</label>
            <div className='create-module__input'>
                <input type='text' placeholder='Название модуля' {...input.bind} onChange={onChange} />
                <button className='create-module__delete' onClick={() => onDelete(id, index)}>
                    <DeleteSvg />
                </button>
            </div>
        </div>
    )
}

export default AddCourseModule
