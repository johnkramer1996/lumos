import { Button, Loader } from 'components/ui'
import { ROLES } from 'constants'
import { useDispatch, useRequest } from 'hooks'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { RouteNames } from 'routes'
import { authSelectors, coursesSelectors } from 'store/selectors'
import { ReactComponent as EditSvg } from 'svg/edit.svg'
import { getRequest, getURL, hasAccess } from 'utils'

const CabinetCoursesLessonTest = () => {
   const { courseId, lessonId } = useParams()
   const { resetCourses, fetchLesson, fetchUserLessonTest } = useDispatch()
   const rolesId = useSelector(authSelectors.getRolesId)
   const { name: courseName } = useSelector(coursesSelectors.getCourse)
   const lesson = useSelector(coursesSelectors.getLesson)
   const questions = useSelector(coursesSelectors.getLessonQuestions)

   const fetchUserLessonTestRequest = useRequest({
      request: fetchUserLessonTest,
   })

   const roleRequests = useRequest({
      request: getRequest([fetchUserLessonTest, fetchLesson], rolesId),
   })

   useEffect(() => {
      roleRequests.call({ courseId, lessonId })
      return () => resetCourses()
   }, [])

   const onSubmit = () => {
      console.log('2')
   }

   return (
      <section className='test-page'>
         {roleRequests.isLoading ? (
            <Loader />
         ) : (
            <div className='container'>
               <div className='breadcrumbs'>
                  <Link to={getURL.cabinetCourses({}, rolesId)} className='breadcrumbs__item'>
                     Мои курсы
                  </Link>
                  <Link to={getURL.cabinetCoursesItem({ courseId }, rolesId)} className='breadcrumbs__item'>
                     {courseName}
                  </Link>
               </div>
               <h1 className='test-page__title display-3'>Тест</h1>
               <div className='test-page__wrap'>
                  <div className='test-page__left'>
                     <div className='test-page__items'>
                        {questions.map(({ id: questionId, answers }, index) => (
                           <div key={questionId || index} className='test-page__item card-bg'>
                              <div className='test-page__item-title'>
                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra nullam id tincidunt vestibulum quisque. Urna etiam nunc aliquam dolor, vitae faucibus ut?
                              </div>
                              <div className='test-page__item-variants'>
                                 {answers.map(({ id, ansver, is_true }, index) => (
                                    <div key={id || index} className='test-page__item-variant radio'>
                                       <input type='checkbox' className='radio' id={`checkbox-${id}`} defaultChecked={is_true} name={`checkbox-${questionId}`} />
                                       <label htmlFor={`checkbox-${id}`}>{ansver}</label>
                                    </div>
                                 ))}
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
                  <div className='test-page__right'>
                     {hasAccess(rolesId, [ROLES.TRAINER]) && (
                        <div className='lesson-page__nav card-bg'>
                           <Button to={getURL.parseURL(RouteNames.CABINET_COURSES_LESSON_EDIT, { courseId, lessonId })} className='lesson-page__edit' outline link>
                              <EditSvg />
                              <span>Редактировать урок</span>
                           </Button>
                           <Button to={getURL.parseURL(RouteNames.CABINET_COURSES_LESSON, { courseId, lessonId })} className='lesson-page__test' link>
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
            </div>
         )}
      </section>
   )
}

export default CabinetCoursesLessonTest
