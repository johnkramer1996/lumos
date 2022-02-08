import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import { Button, Input } from 'components/ui'
import { useSelector } from 'react-redux'
import AddCourseLesson from './AddCourseLesson'
import AddCourseModule from './AddCourseModule'
import { useDispatch, useInput, useRequest } from 'hooks'
import { useParams } from 'react-router-dom'
import { uid } from 'utils'
import { ReactComponent as AddSvg } from 'svg/add.svg'
import { useCallback } from 'react'
import { coursesSelectors } from 'store/selectors/'
import AddCourseLessonEdit from './AddCourseLessonEdit'

const AddCourseTabLesson = ({ refTabs, onUpdateListener }, ref) => {
    const { courseId } = useParams()
    const { setContent, setIsShow, deleteModule, deleteLesson, addModulesMass } = useDispatch()
    const course = useSelector(coursesSelectors.getCourse)
    const modules = useSelector(coursesSelectors.getModules)
    const info = useSelector(coursesSelectors.getInfo)
    const hasCourse = !(Object.keys(course).length === 0)
    const hasModules = modules && !(Object.keys(modules).length === 0)
    const hasInfo = info?.descriptions && info?.prices && !(Object.keys(info.descriptions).length === 0 && Object.keys(info.prices).length === 0)

    const shortDescr = useInput({
        bind: { name: 'shortDescr' },
        is: { isRequired: true, isTextarea: true },
    })
    const hidden_id = useInput({ bind: { name: 'hidden_id' }, is: { isRequired: true } })
    const [modulesState, setModules] = useState([])

    const getAllInputs = useCallback(() => {
        const modulesInputs = modulesState.map(({ input = {}, name, lessonsshort }) => [{ ...input, value: name }, ...lessonsshort.map(({ input = {}, name }) => ({ ...input, value: name }))]).flat()
        console.log(modulesInputs)
        return [shortDescr, hidden_id, ...modulesInputs]
    }, [shortDescr, hidden_id, modulesState])

    useEffect(() => onUpdateListener(-2), [])
    useEffect(() => onUpdateListener(1), [getAllInputs().reduce((prev, { value }) => prev + String(value), '')])

    useEffect(() => {
        console.log(modules)
        modules && setModules([...modules.reverse()])
    }, [modules])
    useEffect(() => {
        course && shortDescr.setValue(course.short_desc ?? '')
        course.test_lesson && hidden_id.setValue(course?.test_lesson.hidden_id ?? '')
    }, [course])

    const addModulesMassRequest = useRequest({
        request: addModulesMass,
        success: ({ response, data }) => {
            console.log(response, data)
            //TODO RETURN COURSE OBJECT FROM SERVER
            // fetchModulesRequest.call({ courseId })
            setIsShow(true)
            !hasModules && !hasInfo
                ? setContent({ title: 'Уроки добавлены,', descr: 'Заполните описание курса и его стоимость.' })
                : !hasInfo
                ? setContent({ title: 'Уроки обновлены,', descr: 'Заполните описание курса и его стоимость.' })
                : setContent({ title: 'Уроки обновлены,', descr: '' })

            !hasInfo && refTabs.current.nextItems()
        },
    })

    const deleteModuleRequest = useRequest({
        request: deleteModule,
        success: ({ response, data }) => {
            setIsShow(true)
            setContent({ title: 'Модуль удален,', descr: '' })
        },
    })
    const deleteLessonRequest = useRequest({
        request: deleteLesson,
        success: ({ response, data }) => {
            setIsShow(true)
            setContent({ title: 'Урок удален', descr: '' })
        },
    })

    useImperativeHandle(ref, () => ({
        update: () => getAllInputs().filter((i) => i.update()),
        check: () => !getAllInputs().filter((i) => i.check(i.value)).length,
        send: () => {
            if (!ref.current.check()) return
            const body = {
                name: course?.name,
                short_desc: shortDescr.value,
                format_study: course?.format_study,
                type_study: course?.type_study,
                category_id: course?.category_id,
                moduls: modulesState.map((m) => ({
                    id: m.id,
                    name: m.name,
                    lessons: m.lessonsshort?.map((l, index) => ({
                        id: l.id,
                        name: l.name,
                        hidden_id: l.hidden_id,
                        number: index,
                        is_test: l.hidden_id === hidden_id.value,
                    })),
                })),
            }

            addModulesMassRequest.call({ courseId, body })
        },
    }))

    const onAddModule = () => {
        const isError = modulesState.filter(({ input }) => input.check(input.value))
        if (isError.length) return
        setModules([...modulesState, { name: '', lessonsshort: [], hidden_id: uid() }])
    }
    const onDeleteModule = (id, index) => {
        if (modulesState[index].lessonsshort.length) {
            setIsShow(true)
            setContent({ title: 'У модуля есть уроки, ', descr: 'удалите уроки, потом удалите модуль' })
            return
        }
        id && deleteModuleRequest.call({ courseId, id })
        setModules(modulesState.filter((item, inx) => inx !== index))
    }
    const setModuleName = (index, name) => {
        setModules(modulesState.map((item, inx) => (inx === index ? { ...item, name } : item)))
    }
    const onAddLesson = (index) => {
        const isError = modulesState[index].lessonsshort.filter(({ input }) => input.check(input.value))
        if (isError.length) return
        const newModules = [...modulesState]
        newModules[index].lessonsshort.push({ name: '', hidden_id: uid() })
        setModules([...newModules])
    }
    const onDeleteLesson = (lessonId, indexModule, indexLesson) => {
        lessonId && deleteLessonRequest.call({ courseId, lessonId })
        const newModules = modulesState.map((m, inxModule) =>
            inxModule !== indexModule
                ? m
                : {
                      ...m,
                      lessonsshort: m.lessonsshort.filter((l, inxLesson) => {
                          return inxLesson !== indexLesson
                      }),
                  },
        )
        setModules(newModules)
    }
    const setLessonName = (indexModule, indexLesson, value) => {
        const newModules = [...modulesState]
        newModules[indexModule].lessonsshort[indexLesson].name = value
        setModules([...newModules])
    }
    return (
        <>
            <div className='course-edit__small-desc card-bg'>
                <div className='course-edit__small-desc-title display-4'>Короткое описание</div>
                <Input className='' input={shortDescr} label='Описание' />
            </div>
            <div className='create-module card-bg'>
                <h3 className='create-module__title display-4'>Модули</h3>
                <div className='create-module__items'>
                    {modulesState.map((props, index) => (
                        <div key={props.id ?? props.hidden_id}>
                            <AddCourseModule {...props} index={index} modulesState={modulesState} setName={setModuleName} onDelete={onDeleteModule} />
                        </div>
                    ))}
                </div>
                <Button className='create-module__add' onClick={onAddModule} outline>
                    <AddSvg />
                    <span>Добавить модуль</span>
                </Button>
            </div>
            {modulesState.map((props, index) => (
                <AddCourseLesson
                    key={props.id ?? props.hidden_id}
                    {...props}
                    lessons={props.lessonsshort}
                    modulesState={modulesState}
                    index={index}
                    setName={setLessonName}
                    onAdd={onAddLesson}
                    onDelete={onDeleteLesson}
                />
            ))}
            <div className='create-module card-bg'>
                <div className='create-module__top'>
                    <h3 className='create-module__title display-4'>Тестовый урок</h3>
                </div>
                <div className='create-module__items'>
                    <div className='create-module__item form-group'>
                        <label htmlFor='test_lesson'>Выберите тестовый урок</label>
                        <select id='test_lesson' {...hidden_id.bind}>
                            <option defaultValue hidden>
                                Выберите тестовый урок
                            </option>
                            <option value='0'>Без тестового урока</option>
                            {modulesState.map((item, index) =>
                                item?.lessonsshort
                                    ?.filter(({ name }) => name !== '')
                                    .map(({ id, name, hidden_id }, indexLesson) => (
                                        <option key={id || hidden_id} value={hidden_id}>
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
