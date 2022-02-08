import React, { useState } from 'react'
import { ReactComponent as DeleteSvg } from 'svg/delete.svg'
import { ReactComponent as AddSvg } from 'svg/add-sm.svg'
import { useDispatch, useInput } from 'hooks'
import { Button, Input } from 'components/ui'
import AddCourseLessonEditTestItemVariant from './AddCourseLessonEditTestItemVariant'
import { useSelector } from 'react-redux'
import { coursesSelectors } from 'store/selectors'
import { uid } from 'utils'

const AddCourseLessonEditTestItem = ({ index }) => {
    const { setLessonQuestions } = useDispatch()
    const questions = useSelector(coursesSelectors.getLessonQuestions)
    const { answers = [] } = questions[index]
    const question = useInput({ initialValue: questions[index].question, bind: { name: 'question' }, is: { isRequired: true, isTextarea: true } })

    questions[index].inputQuestion = question

    const onDeleteItem = () => {
        const newQuestions = questions.filter((_, i) => i !== index)
        setLessonQuestions(newQuestions)
    }

    const onDelete = (answerIndex) => {
        const newAnswers = answers.filter((_, i) => i !== answerIndex)
        const newQuestions = questions.map((q, i) => (i === index ? { ...q, answers: newAnswers } : q))
        setLessonQuestions(newQuestions)
    }
    const onAdd = () => {
        const newAnswers = [...answers, { hidden_id: uid() }]
        const newQuestions = questions.map((q, i) => (i === index ? { ...q, answers: newAnswers } : q))
        setLessonQuestions(newQuestions)
    }
    const onChangeQuestion = (e) => (questions[index].question = e.target.value)

    const onChangeAnswer = (index, e) => {
        answers[index][e.target.name] = e.target.value
    }

    return (
        <div className='lesson-test__group'>
            <div className='lesson-test__group-top'>
                <div className='lesson-test__subtitle'>Вопрос {index + 1}</div>
                <button className='lesson-test__delete' onClick={onDeleteItem}>
                    <DeleteSvg />
                </button>
            </div>
            <Input className='lesson-test__form-group' input={question} label='Вопрос' onChange={onChangeQuestion} />
            <div className='lesson-test__variants'>
                <div className='lesson-test__variants-title'>Введите варианты ответов и выберите правильный</div>
                <div className='lesson-test__variants-items'>
                    {answers.map((props, index) => (
                        <AddCourseLessonEditTestItemVariant key={props.id || props.hidden_id || index} {...props} index={index} onDelete={onDelete} onChange={onChangeAnswer} />
                    ))}
                </div>
                <Button className='lesson-test__variants-add' onClick={onAdd} light>
                    <AddSvg />
                    <span>Добавить вариант</span>
                </Button>
            </div>
            {/* // TODO WHY? */}
            {/* <div className='lesson-test__form-group form-group'>
                <select>
                    <option defaultValue>Сколько правильных ответов</option>
                    <option>Один правильный вариант</option>
                </select>
            </div> */}
        </div>
    )
}

export default AddCourseLessonEditTestItem
