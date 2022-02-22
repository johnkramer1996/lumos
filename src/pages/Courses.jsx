import React, { useEffect, useMemo } from 'react'
import { CoursesCardsWrapper, CoursesCardFront, Filter } from 'components/'
import { useDispatch, useRequest } from 'hooks'
import { useSelector } from 'react-redux'
import CabinetTitle from 'components/Cabinet/CabinetTitle'
import { authSelectors, frontCoursesSelectors, settingsSelectors } from 'store/selectors'

const Courses = () => {
   const { resetFrontCourses, fetchFrontCourses, fetchFrontAuthCourses } = useDispatch()
   const isAuth = useSelector(authSelectors.getIsAuth)
   const courses = useSelector(frontCoursesSelectors.getCourses)
   const filter = useSelector(settingsSelectors.getFilter)

   const authRequest = useRequest({
      request: isAuth ? fetchFrontAuthCourses : fetchFrontCourses,
      loading: true,
   })

   useEffect(() => {
      authRequest.call({ _limit: 9, _themes: 10, themes: 10 })
      return () => resetFrontCourses()
   }, [])

   const filteredCourses = useMemo(
      () =>
         courses.filter(({ category_id, type_study, format_study, difficulty_level }) => {
            const filter1 = filter.themes.length ? filter.themes.find((id) => +id === +category_id) : true
            const filter2 = filter.type_study.length ? filter.type_study.find((id) => +id === +type_study) : true
            const filter3 = filter.format_study.length ? filter.format_study.find((id) => +id === +format_study) : true
            const filter4 = filter.difficulty.length ? filter.difficulty.find((id) => +id === +difficulty_level) : true
            return filter1 && filter2 && filter3 && filter4
         }),
      [filter, courses],
   )

   return (
      <>
         <section className='categories-page'>
            <div className='container'>
               <div className='categories-page__inner'>
                  <aside className='categories-page__sidebar'>
                     <Filter />
                  </aside>
                  <main className='categories-page__main'>
                     <div className='courses'>
                        <CabinetTitle title={'Курсы'} btnHref={'/'} />

                        <CoursesCardsWrapper isLoading={authRequest.isLoading} className={`courses__items`} items={filteredCourses}>
                           {filteredCourses.map((props, index) => (
                              <CoursesCardFront key={props.id || index} {...props} />
                           ))}
                        </CoursesCardsWrapper>
                     </div>
                  </main>
               </div>
            </div>
         </section>
      </>
   )
}

export default Courses
