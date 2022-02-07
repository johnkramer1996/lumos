import { Button, Input } from 'components/ui'
import { useDispatch, useInput, useNavigate, useRequest } from 'hooks'
import React, { forwardRef, useEffect, useImperativeHandle, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import AddCourseDescription from './AddCourseDescription'
import AddCoursePrice from './AddCoursePrice'
import { ReactComponent as AddSvg } from 'svg/add.svg'

const AddCourseTab3 = ({ callbackHandler: { inputCallbackHandler }, refTabs }, ref) => {
    const { courseId } = useParams()
    const { toCabinetItems } = useNavigate()
    const { setIsShow, setContent, fetchInfo, editInfo, deleteInfo } = useDispatch()
    const course = useSelector(({ courses }) => courses.course)
    const modules = useSelector(({ courses }) => courses.modules)
    const info = useSelector(({ courses }) => courses.info)
    const hasCourse = !(Object.keys(course).length === 0)
    const hasModuls = !(Object.keys(modules).length === 0)
    const hasInfo = !(Object.keys(info).length === 0)

    const courseDescription = useInput({ bind: { name: 'courseDescription' }, callbackHandler: inputCallbackHandler, is: { isRequired: true, isTextarea: true } })
    const result_learn_text = useInput({ bind: { name: 'result_learn_text' }, callbackHandler: inputCallbackHandler, is: { isRequired: true } })

    // const [courseDescription, setCourseDescription] = useState('')
    const [descriptions, setDescriptions] = useState([])
    const [prices, setPrices] = useState([])

    const allInputs = useMemo(() => [courseDescription, result_learn_text], [])

    const deleteInfoRequest = useRequest({
        request: deleteInfo,
        success: ({ dispatch, response, data }) => {
            console.log(data)
        },
    })
    const editInfoRequest = useRequest({
        request: editInfo,
        success: ({ response, data }) => {
            setIsShow(true)
            setContent({ title: 'Информация о курсе обновлена' })
            return
            toCabinetItems()
        },
    })

    useEffect(() => {
        info?.course && courseDescription.setValue(info.course.description || '')
        info?.course && result_learn_text.setValue(info.course.result_learn_text || '')
    }, [info])
    useEffect(() => info.descriptions?.length && setDescriptions([...info.descriptions]), [info.descriptions])
    useEffect(() => info.prices?.length && setPrices([...info.prices]), [info.prices])

    useImperativeHandle(ref, () => ({
        update: () => {
            allInputs.filter((i) => i.update())
        },
        check: () => {
            const isError = allInputs.filter((i) => i.check(i.value))
            if (!descriptions.length) return false
            if (!prices.length) return false
            return !isError.length
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
            editInfoRequest.call({ courseId, body })
        },
    }))

    const onAddDescr = () => {
        setDescriptions([...descriptions, { name: '', text: '', image: '' }])
    }
    const onDeleteDescr = (id, index) => {
        console.log(id, index)
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
        const isModules = prices[0].checkbox.value.find((v) => v === true)
        if (isError.length || !isModules) return
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
                    <AddCourseDescription
                        key={index}
                        {...props}
                        index={index}
                        changeField={changeDescrField}
                        onDelete={onDeleteDescr}
                        onDeleteImg={onDeleteImg}
                        callbackHandler={inputCallbackHandler}
                    />
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
                        <input type='text' placeholder='Результаты обучения' {...result_learn_text.bind} />
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
                        callbackHandler={inputCallbackHandler}
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

export default forwardRef(AddCourseTab3)
