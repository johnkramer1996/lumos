import React from 'react'
import CoursesItem from './CoursesItem'

const Courses = ({ title, items = [] }) => {
    console.log(items)
    return (
        <section className='blog'>
            <div className='container'>
                <h1 className='blog__title display-2'>{title}</h1>
                <div className='cabinet-page__items cabinet-page__items4'>
                    {items.reverse().map(({ id, ...props }) => (
                        <CoursesItem key={id} {...props} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Courses
