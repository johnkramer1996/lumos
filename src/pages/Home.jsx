import React from 'react'
import { Main, CourseDetail, Course } from 'components/'

const Home = () => {
    const lessons = [
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
    return (
        <>
            <Main
                title={'Обучение без ограничений'}
                descr={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa id sem sem vitae, ac in vulputate enim elementum.'}
                img={'/assets/img/art.svg'}
            />

            <Course
                className={'course-slider1'}
                title={'Популярные курсы'}
                items={[
                    {
                        id: 1,
                        title: 'Программирование',
                        items: lessons,
                    },
                    {
                        id: 2,
                        title: 'Дизайн',
                        items: lessons,
                    },
                    {
                        id: 3,
                        title: 'Маркетинг',
                        items: lessons,
                    },
                    {
                        id: 4,
                        title: 'Бизнес',
                        items: lessons,
                    },
                    {
                        id: 5,
                        title: 'Фото',
                        items: lessons,
                    },
                    {
                        id: 6,
                        title: 'Видео',
                        items: lessons,
                    },
                ]}
            />

            <CourseDetail />

            <Course
                className={'course-slider2'}
                title={'Новые курсы'}
                items={[
                    {
                        items: lessons,
                    },
                ]}
            />
        </>
    )
}

export default Home
