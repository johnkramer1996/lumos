import { Checkbox, Input } from 'components/ui'
import { useInput } from 'hooks'
import React from 'react'
import { useSelector } from 'react-redux'
import { coursesSelectors } from 'store/selectors'
import { ReactComponent as DeleteSvg } from 'svg/delete.svg'

const AddCourseLessonEditTestItemVariant = ({ id, index, indexQuestion, ansver, is_true, onDelete, onChange }) => {
    const questions = useSelector(coursesSelectors.getLessonQuestions)
    const input_ansver = useInput({ initialValue: ansver, bind: { name: 'ansver' }, is: { isRequired: true } })
    const input_is_true = useInput({ initialValue: is_true, bind: { name: 'is_true' }, is: { isCheckbox: true } })

    questions[indexQuestion].answers[index].inputs = [input_ansver, input_is_true]

    return (
        <div className='lesson-test__variants-item form-group'>
            <Checkbox input={input_is_true} type='radio' onChange={onChange.bind(null, id, index)} />
            <Input input={input_ansver} placeholder='Вариант ответа' onChange={onChange.bind(null, id, index)} withoutWrapper />
            <button className='lesson-test__variants-delete' type='button' onClick={onDelete.bind(null, id, index)}>
                <DeleteSvg />
            </button>
        </div>
    )
}

export default AddCourseLessonEditTestItemVariant