import { Checkbox, Input } from 'components/ui'
import { useInput } from 'hooks'
import React from 'react'
import { ReactComponent as DeleteSvg } from 'svg/delete.svg'

const AddCourseLessonEditTestItemVariant = ({ index, name, onDelete, onChange }) => {
    const inputName = useInput({ initialValue: name, bind: { name: 'ansver' }, is: { isRequired: true } })
    const inputIsTrue = useInput({ initialValue: name, bind: { name: 'is_true' }, is: { isCheckbox: true } })

    return (
        <div className='lesson-test__variants-item form-group'>
            <Checkbox input={inputIsTrue} type='radio' onChange={onChange.bind(null, index)} />
            <Input input={inputName} placeholder='Вариант ответа' onChange={onChange.bind(null, index)} withoutWrapper />
            <button className='lesson-test__variants-delete' type='button' onClick={onDelete.bind(null, index)}>
                <DeleteSvg />
            </button>
        </div>
    )
}

export default AddCourseLessonEditTestItemVariant
