import { Button, Input } from 'components/ui'
import { useDispatch, useInput, useNavigate, useRequest } from 'hooks'
import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import AddCourseDescription from './AddCourseDescription'
import AddCoursePrice from './AddCoursePrice'
import { ReactComponent as AddSvg } from 'svg/add.svg'
import { coursesSelectors } from 'store/selectors'

const AddCourseTabDescription = ({ refTabs, onUpdateListener }, ref) => {
    const { courseId } = useParams()
    const { toCabinetItems } = useNavigate()
    const { setIsShow, setContent, editInfo, deleteInfo } = useDispatch()
    // const course = useSelector(coursesSelectors.getCourse)
    const modules = useSelector(coursesSelectors.getModules)
    const info = useSelector(coursesSelectors.getInfo)
    // const hasCourse = !(Object.keys(course).length === 0)
    const hasModules = modules && !(Object.keys(modules).length === 0)
    const hasInfo = info?.descriptions && info?.prices && !(Object.keys(info.descriptions).length === 0 && Object.keys(info.prices).length === 0)

    const courseDescription = useInput({ bind: { name: 'courseDescription' }, is: { isRequired: true, isTextarea: true } })
    const result_learn_text = useInput({ bind: { name: 'result_learn_text' }, is: { isRequired: true } })

    const [descriptions, setDescriptions] = useState([])
    const [prices, setPrices] = useState([])

    const getAllInputs = useCallback(() => {
        const descriptionsInputs = descriptions.map(({ inputs }) => inputs).flat()
        const pricesInputs = prices.map(({ inputs }) => inputs).flat()
        return [courseDescription, result_learn_text, ...descriptionsInputs, ...pricesInputs]
    }, [courseDescription, result_learn_text, descriptions, prices])

    useEffect(() => onUpdateListener(-2), [])
    // TODO ADD ALL INPUTS
    useEffect(() => onUpdateListener(1), [[courseDescription, result_learn_text].reduce((prev, { value }) => prev + String(value), '')])

    useEffect(() => {
        info?.course && courseDescription.setValue(info.course.description || '')
        info?.course && result_learn_text.setValue(info.course.result_learn_text || '')
        info.descriptions?.length && setDescriptions([...info.descriptions])
        info.prices?.length && setPrices([...info.prices])
    }, [info])

    const deleteInfoRequest = useRequest({
        request: deleteInfo,
        success: ({ response, data }) => {
            setIsShow(true)
            setContent({ title: 'Информация удалена', descr: '' })
        },
    })
    const editInfoRequest = useRequest({
        request: editInfo,
        success: ({ response, data }) => {
            // TODO
            setIsShow(true)
            setContent({ title: 'Информация о курсе обновлена' })

            setIsShow(true)
            setContent({ title: 'Информация добавлена', descr: 'Ваш курс отправлен на модерацию.' })
        },
    })

    useImperativeHandle(ref, () => ({
        update: () => getAllInputs().filter((i) => i.update()),
        check: () => {
            // TODO OPMIZE CODE
            if (!descriptions.length || !prices.length) return false
            return !getAllInputs().filter((i) => i.check(i.value)).length
        },
        send: () => {
            const body = new FormData()
            body.append('course_description', courseDescription.value)
            body.append('result_learn_text', result_learn_text.value)
            descriptions.forEach(({ id, name, text, image }, index) => {
                const createId = id !== undefined ? id : 'new_' + index
                body.append(`descriptions[${createId}][image]`, image)
                body.append(`descriptions[${createId}][name]`, name || 'Текст')
                body.append(`descriptions[${createId}][text]`, text || 'Текст')
            })
            prices.forEach(({ id, name, text, width, price_with_sale, price, moduls = [] }, index) => {
                const createId = id !== undefined ? id : 'new_' + index
                body.append(`prices[${createId}][name]`, name || 'Текст')
                body.append(`prices[${createId}][width]`, width || 'Текст')
                body.append(`prices[${createId}][price_with_sale]`, price_with_sale || 'Текст')
                body.append(`prices[${createId}][price]`, price || 'Текст')
                body.append(`prices[${createId}][text]`, text || 'Текст')
                for (const item of Object.keys(moduls)) {
                    moduls[item] && body.append(`prices[${createId}][moduls][]`, item)
                }
            })

            console.log(descriptions)
            console.log(body)

            editInfoRequest.call({ courseId, body })
        },
    }))

    const onAddDescr = () => {
        const isError = descriptions.filter((descr) => descr.inputs.filter((i) => i.check(i.value)).length)
        if (descriptions.length && isError.length) return
        setDescriptions([...descriptions, { name: '', text: '', image: '' }])
    }
    const onDeleteDescr = (id, index) => {
        id && deleteInfoRequest.call({ courseId, id, type: 'desc' })
        setDescriptions(descriptions.filter((item, inx) => inx !== index))
    }
    const changeDescrField = (field, index, value) => {
        const newDescription = [...descriptions]
        newDescription[index][field] = value
        setDescriptions([...newDescription])
    }
    const onAddPrices = () => {
        const isError = prices.filter((price) => price.inputs.filter((i) => i.check(i.value)).length)
        const isModules = prices.filter((price) => price.checkbox.value.find((v) => v === true))
        if (prices.length && (isError.length || !isModules)) return
        setPrices([...prices, { name: '', width: '', price_with_sale: '', price: '', text: '' }])
    }
    const onDeletePrices = (id, index) => {
        id && deleteInfoRequest.call({ courseId, id, type: 'price' })
        setPrices(prices.filter((item, inx) => inx !== index))
    }
    const changePricesField = (field, index, value) => {
        const newPrices = [...prices]
        newPrices[index][field] = value
        setPrices([...newPrices])
    }
    const changePricesModulesField = (field, index, value, checked) => {
        const newPrices = [...prices]
        newPrices[index][field] = newPrices[index][field] ? newPrices[index][field] : {}
        newPrices[index][field][value] = checked
        setPrices([...newPrices])
    }
    const onDeleteImg = (id) => id && deleteInfoRequest.call({ courseId, id, type: 'image' })

    return (
        <>
            <div className='create-about card-bg'>
                <h3 className='create-about__title display-4'>О курсе</h3>
                <div className='create-about__editor'>
                    <Input input={courseDescription} />
                </div>
            </div>
            <div className='create-whom card-bg'>
                <h3 className='create-whom__title display-4'>О курсе</h3>
                {descriptions.map((props, index) => (
                    <AddCourseDescription key={index} {...props} index={index} changeField={changeDescrField} onDelete={onDeleteDescr} onDeleteImg={onDeleteImg} descriptions={descriptions} />
                ))}
                <Button className='create-whom__add' onClick={() => onAddDescr()} outline>
                    <AddSvg />
                    <span>Добавить описание</span>
                </Button>
            </div>
            <div className='create-price card-bg'>
                <div className='course-edit__form-group form-group'>
                    <h3 className='create-price__title display-4'>Результаты обучения</h3>
                    <div className='create-about__editor'>
                        <Input input={result_learn_text} label={'Результаты обучения'} />
                        {/* <input type='text' placeholder='Результаты обучения' {...result_learn_text.bind} /> */}
                    </div>
                </div>
            </div>
            <div className='create-price card-bg'>
                <h3 className='create-price__title display-4'>Стоимость</h3>
                {prices.map((props, index) => (
                    <AddCoursePrice
                        key={index}
                        {...props}
                        index={index}
                        changeField={changePricesField}
                        changeModuleField={changePricesModulesField}
                        modules={modules.data}
                        onDelete={onDeletePrices}
                        prices={prices}
                    />
                ))}
                <Button className='create-whom__add' onClick={() => onAddPrices()} outline>
                    <AddSvg />
                    <span>Добавить вариант участия</span>
                </Button>
            </div>
        </>
    )
}

export default forwardRef(AddCourseTabDescription)
