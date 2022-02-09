import { Button } from 'components/ui'
import { ROLES } from 'constants'
import { useDispatch, useRequest } from 'hooks'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { RouteNames } from 'routes'
import { authSelectors, coursesSelectors } from 'store/selectors'
import { ReactComponent as EditSvg } from 'svg/edit.svg'
import { getURL, hasAccess } from 'utils'

const CabinetCoursesLessonTest = () => {
   const { courseId, lessonId } = useParams()
   const { fetchLesson, fetchUserLessonTest, setLesson, setLessonQuestions, setLessonFiles, putLesson, fetchCourse } = useDispatch()
   const role = useSelector(authSelectors.getRole)
   const { name: courseName } = useSelector(coursesSelectors.getCourse)
   const lesson = useSelector(coursesSelectors.getLesson)
   const questions = useSelector(coursesSelectors.getLessonQuestions)

   const fetchLessonRequest = useRequest({
      request: fetchLesson,
   })
   const fetchUserLessonTestRequest = useRequest({
      request: fetchUserLessonTest,
   })

   useEffect(() => {
      const roleRequests = [fetchUserLessonTestRequest, fetchLessonRequest][role - 1]
      roleRequests.call({ courseId, lessonId })
      return () => {
         setLesson({})
         setLessonFiles([])
         setLessonQuestions([])
      }
   }, [])

   return (
      <section className='test-page'>
         <div className='container'>
            <div className='breadcrumbs'>
               <Link to={getURL.cabinetCourses({}, role)} className='breadcrumbs__item'>
                  Мои курсы
               </Link>
               <Link to={getURL.cabinetCoursesItem({ courseId }, role)} className='breadcrumbs__item'>
                  {courseName}
               </Link>
            </div>
            <h1 className='test-page__title display-3'>Тест</h1>
            <div className='test-page__wrap'>
               <div className='test-page__left'>
                  <div className='test-page__items'>
                     {questions.map(({ id, answers }, index) => (
                        <div key={id || index} className='test-page__item card-bg'>
                           <div className='test-page__item-title'>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra nullam id tincidunt vestibulum quisque. Urna etiam nunc aliquam dolor, vitae faucibus ut?
                           </div>
                           <div className='test-page__item-variants'>
                              {answers.map(({ id, ansver, is_true }, index) => (
                                 <div key={id || index} className='test-page__item-variant radio'>
                                    <input type='radio' className='radio' id={`checkbox-${id}`} defaultChecked={is_true} name={`checkbox-${id}`} />
                                    <label htmlFor={`checkbox-${id}`}>{ansver}</label>
                                 </div>
                              ))}
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
               <div className='test-page__right'>
                  {hasAccess(role, [ROLES.TRAINER]) && (
                     <div className='lesson-page__nav card-bg'>
                        <Button to={getURL.cabinetCoursesEditLessonTest({ courseId, lessonId }, role)} className='lesson-page__edit' outline link>
                           <EditSvg />
                           <span>Редактировать урок</span>
                        </Button>
                        <Button to={getURL.cabinetCoursesLesson({ courseId, lessonId }, role)} className='lesson-page__test' link>
                           Вернуться к уроку
                        </Button>
                     </div>
                  )}
                  {hasAccess(role, [ROLES.USER]) && (
                     <div class='test-page__card card-bg'>
                        <div class='test-page__card-top'>
                           <div class='test-page__card-title display-4'>Тест</div>
                           <div class='test-page__card-num'>2 из 5</div>
                        </div>
                        <div class='test-page__card-desc'>Выберите варианты ответов во всех вопросах, чтобы завершить тест</div>
                        <Button disabled class='test-page__card-btn'>
                           Пройти тест
                        </Button>
                     </div>
                  )}
               </div>
            </div>
         </div>
      </section>
   )
}

export default CabinetCoursesLessonTest
