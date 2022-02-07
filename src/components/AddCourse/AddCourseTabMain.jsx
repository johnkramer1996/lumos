import React, { forwardRef, useEffect, useImperativeHandle, useMemo } from 'react'
import { Checkbox, ImgUpload, Input } from 'components/ui'
import { getDate, getImgUrl } from 'utils'
import { useSelector } from 'react-redux'
import { useDispatch, useInput, useInputFile, useNavigate, useRequest } from 'hooks'
import { useParams } from 'react-router-dom'
import { useCallback } from 'react'
import { coursesSelectors } from 'store/selectors'

const AddCourseTabMain = ({ callbackHandler: { inputCallbackHandler }, refTabs }, ref) => {
    const { courseId } = useParams()
    const { toCabinetItemsEdit } = useNavigate()
    const { setContent, setIsShow, setCourse, addCourse, putCourse } = useDispatch()
    const { themes = [], type_study: typeStudy = [], format = [] } = useSelector(({ system }) => system.references)
    const course = useSelector(coursesSelectors.getCourse)
    const modules = useSelector(coursesSelectors.getModules)
    const info = useSelector(coursesSelectors.getInfo)
    const hasCourse = !(Object.keys(course).length === 0)
    const hasModuls = !(Object.keys(modules).length === 0)
    const hasInfo = !(Object.keys(info).length === 0)

    const name = useInput({ bind: { name: 'name' }, callbackHandler: inputCallbackHandler, is: { isRequired: true, isName: true } })
    const category_id = useInput({ bind: { name: 'category_id' }, callbackHandler: inputCallbackHandler, is: { isRequired: true } })
    const type_study = useInput({ bind: { name: 'type_study' }, callbackHandler: inputCallbackHandler, is: { isRequired: true } })
    const format_study = useInput({ bind: { name: 'format_study' }, callbackHandler: inputCallbackHandler, is: { isRequired: true } })
    const sale_subscribe = useInput({ initialValue: false, bind: { name: 'sale_subscribe' }, callbackHandler: inputCallbackHandler, is: { isCheckbox: true } })
    const anytime = useInput({ initialValue: true, bind: { name: 'anytime' }, callbackHandler: inputCallbackHandler, is: { isCheckbox: true } })
    const timing = useInput({ initialValue: getDate(new Date()), bind: { name: 'timing' }, callbackHandler: inputCallbackHandler, is: { date: true } })
    const width = useInput({ bind: { name: 'width' }, callbackHandler: inputCallbackHandler, is: { isRequired: true } })
    const img = useInputFile({ callbackHandler: inputCallbackHandler })

    const getAllInputs = useCallback(
        () => [name, category_id, type_study, format_study, sale_subscribe, anytime, width, img],
        [name, category_id, type_study, format_study, sale_subscribe, anytime, width, img],
    )

    useEffect(() => {
        name.setValue(course.name || '')
        category_id.setValue(course.category_id || '')
        type_study.setValue(course.type_study || '')
        format_study.setValue(course.format_study || '')
        sale_subscribe.setValue(course.sale_subscribe || '')
        anytime.setValue(course.anytime || '')
        width.setValue(course.width || '')
        img.setValue(getImgUrl(course.image, false) || '')
    }, [course])

    const addCourseRequest = useRequest({
        request: addCourse,
        success: ({ response, data }) => {
            refTabs.current.nextItems()
            toCabinetItemsEdit({ courseId: data.course.id })
            setCourse(data?.course)
            setIsShow(true)
            setContent({ title: 'Основная информация о курсе  - добавлена,', descr: 'теперь заполните Уроки' })
        },
    })
    const putCourseRequest = useRequest({
        request: putCourse,
        success: ({ response, data }) => {
            setCourse(data?.course)
            setIsShow(true)
            setContent({ title: 'Курс Обновлен' })
        },
    })

    useImperativeHandle(ref, () => ({
        update: () => {
            getAllInputs().filter((i) => i.update())
        },
        check: () => {
            const isError = getAllInputs().filter((i) => i.check(i.value))
            return !isError.length
        },
        send: () => {
            if (!ref.current.check()) return
            const body = new FormData()
            body.append('name', name.value)
            body.append('category_id', category_id.value)
            body.append('type_study', type_study.value)
            body.append('format_study', format_study.value)
            // body.append('timing', timing.value)
            body.append('anytime', +anytime.value)
            body.append('sale_subscribe', +sale_subscribe.value)
            body.append('width', width.value)
            img.ref.current?.files[0] && body.append('image', img.ref.current?.files[0])

            hasCourse ? putCourseRequest.call({ courseId, body }) : addCourseRequest.call({ body })
        },
    }))

    return (
        <div className='course-edit__form'>
            <h3 className='course-edit__form-title'>Основная информация</h3>
            <div className='course-edit__form-grid'>
                <Input className='course-edit__form-group' input={name} label={'Название'} />
                <Input className='course-edit__form-group' input={category_id} label={'Категория'} list={themes} />
                <Input className='course-edit__form-group' input={type_study} label={'Тип обучения'} list={typeStudy} />
                <Input className='course-edit__form-group' input={format_study} label={'Формат'} list={format} />
                <div className='course-edit__form-group form-group'>
                    <Input className='course-edit__form-group' input={timing} label={'Старт курса'} />
                    <Checkbox className='course-edit__form-checkbox' input={anytime} label={'В любое время'} />
                </div>
                <Input className='course-edit__form-group' input={width} label={'Длительность'} />
                <Checkbox className='course-edit__form-checkbox' input={sale_subscribe} label={'Разрешить продавать по подписке'} />
            </div>
            <ImgUpload img={img} title={'Изображение'} />
        </div>
    )
}

export default forwardRef(AddCourseTabMain)
