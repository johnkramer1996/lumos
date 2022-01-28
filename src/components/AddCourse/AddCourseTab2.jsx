import { CoursesService } from 'api'
import { Button } from 'components/ui'
import { useDispatch, useFetching, useSelector } from 'hooks'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AddCourseLesson from './AddCourseLesson'
import AddCourseModule from './AddCourseModule'

const AddCourseTab2 = React.forwardRef(({ modules, setModules }, ref) => {
    const [shortDescr, setShortDescr] = useState('')
    const [hidden_id, sethidden_id] = useState('')

    useEffect(() => {}, [])

    ref.current = () => {
        const moduls = modules.map((mod) => ({ ...mod, name: mod.name || 'Название модуля', lessons: mod.lessons.map((l) => ({ ...l, name: l.name || 'Название урока' })) }))
        return {
            isError: false,
            body: {
                short_desc: shortDescr || 'Описание',
                moduls,
                hidden_id: hidden_id || 0,
            },
        }
    }

    const onAddModule = () => {
        setModules([...modules, { name: '', lessons: [{ name: '' }] }])
    }

    const onDeleteModule = (index) => {
        setModules(modules.filter((item, inx) => inx !== index))
    }

    const setModuleName = (index, name) => {
        setModules(modules.map((item, inx) => (inx === index ? { ...item, name } : item)))
    }

    const onAddLesson = (index) => {
        const newModules = [...modules]
        newModules[index].lessons.push({ name: '' })
        setModules([...newModules])
    }

    const setLessonName = (index, indexLesson, value) => {
        const newModules = [...modules]
        newModules[index].lessons[indexLesson].name = value
        newModules[index].lessons[indexLesson].hidden_id = index + '' + indexLesson
        setModules([...newModules])
    }

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
                    {modules.map((props, index) => (
                        <AddCourseModule key={index} {...props} index={index} setName={setModuleName} onDelete={onDeleteModule} />
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

            {modules.map((props, index) => (
                <AddCourseLesson key={index} {...props} index={index} setName={setLessonName} onAdd={onAddLesson} />
            ))}

            <div className='create-module card-bg'>
                <div className='create-module__top'>
                    <h3 className='create-module__title display-4'>Тестовый урок</h3>
                </div>
                <div className='create-module__items'>
                    <div className='create-module__item form-group'>
                        <label htmlFor=''>Выберите тестовый урок</label>

                        <select
                            onChange={(e) => {
                                sethidden_id(e.target.value)
                            }}
                        >
                            <option defaultValue hidden>
                                Выберите тестовый урок
                            </option>
                            <option>Без тестового урока</option>
                            {modules.map((item, index) =>
                                item?.lessons
                                    ?.filter(({ name }) => name !== '')
                                    .map(({ name, hidden_id }, indexLesson) => (
                                        <option key={index + '' + indexLesson} value={hidden_id}>
                                            {name}
                                        </option>
                                    )),
                            )}
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
})

export default AddCourseTab2
