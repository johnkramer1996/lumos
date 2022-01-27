import React from 'react'
import { Main, CourseDetail, CoursesSlider } from 'components/'
import { useSelector } from 'hooks'

const Home = () => {
    const courses = [
        {
            id: 1,
            img: 'assets/img/course.jpg',
            student: '352 учеников',
            title: 'Название курса',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id elit lacus magnis mattis quisque volutpat.',
        },
        {
            id: 2,
            img: 'assets/img/course2.jpg',
            student: '352 учеников',
            title: 'Название курса',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id elit lacus magnis mattis quisque volutpat.',
        },
        {
            id: 3,
            img: 'assets/img/course3.jpg',
            student: '352 учеников',
            title: 'Название курса',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id elit lacus magnis mattis quisque volutpat.',
        },
    ]

    const { themes } = useSelector()
    const items = themes.map((item) => ({ ...item, items: courses }))

    return (
        <>
            <Main
                title={'Обучение без ограничений'}
                descr={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa id sem sem vitae, ac in vulputate enim elementum.'}
                img={'/assets/img/art.svg'}
            />

            <CoursesSlider className={'course-slider1'} title={'Популярные курсы'} items={items} />

            <CourseDetail
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
