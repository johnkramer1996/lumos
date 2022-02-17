import { Button } from 'components/ui'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { authSelectors, coursesSelectors } from 'store/selectors'
import { addZerro, formatBytes, getURL, hasAccess } from 'utils'
import { ROLES } from 'constants'
import { ReactComponent as EditSvg } from 'svg/edit.svg'
import { ReactComponent as DownloadSvg } from 'svg/download.svg'
import { ReactComponent as DocumentSvg } from 'svg/document.svg'

const CoursesLessonTest = () => {
   const { courseId, lessonId } = useParams()
   const rolesId = useSelector(authSelectors.getRolesId)
   const data = useSelector(coursesSelectors.getData)
   const lessons = useSelector(coursesSelectors.getLessons)
   const lesson = useSelector(coursesSelectors.getLesson)
   const files = useSelector(coursesSelectors.getLessonFiles)

   const { number, name, description, has_text } = lesson
   const prev_lesson = data || {}
   const next_lesson = data || {}

   return (
      <div>
         {hasAccess(rolesId, [ROLES.USER]) &&
            (has_text ? (
               <div className='lesson-page__test card-bg'>
                  <div className='lesson-page__test-title display-4'>Тест</div>
                  <div className='lesson-page__test-desc'>Для того, чтобы открыть следующий урок необходимо пройти тест для закрепления ваших знаний.</div>
                  <Button to={getURL.cabinetCoursesLessonTest({ courseId, lessonId })} className='lesson-page__test-btn' link>
                     Пройти тест
                  </Button>
               </div>
            ) : (
               <div className='lesson-page__test card-bg'>
                  <Button to={getURL.cabinetCoursesLessons({ courseId })} className='lesson-page__test-btn' link>
                     Вернуться к урокам
                  </Button>
               </div>
            ))}
      </div>
   )
}

export default CoursesLessonTest
