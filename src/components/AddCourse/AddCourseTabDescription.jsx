import { Button } from 'components/ui'
import { useDispatch } from 'hooks'
import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import { useSelector } from 'react-redux'
import AddCourseDescription from './AddCourseDescription'
import AddCoursePrice from './AddCoursePrice'

const AddCourseTab3 = (_, ref) => {
    const { setContent, setIsShow } = useDispatch()
    const info = useSelector(({ courses }) => courses.info)
    const modules = useSelector(({ courses }) => courses.modules)
    const [courseDescription, setCourseDescription] = useState('')
    const [descriptions, setDescriptions] = useState([])
    const [prices, setPrices] = useState([])

    useEffect(() => info.course?.description && setCourseDescription(info.course?.description), [info.course])
    useEffect(() => info.descriptions?.length && setDescriptions([...info.descriptions]), [info.descriptions])
    useEffect(() => info.prices?.length && setPrices([...info.prices]), [info.prices])

    useImperativeHandle(ref, () => ({
        getData: () => {
            const body = new FormData()
            const errors = []
            body.append('course_description', courseDescription)
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
                if (!Object.keys(moduls).length) errors.push('moduls')
            })
            if (!descriptions.length) errors.push('descriptions')
            if (!prices.length) errors.push('prices')
            const isError = errors.length
            if (isError) {
                setIsShow(true)
                setContent({ title: 'Обязательные поля - ' + errors.join(', ') })
            }
            return {
                isError,
                body,
            }
        },
    }))

    const onAddDescr = () => {
        setDescriptions([...descriptions, { name: '', text: '', image: '' }])
    }
    const onAddPrices = () => {
        setPrices([...prices, { name: '', width: '', price_with_sale: '', price: '', text: '' }])
    }
    const changeDescrField = (field, index, value) => {
        const newDescription = [...descriptions]
        newDescription[index][field] = value
        console.log(newDescription)
        setDescriptions([...newDescription])
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

    return (
        <>
            <div className='create-about card-bg'>
                <h3 className='create-about__title display-4'>О курсе</h3>
                <div className='create-about__editor'>
                    <textarea value={courseDescription} onChange={(e) => setCourseDescription(e.target.value)}></textarea>
                </div>
            </div>

            <div className='create-whom card-bg'>
                <h3 className='create-whom__title display-4'>О курсе</h3>
                {descriptions.map((props, index) => (
                    <AddCourseDescription key={index} {...props} index={index} changeField={changeDescrField} />
                ))}

                <Button className='create-whom__add' onClick={() => onAddDescr()} outline>
                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M12.039 4V20' stroke='#1B2C3E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                        <path d='M20 12.038H4' stroke='#1B2C3E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                    </svg>
                    <span>Добавить описание</span>
                </Button>
            </div>

            <div className='create-price card-bg'>
                <h3 className='create-price__title display-4'>Стоимость</h3>
                {prices.map((props, index) => (
                    <AddCoursePrice key={index} {...props} index={index} changeField={changePricesField} changeModuleField={changePricesModulesField} modules={modules.data} />
                ))}

                <Button className='create-whom__add' onClick={() => onAddPrices()} outline>
                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M12.039 4V20' stroke='#1B2C3E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                        <path d='M20 12.038H4' stroke='#1B2C3E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                    </svg>
                    <span>Добавить вариант участия</span>
                </Button>
            </div>
        </>
    )
}

export default forwardRef(AddCourseTab3)
