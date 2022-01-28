import { Button } from 'components/ui'
import React, { useEffect, useRef, useState } from 'react'
import AddCourseTab3Descr from './AddCourseTab3Descr'
import AddCourseTab3Price from './AddCourseTab3Price'

const AddCourseTab3 = React.forwardRef(({ modules, info }, ref) => {
    const [course_description, setCourse_description] = useState('Описание')
    const [descriptions, setDescriptions] = useState([])
    const [prices, setPrices] = useState([])

    useEffect(() => {
        info.descriptions?.length && setDescriptions([...info.descriptions])
        info.prices?.length && setPrices([...info.prices])
    }, [info.descriptions, info.prices])
    // }, [])

    console.log(modules)
    console.log(info)

    ref.current = () => {
        const body = new FormData()
        // body.append('descriptions[2][image]', inputImage.current?.files[0])
        // body.append('descriptions[2][name]', 'Название3')
        // body.append('descriptions[2][text]', 'Тект3')
        // body.append('prices[new_0][moduls][]', '1')
        // body.append('prices[new_0][moduls][]', '2')
        // body.append('descriptions[new_1][name]', 'Название 2')
        // body.append('descriptions[new_1][text]', 'Текст 2')
        // body.append('prices[new_0][name]', 'Название цены')
        // body.append('prices[new_0][width]', 'Длительность')
        // body.append('prices[new_0][price_with_sale]', '1000')
        // body.append('prices[new_0][price]', '10000')
        // body.append('prices[new_0][text]', 'Описание')

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

            // body.append(`prices[${createId}][moduls][]`, '2')
        })
        body.append('course_description', course_description)

        // Display the key/value pairs
        for (var pair of body.entries()) {
            console.log(pair[0] + ', ' + pair[1])
        }

        return {
            isError: false,
            body,
        }
    }

    const onAddDescr = () => {
        setDescriptions([...descriptions, { name: '', text: '' }])
    }
    const onAddPrices = () => {
        setPrices([...prices, { name: '', width: '', price_with_sale: '', price: '', text: '' }])
    }
    const changeDescrField = (field, index, value) => {
        const newDescription = [...descriptions]
        newDescription[index][field] = value
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
        console.log(newPrices)
        setPrices([...newPrices])
    }

    return (
        <>
            <div className='create-about card-bg'>
                <h3 className='create-about__title display-4'>О курсе</h3>
                <div className='create-about__editor'>
                    <textarea value={course_description} onChange={(e) => setCourse_description(e.target.value)}></textarea>
                </div>
            </div>

            <div className='create-whom card-bg'>
                <h3 className='create-whom__title display-4'>О курсе</h3>
                {descriptions.map((props, index) => (
                    <AddCourseTab3Descr key={index} {...props} index={index} changeField={changeDescrField} />
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
                    <AddCourseTab3Price key={index} {...props} index={index} changeField={changePricesField} changeModuleField={changePricesModulesField} modules={modules} />
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
})

export default AddCourseTab3
