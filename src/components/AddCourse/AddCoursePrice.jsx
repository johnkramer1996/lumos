import { Checkbox, Input } from 'components/ui'
import { useInput } from 'hooks'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { coursesSelectors } from 'store/selectors'
import { ReactComponent as DeleteSvg } from 'svg/delete.svg'

const AddCoursePrice = ({ id, index, name, width, price_with_sale, price, text, changeField, changeModuleField, moduls = [], onDelete, prices }) => {
   const modules = useSelector(coursesSelectors.getModules)

   const inputName = useInput({ bind: { name: 'name' }, is: { isRequired: true } })
   const inputWidth = useInput({ bind: { name: 'width' }, is: { isRequired: true } })
   const inputPriceWithSale = useInput({ bind: { name: 'price_with_sale' }, is: { isRequired: true } })
   const inputPrice = useInput({ bind: { name: 'price' }, is: { isRequired: true } })
   const inputText = useInput({ bind: { name: 'text' }, is: { isRequired: true, isTextarea: true } })
   const inputModuls = useInput({ bind: { name: 'moduls' }, is: { isRequired: true } })

   prices[index].inputs = [inputName, inputWidth, inputPriceWithSale, inputPrice, inputText]
   prices[index].checkbox = inputModuls

   useEffect(() => {
      name && inputName.setValue(name)
      width && inputWidth.setValue(width)
      price_with_sale && inputPriceWithSale.setValue(price_with_sale)
      price && inputPrice.setValue(price)
      text && inputText.setValue(text)
      moduls && inputModuls.setValue(moduls)
   }, [])

   const onChange = (e, input) => changeField(input.bind.name, index, e.target.value)
   const onChangeModule = (value, checked) => {
      inputModuls.setValue(moduls.map((m, index) => (index === value ? checked : m)))
      changeModuleField('moduls', index, value, checked)
   }

   return (
      <div className='create-price__group'>
         <div className='create-price__group-top'>
            <div className='create-price__subtitle'>Вариант участия {index + 1}</div>
            <button className='create-price__delete' onClick={() => onDelete(id, index)}>
               <DeleteSvg />
            </button>
         </div>
         <div className='create-price__grid'>
            <Input className='create-price__form-group' input={inputName} label={'Название'} onChange={onChange} />
            <Input className='create-price__form-group' input={inputWidth} label={'Длительность обучения'} onChange={onChange} />
            <Input className='create-price__form-group' input={inputPriceWithSale} label={'Стоимость без скидки (в рублях)'} onChange={onChange} />
            <Input className='create-price__form-group' input={inputPrice} label={'Стоимость со скидкой (в рублях)'} onChange={onChange} />
         </div>
         <div className='create-price__checks'>
            {modules.map(({ name }, mIndex) => (
               <div key={mIndex} className='create-price__check checkbox'>
                  <input
                     type='checkbox'
                     className='checkbox'
                     id={`module-${index}-${mIndex}`}
                     value={mIndex + 1}
                     defaultChecked={moduls.find((item) => +item === mIndex)}
                     onChange={(e) => onChangeModule(mIndex, e.target.checked)}
                  />
                  <label htmlFor={`module-${index}-${mIndex}`}>{name}</label>
               </div>
            ))}
         </div>
         <Input className='create-price__text' input={inputText} label={'Описание (новый пункт через Enter)'} onChange={onChange} />
      </div>
   )
}

export default AddCoursePrice
