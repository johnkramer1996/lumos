import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Button } from 'components/ui'
import { useDispatch, useNavigate, useRequest } from 'hooks/'
import { AddCourseTabMain, AddCourseTabLesson, AddCourseTabDescription, Tabs } from 'components'
import { useLocation, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { coursesSelectors } from 'store/selectors'
import AddCourseLessonEdit from 'components/AddCourse/AddCourseLessonEdit'

const CabinetAddCourse = () => {
   const { courseId, lessonId } = useParams()
   const location = useLocation()
   const isEditPage = !!courseId
   const isLessonPage = !!lessonId
   const { resetCourses, setIsShow, setContent, setCourse, setModules, fetchInfo } = useDispatch()
   const course = useSelector(coursesSelectors.getCourse)
   const modules = useSelector(coursesSelectors.getModules)
   const hasCourse = !(Object.keys(course).length === 0)
   const hasModules = !(Object.keys(modules).length === 0)

   const [hasSave, setHasSave] = useState(false)

   const fetchInfoRequest = useRequest({
      request: fetchInfo,
      loading: isEditPage,
   })

   useEffect(() => {
      if (isEditPage) fetchInfoRequest.call({ courseId })

      return () => resetCourses()
   }, [])

   useEffect(() => {
      setHasSave(isLessonPage)
   }, [isLessonPage])

   const refTabs = useRef()
   const refTabMain = useRef()
   const refTabLesson = useRef()
   const refTabDescription = useRef()
   const refLesson = useRef()
   const refsTab = useMemo(() => [refTabMain, refTabLesson, refTabDescription], [])

   const onSave = (e) => {
      e?.preventDefault()
      save()
   }

   const save = async () => {
      if (isLessonPage) return refLesson.current.submit()
      const indexActive = refTabs.current.getIndex()
      if ((await refsTab[indexActive]?.current.submit()) === false) {
         setIsShow(true)
         setContent({ title: 'Заполните все поля' })
         return
      }
   }

   const onCancel = () => {}

   const tabItems = [
      {
         title: 'Основная информация',
         component: <AddCourseTabMain ref={refTabMain} />,
      },
      {
         title: 'Уроки',
         component: <AddCourseTabLesson ref={refTabLesson} />,
      },
      {
         title: 'Страница курса',
         component: <AddCourseTabDescription ref={refTabDescription} />,
      },
   ]

   //  const onChangeTabsListener = (activeIndex) => {
   //     setHasSave(false)
   //  }

   const isAvaibleTabIndex = (index) => {
      if (index === 0) return true
      if ((index === 1 || index === 2) && !hasCourse) {
         setIsShow(true)
         setContent({ title: 'Заполните курс' })
         return
      }
      if (index === 2 && !hasModules) {
         setIsShow(true)
         setContent({ title: 'Заполните уроки' })
         return
      }
      return true
   }

   return (
      <section className='course-edit'>
         <div className='container'>
            <div className='course-edit__inner'>
               <div className='course-edit__left'>
                  {isLessonPage ? (
                     <AddCourseLessonEdit ref={refLesson} />
                  ) : (
                     <>
                        <h1 className='course-edit__title display-3'>
                           <span>{isEditPage ? 'Редактирование' : 'Добавление'} курса</span>
                        </h1>
                        <Tabs ref={refTabs} items={tabItems} classPrefix={'course-edit'} isLoading={fetchInfoRequest.isLoading} activeTabIndex={1} isAvaibleIndex={isAvaibleTabIndex}>
                           {({ activeStep }) => tabItems[activeStep].component}
                        </Tabs>
                     </>
                  )}
               </div>
               <div className='course-edit__right'>
                  <div className='course-edit__hint'>
                     <Button className={`course-edit__hint-btn`} onClick={onSave}>
                        {isEditPage || hasCourse ? 'Сохранить' : 'Добавить'}
                     </Button>
                     {isEditPage && hasSave && (
                        <>
                           <Button className='course-edit__hint-cancel' onClick={onCancel} outline>
                              Отменить
                           </Button>
                           <div className='course-edit__hint-desc'>Ваши изменения будут отправлены на модерацию.</div>
                        </>
                     )}
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default CabinetAddCourse
