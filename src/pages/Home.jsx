import React, { useEffect } from 'react'
import { Main, CoursesDetail, CoursesSlider } from 'components/'
import { useSelector } from 'react-redux'
import { useDispatch, useRequest } from 'hooks'
import { authSelectors, frontCoursesSelectors, systemSelectors } from 'store/selectors'

const Home = () => {
   const { resetFrontCourses, fetchFrontCourses, fetchFrontAuthCourses } = useDispatch()
   const isAuth = useSelector(authSelectors.getIsAuth)
   const courses = useSelector(frontCoursesSelectors.getCourses)
   const { themes } = useSelector(systemSelectors.getReferences)

   const fetchFrontCourseRequest = useRequest({
      request: isAuth ? fetchFrontAuthCourses : fetchFrontCourses,
   })

   useEffect(() => {
      fetchFrontCourseRequest.call()
      return () => resetFrontCourses()
   }, [])

   const items = themes.map((item) => ({ ...item, items: courses.filter(({ category_id }) => category_id === item.id) }))

   return (
      <>
         <Main
            title={'Обучение без ограничений'}
            descr={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa id sem sem vitae, ac in vulputate enim elementum.'}
            img={'/assets/img/art.svg'}
         />

         <CoursesSlider className={'course-slider1'} title={'Популярные курсы'} items={items} />

         <CoursesDetail
            items={[
               {
                  id: 1,
                  img: 'assets/img/course4.jpg',
                  title: 'Название курса',
                  descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa id sem sem vitae, ac in vulputate enim elementum.',
                  btn: 'Пройти пробный урок',
                  stock: '-35%',
                  date: 'до 16 сентября',
                  price: '4 800 руб.',
                  priceOld: '6 000 руб.',
               },
               {
                  id: 2,
                  img: 'assets/img/course4.jpg',
                  title: 'Название курса',
                  descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa id sem sem vitae, ac in vulputate enim elementum.',
                  btn: 'Пройти пробный урок',
                  stock: '-35%',
                  date: 'до 16 сентября',
                  price: '4 800 руб.',
                  priceOld: '6 000 руб.',
               },
            ]}
         />

         <CoursesSlider className={'course-slider2'} title={'Новые курсы'} items={[items[0]]} />
      </>
   )
}

export default Home
