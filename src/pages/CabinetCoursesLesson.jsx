import { Button, Loader } from 'components/ui'
import { useDispatch, useRequest } from 'hooks'
import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { authSelectors, coursesSelectors } from 'store/selectors'
import { ReactComponent as EditSvg } from 'svg/edit.svg'
import { ReactComponent as DownloadSvg } from 'svg/download.svg'
import { ReactComponent as ArrowDownSvg } from 'svg/arrow-down.svg'
import { ReactComponent as DocumentSvg } from 'svg/document.svg'
import { RouteNames } from 'routes'
import { addZerro, formatBytes, getURL, hasAccess } from 'utils'
import { Comments } from 'components'
import { ROLES } from 'constants'

const CabinetCoursesLesson = () => {
   const { courseId, lessonId } = useParams()
   const { fetchLesson, setLesson, setLessons, setLessonFiles, fetchUserLesson } = useDispatch()
   const role = useSelector(authSelectors.getRole)
   const { prev_lesson = {}, next_lesson = {} } = useSelector(coursesSelectors.getData)
   const { name: courseName } = useSelector(coursesSelectors.getCourse)
   const lessons = useSelector(coursesSelectors.getLessons)
   const lesson = useSelector(coursesSelectors.getLesson)
   const { id, number, name, description, can_comment, is_test } = useSelector(coursesSelectors.getLesson)
   const questions = useSelector(coursesSelectors.getLessonQuestions)
   const files = useSelector(coursesSelectors.getLessonFiles)

   const fetchUserLessonRequest = useRequest({
      request: fetchUserLesson,
   })
   const fetchLessonRequest = useRequest({
      request: fetchLesson,
   })
   const roleRequests = [fetchUserLessonRequest, fetchLessonRequest][role - 1] || fetchLessonRequest

   useEffect(() => {
      roleRequests.call({ courseId, lessonId })
      return () => {
         setLessons([])
         setLesson({})
         setLessonFiles([])
      }
   }, [lessonId])

   return (
      <section className='lesson-page'>
         <div className='container'>
            <div className='breadcrumbs'>
               <Link to={getURL.cabinetCourses({}, role)} className='breadcrumbs__item'>
                  Мои курсы
               </Link>
               <Link to={getURL.cabinetCoursesItem({ courseId }, role)} className='breadcrumbs__item'>
                  {courseName}
               </Link>
            </div>
            {roleRequests.isLoading ? (
               <Loader />
            ) : (
               <>
                  <div className='lesson-page__top'>
                     <div className='lesson-page__top-left'>
                        {prev_lesson.id && (
                           <Link to={getURL.cabinetCoursesLesson({ courseId, lessonId: next_lesson.id }, role)}>
                              <span className='lesson-page__top-link'> Предыдущий урок</span>
                              <div className='lesson-page__top-subtitle'>
                                 <span>{addZerro(prev_lesson?.number)}</span>
                                 <strong>{prev_lesson.name}</strong>
                              </div>
                           </Link>
                        )}
                     </div>
                     <div className='lesson-page__top-center'>
                        <div className='lesson-page__top-title'>{name}</div>
                        <div className='lesson-page__top-num'>
                           {number + 1} из {lessons.length || 1}
                        </div>
                     </div>
                     <div className='lesson-page__top-right'>
                        {next_lesson.id && (
                           <Link to={getURL.cabinetCoursesLesson({ courseId, lessonId: next_lesson.id }, role)}>
                              <span className='lesson-page__top-link'>Следующий урок</span>
                              <div className='lesson-page__top-subtitle'>
                                 <span>{addZerro(next_lesson?.number)}</span>
                                 <strong>{next_lesson.name}</strong>
                              </div>
                           </Link>
                        )}
                     </div>
                  </div>
                  <div className='lesson-page__wrap'>
                     <div className='lesson-page__left'>
                        <div className='blog-page__text'>
                           <p className='blog-page__text-desc'>{description}</p>
                        </div>
                     </div>
                     <div className='lesson-page__right'>
                        {hasAccess(role, [ROLES.TRAINER]) && (
                           <div className='lesson-page__nav card-bg'>
                              <Button to={getURL.cabinetCoursesEditLessonTest({ courseId, lessonId }, role)} className='lesson-page__edit' outline link>
                                 <EditSvg />
                                 <span>Редактировать урок</span>
                              </Button>
                              <Button to={getURL.cabinetCoursesLessonTest({ courseId, lessonId }, role)} className='lesson-page__test' link>
                                 Страница теста
                              </Button>
                           </div>
                        )}
                        <div className='lesson-page__files card-bg'>
                           {files.length === 0 ? (
                              <>
                                 <div className='lesson-page__files-title display-4'>Файлы не найдены</div>
                              </>
                           ) : (
                              <div className='lesson-page__files-items'>
                                 <div className='lesson-page__files-title display-4'>Файлы</div>
                                 {files.map(({ id, name, file, file_size }, index) => (
                                    <div key={id || index} className='lesson-page__files-item'>
                                       <i className='lesson-page__files-item-icon'>
                                          <DocumentSvg />
                                       </i>
                                       <div className='lesson-page__files-item-info'>
                                          <div className='lesson-page__files-item-name'>{name}</div>
                                          <div className='lesson-page__files-item-weight'>{formatBytes(file_size)}</div>
                                       </div>
                                    </div>
                                 ))}
                                 <Button className='lesson-page__files-btn' outline>
                                    <DownloadSvg />
                                    <span>Скачать все ({formatBytes(files.reduce((pr, v) => pr + +v.file_size, 0))})</span>
                                 </Button>
                              </div>
                           )}
                        </div>
                        {hasAccess(role, [ROLES.USER]) &&
                           (is_test ? (
                              <div className='lesson-page__test card-bg'>
                                 <div className='lesson-page__test-title display-4'>Тест</div>
                                 <div className='lesson-page__test-desc'>Для того, чтобы открыть следующий урок необходимо пройти тест для закрепления ваших знаний.</div>
                                 <Button to={getURL.cabinetCoursesLessonTest({ courseId, lessonId }, role)} className='lesson-page__test-btn' link>
                                    Пройти тест
                                 </Button>
                              </div>
                           ) : (
                              <div className='lesson-page__test card-bg'>
                                 <Button to={getURL.cabinetCoursesItem({ courseId, lessonId }, role)} className='lesson-page__test-btn' link>
                                    Вернуться к урокам
                                 </Button>
                              </div>
                           ))}
                     </div>
                  </div>
                  {can_comment && <Comments />}
               </>
            )}
         </div>
      </section>
   )
}

export default CabinetCoursesLesson
