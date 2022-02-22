import { Button } from 'components/ui'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { authSelectors, coursesSelectors } from 'store/selectors'
import { getURL, hasAccess } from 'utils'
import { ReactComponent as EditSvg } from 'svg/edit.svg'
import { ROLES } from 'constants'
import CoursesLessonTestQuestions from './CoursesLessonTestQuestions'
import { useDispatch, useRequest } from 'hooks'
import { modalsContentTypes } from 'store/reducers/modals/types'

const CoursesLessonTest = () => {
   const { setLessonAnswers } = useDispatch()
   const { courseId, lessonId } = useParams()
   const { sendLessonTest, setIsShow, setContent, setType } = useDispatch()
   const rolesId = useSelector(authSelectors.getRolesId)
   const questions = useSelector(coursesSelectors.getLessonQuestions)

   const sendLessonTestRequest = useRequest({
      request: sendLessonTest,
      success: ({ data }) => {
         setContent({ result: data || {} })
         setType(modalsContentTypes.TEST)
         setIsShow(true)
      },
   })

   const onSubmit = () => {
      const body = {
         list_ansvers: questions.map(({ id, value }) => ({
            question_id: id,
            ansvers: value,
         })),
      }

      setLessonAnswers(body.list_ansvers)

      sendLessonTestRequest.call({ courseId, lessonId, body })
   }

   return (
      <div className='test-page__wrap'>
         <div className='test-page__left'>
            <div className='test-page__items'>
               {questions.map((props, index) => (
                  <CoursesLessonTestQuestions key={props.id || index} {...props} index={index} />
               ))}
            </div>
         </div>
         <div className='test-page__right'>
            {hasAccess(rolesId, [ROLES.TRAINER]) && (
               <div className='lesson-page__nav card-bg'>
                  <Button to={getURL.cabinetCoursesLessonEdit({ courseId, lessonId })} className='lesson-page__edit' outline link>
                     <EditSvg />
                     <span>Редактировать урок</span>
                  </Button>
                  <Button to={getURL.cabinetCoursesLesson({ courseId, lessonId })} className='lesson-page__test' link>
                     Вернуться к уроку
                  </Button>
               </div>
            )}
            {hasAccess(rolesId, [ROLES.USER]) && (
               <div className='test-page__card card-bg'>
                  <div className='test-page__card-top'>
                     <div className='test-page__card-title display-4'>Тест</div>
                     <div className='test-page__card-num'>1 из {questions.length}</div>
                  </div>
                  <div className='test-page__card-desc'>Выберите варианты ответов во всех вопросах, чтобы завершить тест</div>
                  <Button className='test-page__card-btn' onClick={onSubmit}>
                     Пройти тест
                  </Button>
               </div>
            )}
         </div>
      </div>
   )
}

export default CoursesLessonTest
