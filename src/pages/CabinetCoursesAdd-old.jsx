import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Button } from 'components/ui'
import { useDispatch, useNavigate, useRequest } from 'hooks/'
import { CoursesEditTabMain, CoursesEditTabLesson, CoursesEditTabDescription, Tabs } from 'components'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { coursesSelectors } from 'store/selectors'
import CoursesEditLessonEdit from 'components/CoursesLessonEdit/CoursesLessonEdit'

const CabinetCoursesEdit = () => {
   const { courseId, lessonId } = useParams()
   const isEditPage = !!courseId
   const isLessonPage = !!lessonId
   const { resetCourses, setIsShow, setContent, setCourse, setModules, fetchInfo } = useDispatch()
   const course = useSelector(coursesSelectors.getCourse)
   const modules = useSelector(coursesSelectors.getModules)
   const hasCourse = !(Object.keys(course).length === 0)
   const hasModules = !(Object.keys(modules).length === 0)

   const [hasSave, setHasSave] = useState(false)
   const [activeTabIndex, setActiveTabIndex] = useState(0)

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

   const save = () => {
      if (isLessonPage) {
         refLesson.current.send()
         return
      }
      const indexActive = refTabs.current.getIndex()
      if (!refsTab[indexActive]?.current.check()) {
         setIsShow(true)
         setContent({ title: 'Заполните все поля' })
         return
      }
      refsTab[indexActive]?.current.send()
      setHasSave(false)
   }

   const onCancel = () => {
      return
      setCourse({ ...course })
      setModules([...modules])
      setHasSave(false)
      return
      const indexActive = refTabs.current?.getIndex()
      // TODO SETTIMEOUT
      refsTab[indexActive]?.current.update()
      // onUpdateListener(-1)
   }

   //  const onUpdateListener = useCallback(
   //     (() => {
   //        let count = 0
   //        return (val = 1) => {
   //           count += val
   //           if (count > 0) {
   //              setHasSave(true)
   //              count = 0
   //           }
   //        }
   //     })(),
   //     [],
   //  )

   const tabItems = [
      {
         title: 'Основная информация',
         component: <CoursesEditTabMain ref={refTabMain} refTabs={refTabs} />,
      },
      {
         title: 'Уроки',
         component: <CoursesEditTabLesson ref={refTabLesson} refTabs={refTabs} />,
      },
      {
         title: 'Страница курса',
         component: <CoursesEditTabDescription ref={refTabDescription} refTabs={refTabs} />,
      },
   ]

   const onChangeTabsListener = (activeIndex) => {
      setHasSave(false)
      // onUpdateListener(-1)
   }

   const isAvaibleTabIndex = (index) => {
      // if (hasSave) {
      //    setIsShow(true)
      //    setContent({ title: 'Сохраните или Отмените' })
      //    return
      // }
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
      setHasSave(false)
      setActiveTabIndex(index)
      return true
   }

   return (
      <section className='course-edit'>
         <div className='container'>
            <div className='course-edit__inner'>
               <div className='course-edit__left'>
                  {isLessonPage ? (
                     <CoursesEditLessonEdit ref={refLesson} />
                  ) : (
                     <>
                        <h1 className='course-edit__title display-3'>
                           <span>{isEditPage ? 'Редактирование' : 'Добавление'} курса</span>
                        </h1>
                        <Tabs
                           ref={refTabs}
                           items={tabItems}
                           classPrefix={'course-edit'}
                           isLoading={fetchInfoRequest.isLoading}
                           onChangeListener={onChangeTabsListener}
                           isAvaibleIndex={isAvaibleTabIndex}
                           activeTabIndex={activeTabIndex}
                        />
                     </>
                  )}
               </div>
               <div className='course-edit__right'>
                  <div className='course-edit__hint'>
                     <Button className={`course-edit__hint-btn`} onClick={onSave}>
                        {isEditPage || hasCourse ? 'Сохранить' : 'Добавить'}
                     </Button>
                     {/* <Button className={`course-edit__hint-btn${isActiveClass(!hasSave, 'btn--disabled')}`} onClick={onSave}>
                        {isEditPage || hasCourse ? 'Сохранить' : 'Добавить'}
                     </Button> */}
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
