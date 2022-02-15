import CoursesItemTopNav from 'components/CoursesItem/CoursesItemTopNav'
import { useDispatch, useRequest } from 'hooks'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { addZerro, getURL, isActiveClass } from 'utils'
import { ReactComponent as NextSvg } from 'svg/next.svg'
import { authSelectors, coursesSelectors } from 'store/selectors'
import { Button, Loader } from 'components/ui'

const CabinetCoursesLessons = () => {
   const { courseId } = useParams()
   const { resetCourses, fetchUserCourse } = useDispatch()
   const role = useSelector(authSelectors.getRolesId)
   const course = useSelector(coursesSelectors.getCourse)
   const modules = useSelector(coursesSelectors.getModules)
   const lessons = useSelector(coursesSelectors.getLessons)
   const { short_desc } = course
   const viewLessons = lessons.filter(({ userstatus }) => userstatus)
   const currentLesson = viewLessons[viewLessons.length - 1] || lessons[0] || []
   let index = 0
   modules.reduce((prev, value) => value.lessons.reduce((prev, value) => ((value.index = prev), prev++)), 0)

   const fetchUserCourseRequest = useRequest({
      request: fetchUserCourse,
   })

   useEffect(() => {
      fetchUserCourseRequest.call({ courseId })

      return () => resetCourses()
   }, [])

   return (
      <>
         {fetchUserCourseRequest.isLoading ? (
            <Loader />
         ) : (
            <section className='lkp-course'>
               <div className='container'>
                  <div className='course-top lkp-course__top'>
                     <div className='breadcrumbs'>
                        <Link to={getURL.cabinetCourses({}, role)} className='breadcrumbs__item'>
                           Мои курсы
                        </Link>
                     </div>
                     <div className='course-top__bottom'>
                        <div className='course-top__left'>
                           <div className='course-top__title display-3'>Название курса</div>
                        </div>
                        <div className='course-top__right'>
                           <CoursesItemTopNav course={course} />
                        </div>
                     </div>
                  </div>
                  <div className='lkp-course__inner'>
                     <div className='lkp-course__left'>
                        <div className='lkp-course__lesson card-bg'>
                           <div className='lkp-course__lesson-top'>
                              <h3 className='lkp-course__lesson-title display-4'>Уроки</h3>
                              <div className='lkp-course__lesson-num'>
                                 {(lessons.indexOf(currentLesson) || 0) + 1} из {lessons.length}
                              </div>
                           </div>
                           {modules.map(({ id, name, lessons }, indexModule) => {
                              return (
                                 <div key={id || indexModule} className='lkp-course__group'>
                                    <div className='lkp-course__group-title'>{name}</div>
                                    <div className='lkp-course__items'>
                                       {lessons.map(({ id, name, progress, number }, indexLesson) => {
                                          index++
                                          return (
                                             <div key={id || indexLesson}>
                                                {currentLesson.id === id ? (
                                                   <Link to={getURL.cabinetCoursesLesson({ courseId, lessonId: id }, role)} className='lkp-course__current'>
                                                      <button className='lkp-course__current-btn'>
                                                         <NextSvg />
                                                      </button>
                                                      <div className='lkp-course__current-info'>
                                                         <div className='lkp-course__current-status'>Текущий урок</div>
                                                         <div className='lkp-course__current-title'>
                                                            <span>{addZerro(index)}</span>
                                                            <span>{name}</span>
                                                         </div>
                                                      </div>
                                                   </Link>
                                                ) : progress === 'view' ? (
                                                   <Link to={getURL.cabinetCoursesLesson({ courseId, lessonId: id }, role)} className='lkp-course__item'>
                                                      <i></i>
                                                      <span className='lkp-course__item-num'>{addZerro(index)}</span>
                                                      <span className='lkp-course__item-text'>{name}</span>
                                                   </Link>
                                                ) : (
                                                   <span className='lkp-course__item lkp-course__item--disabled'>
                                                      <i></i>
                                                      <span className='lkp-course__item-num'>{addZerro(index)}</span>
                                                      <span className='lkp-course__item-text'>{name}</span>
                                                   </span>
                                                )}
                                             </div>
                                          )
                                       })}
                                    </div>
                                 </div>
                              )
                           })}
                        </div>
                     </div>
                     <div className='lkp-course__right'>
                        <div className='lkp-course__card card-bg'>
                           <div className='lkp-course__card-title display-4'>О курсе</div>
                           <div className='lkp-course__card-status'>Курс куплен</div>
                           <div className='lkp-course__card-desc'>{short_desc}</div>
                           <Button to={getURL.cabinetCoursesLesson({ courseId, lessonId: currentLesson.id }, role)} className='lkp-course__card-continue' link>
                              <NextSvg />
                              <span>Продолжить обучение</span>
                           </Button>
                           <Button to={getURL.coursesItem({ courseId }, role)} className='lkp-course__card-link' outline link>
                              Перейти на страницу курса
                           </Button>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         )}
      </>
   )
}

export default CabinetCoursesLessons
