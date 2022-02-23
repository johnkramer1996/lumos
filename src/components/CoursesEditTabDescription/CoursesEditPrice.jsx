import { Checkbox, Input } from 'components/ui'
import { useInput } from 'hooks'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { coursesSelectors } from 'store/selectors'
import { ReactComponent as DeleteSvg } from 'svg/delete.svg'

const CoursesEditPrice = ({ id, index, name, width, price_with_sale, price, text, moduls = [], onDelete, state }) => {
   const modules = useSelector(coursesSelectors.getModules)

   const form = useForm({
      mode: 'onBlur',
      defaultValues: {
         name: name || 'name test',
         width: width || 'width test',
         price_with_sale: price_with_sale || '1213',
         price: price || '456',
         text: text || 'text test',
         moduls: [...moduls],
      },
   })

   //  const inputName = useInput({ initialValue: name, name: 'name' })
   //  const inputWidth = useInput({ initialValue: width, name: 'width' })
   //  const inputPriceWithSale = useInput({ initialValue: price_with_sale, name: 'price_with_sale', is: { isNumbers: true } })
   //  const inputPrice = useInput({ initialValue: price, name: 'price', is: { isNumbers: true } })
   //  const inputText = useInput({ initialValue: text, name: 'text' })
   //  const inputModuls = useInput({ initialValue: [...moduls], name: 'moduls' })

   state[index].form = form

   const onChangeModule = async (value, checked) => {
      const moduls = await state[index].form.getValues('moduls')
      checked
         ? form.setValue('moduls', (moduls.push(String(value)), moduls))
         : form.setValue(
              'moduls',
              moduls.filter((item) => +item !== +value),
           )
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
            <Input form={form} name='name' label='Название' classNameWrapper='create-price__form-group' />
            <Input form={form} name='width' label='Длительность обучения' classNameWrapper='create-price__form-group' />
            <Input form={form} name='price_with_sale' label='Стоимость без скидки (в рублях)' classNameWrapper='create-price__form-group' number />
            <Input form={form} name='price' label='Стоимость со скидкой (в рублях)' classNameWrapper='create-price__form-group' number />
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
                     {...form.register('modules' + mIndex, {
                        onChange: (e) => onChangeModule(mIndex, e.target.checked),
                     })}
                  />
                  <label htmlFor={`module-${index}-${mIndex}`}>{name}</label>
               </div>
            ))}
         </div>
         <div className='input-error-text'>{form.formState.errors['modules']}</div>
         <Input form={form} name='text' label='Описание (новый пункт через Enter)' classNameWrapper='create-price__text' textarea />
      </div>
   )
}

export default CoursesEditPrice
