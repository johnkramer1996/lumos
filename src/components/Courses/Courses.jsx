import React from 'react'
import CoursesItem3 from './CoursesItem3'

const Courses = ({ title = 'Все курсы', items = [] }) => {
    return (
        <section className='blog'>
            <div className='container'>
                <h1 className='blog__title display-2'>{title}</h1>
                <div className='cabinet-page__items cabinet-page__items4'>
                    {items.map(({ id, ...props }) => (
                        <CoursesItem3 key={id} {...props} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Courses
