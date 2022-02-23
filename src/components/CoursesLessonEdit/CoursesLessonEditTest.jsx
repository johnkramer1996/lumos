import React, { useEffect, useState } from 'react'
import { useDispatch, useInput } from 'hooks'
import { ReactComponent as DeleteSvg } from 'svg/delete.svg'
import { ReactComponent as AddSvg } from 'svg/add-sm.svg'
import { Button, Input } from 'components/ui'
import { declOfNum, getDeclOfArray, uid } from 'utils'
import CoursesLessonEditTestItem from './CoursesLessonEditTestItem'
import { useSelector } from 'react-redux'
import { coursesSelectors } from 'store/selectors'

const CoursesLessonEditTest = () => {
   const { setLessonQuestions } = useDispatch()
   const lesson = useSelector(coursesSelectors.getLesson)
   const questions = useSelector(coursesSelectors.getLessonQuestions)
   const questionsData = useSelector(coursesSelectors.getLessonQuestionsData)

   const count_answers = useInput({ initialValue: lesson.count_answers })
   const count_answersList = new Array(questions.length).fill(0).map((_, i) => ({ name: i + 1 }))

   questionsData.count_answers = count_answers

   const onAdd = () => {
      const newQuestions = [...questions, { hidden_id: uid(), answers: [{}] }]
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
            <CoursesLessonEditTestItem key={props.id || props.hidden_id || index} {...props} index={index} />
         ))}

         <Button className='lesson-test__add' onClick={onAdd} outline>
            <AddSvg />
            <span>Добавить вопрос</span>
         </Button>

         {!!count_answersList.length && (
            <div className='lesson-test__bottom'>
               <div className='lesson-test__subtitle'>Условие прохождения</div>

               <Input input={count_answers} label={'Количество правильных ответов для успешного прохождения'} list={count_answersList} />
            </div>
         )}
      </div>
   )
}

export default CoursesLessonEditTest
