import React, { useState } from 'react'
import AddCourseTab3Descr from './AddCourseTab3Descr'
import AddCourseTab3Price from './AddCourseTab3Price'

const AddCourseTab3 = () => {
    const [course_description, setCourse_description] = useState('')
    const [descriptions, setDescriptions] = useState([])

    return (
        <>
            <div className='create-about card-bg'>
                <h3 className='create-about__title display-4'>О курсе</h3>
                <div className='create-about__editor'>
                    <textarea value={course_description} onChange={(e) => setCourse_description(e.target.value)}></textarea>
                </div>
            </div>

            <div className='create-whom card-bg'>
                <h3 className='create-whom__title display-4'>О курсе</h3>
                {/* {descriptions.map(())} */}
                <AddCourseTab3Descr />
                <button className='create-whom__add btn btn-outline'>
                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M12.039 4V20' stroke='#1B2C3E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                        <path d='M20 12.038H4' stroke='#1B2C3E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                    </svg>
                    <span>Добавить описание</span>
                </button>
            </div>

            <div className='create-price card-bg'>
                <h3 className='create-price__title display-4'>Стоимость</h3>
                <AddCourseTab3Price />
                <button className='create-price__add btn btn-outline'>
                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M12.039 4V20' stroke='#1B2C3E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                        <path d='M20 12.038H4' stroke='#1B2C3E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                    </svg>
                    <span>Добавить вариант участия</span>
                </button>
            </div>
        </>
    )
}

export default AddCourseTab3
