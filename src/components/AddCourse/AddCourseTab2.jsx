import { Button } from 'components/ui'
import React, { useState } from 'react'

const AddCourseTab2 = React.forwardRef((_, ref) => {
    const [shortDescr, setShortDescr] = useState()
    const [modules, setModules] = useState([{ lessons: [{}] }])

    const onAddModule = () => {
        setModules([...modules, { lessons: [{}] }])
    }

    const onDeleteModule = (index) => {
        setModules(modules.filter((item, inx) => inx !== index))
    }

    const setModuleName = (item, index, name) => {
        setModules(modules.map((item, inx) => (inx === index ? { ...item, name } : item)))
    }

    const onAddLesson = (index) => {
        setModules(modules.map((item, inx) => (inx === index ? { ...item, lessons: [...item.lessons, {}] } : item)))
    }

    const setLessonName = (item, index, name) => {
        item.lessons = item.lessons.map((item, inx) => (inx === index ? { ...item, name } : item))
        setModules([...modules])
        // setModules(modules.map((item, inx) => (inx === index ? { ...item, name } : item)))
    }

    console.log(modules)

    return (
        <>
            <div className='course-edit__small-desc card-bg'>
                <div className='course-edit__small-desc-title display-4'>Короткое описание</div>
                <div className='form-group'>
                    <label>
                        <span>Описание</span>
                        <span>335/600</span>
                    </label>
                    <textarea placeholder='Описание' value={shortDescr} onChange={(e) => setShortDescr(e.target.value)}></textarea>
                </div>
            </div>
            <div className='create-module card-bg'>
                <h3 className='create-module__title display-4'>Модули</h3>
                <div className='create-module__items'>
                    {modules.map((item, index) => (
                        <div key={index} className='create-module__item form-group'>
                            <label>Название модуля {index + 1}</label>
                            <div className='create-module__input'>
                                <input type='text' placeholder='Название модуля' onChange={(e) => setModuleName(item, index, e.target.value)} />
                                <button className='create-module__delete' onClick={() => onDeleteModule(index)}>
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
                    ))}
                </div>
                <Button className='create-module__add' onClick={() => onAddModule()} outline>
                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M12.039 4V20' stroke='#1B2C3E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                        <path d='M20 12.038H4' stroke='#1B2C3E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                    </svg>
                    <span>Добавить модуль</span>
                </Button>
            </div>

            {modules.map((item, index) => (
                <div key={index} className='create-module card-bg'>
                    <div className='create-module__top'>
                        <h3 className='create-module__title display-4'>{item?.name || 'Модуль ' + (index + 1)}</h3>
                    </div>
                    <div className='create-module__items'>
                        {item?.lessons?.map((itemLesson, indexLesson) => (
                            <div key={indexLesson} className='create-module__item form-group'>
                                <div className='create-module__input'>
                                    <input type='text' placeholder='Название урока' onChange={(e) => setLessonName(item, indexLesson, e.target.value)} />
                                </div>
                            </div>
                        ))}
                    </div>
                    <Button className='create-module__add' onClick={() => onAddLesson(index)} outline>
                        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M12.039 4V20' stroke='#1B2C3E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                            <path d='M20 12.038H4' stroke='#1B2C3E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                        </svg>
                        <span>Добавить урок</span>
                    </Button>
                </div>
            ))}

            <div className='create-module card-bg'>
                <div className='create-module__top'>
                    <h3 className='create-module__title display-4'>Тестовый урок</h3>
                </div>
                <div className='create-module__items'>
                    <div className='create-module__item form-group'>
                        <label htmlFor=''>Выберите тестовый урок</label>
                        <select>
                            <option defaultValue hidden>
                                Выберите тестовый урок
                            </option>
                            <option>Без тестового урока</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
})

export default AddCourseTab2
