import { Checkbox, Input } from 'components/ui'
import { useInput } from 'hooks'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { coursesSelectors } from 'store/selectors'
import { ReactComponent as DeleteSvg } from 'svg/delete.svg'

const AddCoursePrice = ({ id, index, name, width, price_with_sale, price, text, moduls = [], onDelete, prices }) => {
   const modules = useSelector(coursesSelectors.getModules)

   const inputName = useInput({ initialValue: name, bind: { name: 'name' }, is: { isRequired: true } })
   const inputWidth = useInput({ initialValue: width, bind: { name: 'width' }, is: { isRequired: true } })
   const inputPriceWithSale = useInput({ initialValue: price_with_sale, bind: { name: 'price_with_sale' }, is: { isRequired: true, isNumbers: true } })
   const inputPrice = useInput({ initialValue: price, bind: { name: 'price' }, is: { isRequired: true, isNumbers: true } })
   const inputText = useInput({ initialValue: text, bind: { name: 'text' }, is: { isRequired: true, isTextarea: true } })
   const inputModuls = useInput({ initialValue: [...moduls], bind: { name: 'moduls' }, is: { isRequired: true } })

   prices[index].inputs = [inputName, inputWidth, inputPriceWithSale, inputPrice, inputText]
   prices[index].checkboxs = inputModuls

   const onChangeModule = (value, checked) => {
      inputModuls.update()
      checked ? inputModuls.value.push(String(value)) : (inputModuls.value = inputModuls.value.filter((item) => +item !== +value))
      inputModuls.setValue([...inputModuls.value])
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
            <Input classNameWrapper='create-price__form-group' input={inputName} label={'Название'} />
            <Input classNameWrapper='create-price__form-group' input={inputWidth} label={'Длительность обучения'} />
            <Input classNameWrapper='create-price__form-group' input={inputPriceWithSale} label={'Стоимость без скидки (в рублях)'} />
            <Input classNameWrapper='create-price__form-group' input={inputPrice} label={'Стоимость со скидкой (в рублях)'} />
         </div>
         <div className='create-price__checks'>
            {modules.map(({ name }, mIndex) => (
               <div key={mIndex} className='create-price__check checkbox'>
                  <input
                     type='checkbox'
                     className='checkbox'
                     id={`module-${index}-${mIndex}`}
                     value={mIndex}
                     defaultChecked={moduls.find((item) => +item === mIndex)}
                     onChange={(e) => onChangeModule(mIndex, e.target.checked)}
                  />
                  <label htmlFor={`module-${index}-${mIndex}`}>{name}</label>
               </div>
            ))}
         </div>
         <div className='input-error-text'>{inputModuls.error}</div>
         <Input classNameWrapper='create-price__text' input={inputText} label={'Описание (новый пункт через Enter)'} />
      </div>
   )
}

export default AddCoursePrice
