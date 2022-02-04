import React, { useEffect, useState } from 'react'

const AddCoursePrice = ({ id, index, name, width, price_with_sale, price, text, changeField, changeModuleField, modules, moduls = [], onDelete }) => {
    const [nameState, setName] = useState('')
    const [widthState, setWidth] = useState('')
    const [priceWithSaleState, setPriceWithSale] = useState('')
    const [priceState, setPrice] = useState('')
    const [textState, setText] = useState('')

    useEffect(() => {
        name && setName(name)
        width && setWidth(width)
        price_with_sale && setPriceWithSale(price_with_sale)
        price && setPrice(price)
        text && setText(text)
    }, [name, width, price_with_sale, price, text])

    const onChangeName = (value) => (setName(value), changeField('name', index, value))
    const onChangeWidth = (value) => (setWidth(value), changeField('width', index, value))
    const onChangePriceSale = (value) => (setPriceWithSale(value), changeField('price_with_sale', index, value))
    const onChangePrice = (value) => (setPrice(value), changeField('price', index, value))
    const onChangeText = (value) => (setText(value), changeField('text', index, value))
    const onChangeModule = (value, checked) => changeModuleField('moduls', index, value, checked)

    return (
        <div className='create-price__group'>
            <div className='create-price__group-top'>
                <div className='create-price__subtitle'>Вариант участия {index + 1}</div>
                <button className='create-price__delete' onClick={() => onDelete(id, index)}>
                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M19.3249 9.46826C19.3249 9.46826 18.7819 16.2033 18.4669 19.0403C18.3169 20.3953 17.4799 21.1893 16.1089 21.2143C13.4999 21.2613 10.8879 21.2643 8.27991 21.2093C6.96091 21.1823 6.13791 20.3783 5.99091 19.0473C5.67391 16.1853 5.13391 9.46826 5.13391 9.46826'
                            stroke='#EC9898'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                        <path d='M20.7082 6.23975H3.75024' stroke='#EC9898' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                        <path
                            d='M17.4407 6.23973C16.6557 6.23973 15.9797 5.68473 15.8257 4.91573L15.5827 3.69973C15.4327 3.13873 14.9247 2.75073 14.3457 2.75073H10.1127C9.5337 2.75073 9.0257 3.13873 8.8757 3.69973L8.6327 4.91573C8.4787 5.68473 7.8027 6.23973 7.0177 6.23973'
                            stroke='#EC9898'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                    </svg>
                </button>
            </div>
            <div className='create-price__grid'>
                <div className='create-price__form-group form-group'>
                    <label>Название</label>
                    <input type='text' value={nameState} onChange={(e) => onChangeName(e.target.value)} />
                </div>
                <div className='create-price__form-group form-group'>
                    <label>Длительность обучения</label>
                    <input type='text' value={widthState} onChange={(e) => onChangeWidth(e.target.value)} />
                </div>
                <div className='create-price__form-group form-group'>
                    <label>Стоимость без скидки (в рублях)</label>
                    <input type='text' value={priceWithSaleState} onChange={(e) => onChangePriceSale(e.target.value)} />
                </div>
                <div className='create-price__form-group form-group'>
                    <label>Стоимость со скидкой (в рублях)</label>
                    <input type='text' value={priceState} onChange={(e) => onChangePrice(e.target.value)} />
                </div>
            </div>
            <div className='create-price__checks'>
                {modules?.map(({ name }, mIndex) => (
                    <div key={mIndex} className='create-price__check checkbox'>
                        <input
                            type='checkbox'
                            className='checkbox'
                            id={`module-${index}-${mIndex}`}
                            value={mIndex + 1}
                            defaultChecked={Object.keys(moduls).find((item) => +item === mIndex)}
                            onChange={(e) => onChangeModule(mIndex, e.target.checked)}
                        />
                        <label htmlFor={`module-${index}-${mIndex}`}>{name}</label>
                    </div>
                ))}
            </div>
            <div className='create-price__text form-group'>
                <label>
                    <span>Описание (новый пункт через Enter)</span>
                    <span>335/600</span>
                </label>
                <textarea value={textState} onChange={(e) => onChangeText(e.target.value)}></textarea>
            </div>
        </div>
    )
}

export default AddCoursePrice
