import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import { Button } from 'components/ui'
import { useSelector } from 'react-redux'
import AddCourseLesson from './AddCourseLesson'
import AddCourseModule from './AddCourseModule'
import { useDispatch } from 'hooks'

const AddCourseTabLesson = (_, ref) => {
    const { setContent, setIsShow } = useDispatch()
    const course = useSelector(({ courses }) => courses.course)
    const modules = useSelector(({ courses }) => courses.modules)
    const info = useSelector(({ courses }) => courses.info)
    const [shortDescr, setShortDescr] = useState('')
    const [hidden_id, sethidden_id] = useState('')
    const [testLessonId, setTestLessonId] = useState('')
    const [modulesState, setModules] = useState([])

    useEffect(() => modules.data?.length && setModules([...modules.data.reverse()]), [modules])
    useEffect(() => {
        // info.course?.test_lesson_id && sethidden_id(info.course?.test_lesson_id)
        let id
        modules.data?.forEach((mod) => (id = mod.lessonsshort?.find((l) => l.id === info.course?.test_lesson_id)))
        sethidden_id(id?.hidden_id || 0)
        console.log(testLessonId)
        info.course?.short_desc && setShortDescr(info.course?.short_desc)
    }, [info.course])

    useImperativeHandle(ref, () => ({
        getData: () => {
            const body = {
                name: course?.name,
                short_desc: shortDescr,
                format_study: course?.format_study,
                type_study: course?.type_study,
                category_id: course?.category_id,
                moduls: modulesState.map((mod) => ({
                    ...mod,
                    name: mod.name || 'Название модуля',
                    lessons: mod.lessonsshort?.map((l, index) => ({ ...l, name: l.name || 'Название урока', number: index })),
                })),
            }
            if (hidden_id && hidden_id !== '0') {
                body.test_lesson_id = +hidden_id
            }

            const errors = []
            if (!modulesState.length) errors.push('moduls')
            if (hidden_id === '') errors.push('hidden_id')
            const isError = errors.length
            if (isError) {
                setIsShow(true)
                setContent({ title: 'Обязательные поля - ' + errors.join(', ') })
            }

            console.log(body)

            return {
                isError,
                body,
            }
        },
    }))

    const onAddModule = () => {
        setModules([...modulesState, { name: '', lessonsshort: [{ name: '' }] }])
    }
    const onDeleteModule = (index) => {
        setModules(modulesState.filter((item, inx) => inx !== index))
    }
    const setModuleName = (index, name) => {
        setModules(modulesState.map((item, inx) => (inx === index ? { ...item, name } : item)))
    }
    const onAddLesson = (index) => {
        const newModules = [...modulesState]
        newModules[index].lessonsshort.push({ name: '' })
        setModules([...newModules])
    }
    const setLessonName = (index, indexLesson, value) => {
        const newModules = [...modulesState]
        newModules[index].lessonsshort[indexLesson].name = value
        newModules[index].lessonsshort[indexLesson].hidden_id = +new Date().getTime()
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
                    {modulesState.map((props, index) => (
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
            {modulesState.map((props, index) => (
                <AddCourseLesson key={index} {...props} lessons={props.lessonsshort} index={index} setName={setLessonName} onAdd={onAddLesson} />
            ))}

            {/* {console.log(hidden_id)} */}
            {/* {console.log(modules)} */}

            <div className='create-module card-bg'>
                <div className='create-module__top'>
                    <h3 className='create-module__title display-4'>Тестовый урок</h3>
                </div>
                <div className='create-module__items'>
                    <div className='create-module__item form-group'>
                        <label htmlFor=''>Выберите тестовый урок</label>
                        <select value={hidden_id} onChange={(e) => sethidden_id(e.target.value)}>
                            <option defaultValue hidden>
                                Выберите тестовый урок
                            </option>
                            <option value='0'>Без тестового урока</option>
                            {modulesState.map((item, index) =>
                                item?.lessonsshort
                                    ?.filter(({ name }) => name !== '')
                                    .map(({ id, name, hidden_id }, indexLesson) => (
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
}

export default forwardRef(AddCourseTabLesson)
