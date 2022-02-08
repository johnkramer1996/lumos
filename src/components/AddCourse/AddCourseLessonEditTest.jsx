import React, { useEffect, useState } from 'react'
import { useDispatch, useInput } from 'hooks'
import { ReactComponent as DeleteSvg } from 'svg/delete.svg'
import { ReactComponent as AddSvg } from 'svg/add-sm.svg'
import { Button, Input } from 'components/ui'
import { declOfNum, getDeclOfArray, uid } from 'utils'
import AddCourseLessonEditTestItem from './AddCourseLessonEditTestItem'
import { useSelector } from 'react-redux'
import { coursesSelectors } from 'store/selectors'

const AddCourseLessonEditTest = () => {
    const { setLessonQuestions } = useDispatch()
    const questions = useSelector(coursesSelectors.getLessonQuestions)
    const amount = useInput({ bind: { name: 'amount' }, is: { isRequired: true } })
    const amountList = new Array(questions.length).fill(0).map((_, i) => ({ name: i + 1 }))

    const onAdd = () => {
        const newQuestions = [...questions, { hidden_id: uid() }]
        setLessonQuestions(newQuestions)
    }

    return (
        <div className='lesson-test card-bg'>
            <div className='lesson-test__top'>
                <h3 className='lesson-test__title display-4'>Тест</h3>
                <div className='lesson-test__num'>
                    {questions.length} {declOfNum(questions.length, getDeclOfArray['questions'])}
                </div>
            </div>

            {questions.map((props, index) => (
                <AddCourseLessonEditTestItem key={props.id || props.hidden_id || index} {...props} index={index} />
            ))}

            <Button className='lesson-test__add' onClick={onAdd} outline>
                <AddSvg />
                <span>Добавить вопрос</span>
            </Button>

            {!!amountList.length && (
                <div className='lesson-test__bottom'>
                    <div className='lesson-test__subtitle'>Условие прохождения</div>

                    <Input input={amount} label={'Количество правильных ответов для успешного прохождения'} list={amountList} />
                </div>
            )}
        </div>
    )
}

export default AddCourseLessonEditTest
