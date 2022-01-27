import React, { useState } from 'react'

const AddCourseLessonItem = ({ name, indexLesson, index, setName }) => {
    const [state, setstate] = useState(name)
    const onChange = (index, indexLesson, value) => {
        setstate(value)
        setName(index, indexLesson, value)
    }
    return (
        <div className='create-module__item form-group'>
            <div className='create-module__input'>
                <button className='create-module__drag'>
                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M10 4C10 5.10457 9.10457 6 8 6C6.89543 6 6 5.10457 6 4C6 2.89543 6.89543 2 8 2C9.10457 2 10 2.89543 10 4Z' fill='#9FADBF' />
                        <path d='M18 4C18 5.10457 17.1046 6 16 6C14.8954 6 14 5.10457 14 4C14 2.89543 14.8954 2 16 2C17.1046 2 18 2.89543 18 4Z' fill='#9FADBF' />
                        <path d='M10 12C10 13.1046 9.10457 14 8 14C6.89543 14 6 13.1046 6 12C6 10.8954 6.89543 10 8 10C9.10457 10 10 10.8954 10 12Z' fill='#9FADBF' />
                        <path d='M18 12C18 13.1046 17.1046 14 16 14C14.8954 14 14 13.1046 14 12C14 10.8954 14.8954 10 16 10C17.1046 10 18 10.8954 18 12Z' fill='#9FADBF' />
                        <path d='M10 20C10 21.1046 9.10457 22 8 22C6.89543 22 6 21.1046 6 20C6 18.8954 6.89543 18 8 18C9.10457 18 10 18.8954 10 20Z' fill='#9FADBF' />
                        <path d='M18 20C18 21.1046 17.1046 22 16 22C14.8954 22 14 21.1046 14 20C14 18.8954 14.8954 18 16 18C17.1046 18 18 18.8954 18 20Z' fill='#9FADBF' />
                    </svg>
                </button>
                <button className='create-module__link'>
                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M10 7H6.5C5.33333 7.16667 2 8 2 12C2 16 5.33333 16.8333 6.5 17H10' stroke='#8B9EE6' strokeWidth='1.5' strokeLinecap='round' />
                        <path d='M14 7H17.5C18.6667 7.16667 22 8 22 12C22 16 18.6667 16.8333 17.5 17H14' stroke='#8B9EE6' strokeWidth='1.5' strokeLinecap='round' />
                        <path d='M8 12H16' stroke='#8B9EE6' strokeWidth='1.5' strokeLinecap='round' />
                    </svg>
                </button>
                <input type='text' placeholder='Название урока' value={state} onChange={(e) => onChange(index, indexLesson, e.target.value)} />
                <button className='create-module__delete'>
                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M19.325 9.46826C19.325 9.46826 18.782 16.2033 18.467 19.0403C18.317 20.3953 17.48 21.1893 16.109 21.2143C13.5 21.2613 10.888 21.2643 8.28003 21.2093C6.96103 21.1823 6.13803 20.3783 5.99103 19.0473C5.67403 16.1853 5.13403 9.46826 5.13403 9.46826'
                            stroke='#EC9898'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                        <path d='M20.7082 6.23975H3.75024' stroke='#EC9898' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                        <path
                            d='M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973'
                            stroke='#EC9898'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default AddCourseLessonItem
