import { Button } from 'components/ui'
import React, { useState } from 'react'
import AddCourseLessonItem from './AddCourseLessonItem'

const AddCourseLesson = (item) => {
    const { index, name, onAdd, setName, lessons } = item
    const [state, setState] = useState(name)

    // const changeName = (item, indexLesson, value) => {
    //     setName(index, indexLesson, value)
    // }

    return (
        <div className='create-module card-bg'>
            <div className='create-module__top'>
                <h3 className='create-module__title display-4'>{name || 'Модуль ' + (index + 1)}</h3>
                <div className='create-module__num'>4 урока</div>
            </div>
            <div className='create-module__items'>
                {lessons?.map((itemLesson, indexLesson) => (
                    <AddCourseLessonItem key={indexLesson} {...itemLesson} indexLesson={indexLesson} index={index} setName={setName} />
                ))}
            </div>
            <Button className='create-module__add' onClick={() => onAdd(index)} outline>
                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M12.039 4V20' stroke='#1B2C3E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                    <path d='M20 12.038H4' stroke='#1B2C3E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                </svg>
                <span>Добавить урок</span>
            </Button>
        </div>
    )
}

export default AddCourseLesson
