import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Button } from 'components/ui'
import { useDispatch, useNavigate, useRequest, usePageAccess } from 'hooks/'
import { CoursesEditTabMain, CoursesEditTabLesson, CoursesEditTabDescription, Tabs } from 'components'
import { useLocation, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { authSelectors, coursesSelectors } from 'store/selectors'
import CoursesEditLessonEdit from 'components/CoursesLessonEdit/CoursesLessonEdit'

const CabinetCoursesEdit = () => {
   const { courseId, lessonId } = useParams()
   const location = useLocation()
   const { toCourses } = useNavigate()
   const isEditPage = !!courseId
   const isLessonPage = !!lessonId
   const { resetCourses, setIsShow, setContent, setCourse, setModules, fetchInfo } = useDispatch()
   const user = useSelector(authSelectors.getUser)
   const { id: user_id } = user
   const course = useSelector(coursesSelectors.getCourse)
   const modules = useSelector(coursesSelectors.getModules)
   const hasCourse = !(Object.keys(course).length === 0)
   const hasModules = !(Object.keys(modules).length === 0)
   const { user_id: page_user_id } = course

   const [hasSave, setHasSave] = useState(false)

   const fetchInfoRequest = useRequest({
      request: fetchInfo,
      loading: isEditPage,
   })

   usePageAccess(user_id, page_user_id, toCourses, fetchInfoRequest.isLoading)

   useEffect(() => {
      if (isEditPage) fetchInfoRequest.call({ courseId })

      return () => resetCourses()
   }, [])

   //  useEffect(() => {
   //     const isUserPage = user_id === page_user_id
   //     if (!fetchInfoRequest.isLoading && !isUserPage) toCourses()
   //  }, [fetchInfoRequest.isLoading])

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
         component: CoursesEditTabMain,
         props: {
            refTab: refTabMain,
            refTabs: refTabs,
         },
      },
      {
         title: 'Уроки',
         component: CoursesEditTabLesson,
         props: {
            refTab: refTabLesson,
            refTabs: refTabs,
         },
      },
      {
         title: 'Страница курса',
         component: CoursesEditTabDescription,
         props: {
            refTab: refTabDescription,
            refTabs: refTabs,
         },
      },
   ]

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
                  <h1 className='course-edit__title display-3'>
                     <span>{isEditPage ? 'Редактирование' : 'Добавление'} курса</span>
                  </h1>
                  <Tabs ref={refTabs} items={tabItems} classPrefix={'course-edit'} isLoading={fetchInfoRequest.isLoading} activeTabIndex={0} isAvaibleIndex={isAvaibleTabIndex}>
                     {({ activeStep }) => {
                        const Component = tabItems[activeStep].component
                        return <Component {...tabItems[activeStep].props} />
                     }}
                  </Tabs>
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

export default CabinetCoursesEdit
