import { Checkbox } from 'components/ui'
import { useDispatch } from 'hooks'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { coursesSelectors } from 'store/selectors'

const CoursesLessonTestQuestions = ({ index, id, question, answers }) => {
   const { setLessonAnswers } = useDispatch()
   const questions = useSelector(coursesSelectors.getLessonQuestions)
   const lessonAnswers = useSelector(coursesSelectors.getLessonAnswers)

   const [answersValue, setAnswersValue] = useState([]) // local state for optimization

   useEffect(() => {
      setAnswersValue([...(lessonAnswers.find(({ question_id }) => question_id === id)?.ansvers || [])])
   }, [lessonAnswers[index]])

   console.log(answers)

   questions[index].value = answersValue

   const onChange = (index, id, e) => {
      e.target.checked ? setAnswersValue([...answersValue, id]) : setAnswersValue([...answersValue.filter((item) => item !== id)])
   }

   return (
      <div className='test-page__item card-bg'>
         <div className='test-page__item-title'>{question}</div>
         <div className='test-page__item-variants'>
            {answers.map(({ id, ansver, is_true }, index) => (
               <Checkbox key={id || index} defaultChecked={is_true} label={ansver} value={ansver} onChange={onChange.bind(null, index, id)} />
            ))}
         </div>
      </div>
   )
}

export default CoursesLessonTestQuestions
