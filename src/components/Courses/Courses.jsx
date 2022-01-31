import React from 'react'
import CoursesItemWrapper from './CoursesItemWrapper'

const Courses = ({ title = 'Все курсы', items = [], isLoading }) => {
    return (
        <section className='blog'>
            <div className='container'>
                <h1 className='blog__title display-2'>{title}</h1>
                <CoursesItemWrapper items={items} isLoading={isLoading} />
            </div>
        </section>
    )
}

export default Courses
