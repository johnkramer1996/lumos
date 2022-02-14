import React, { forwardRef, useRef } from 'react'
import { useEffect } from 'react'
import { isActiveClass } from 'utils'
import { Datepicker } from 'vanillajs-datepicker'

Datepicker.locales.ru = {
   days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
   daysShort: ['Вск', 'Пнд', 'Втр', 'Срд', 'Чтв', 'Птн', 'Суб'],
   daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
   months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
   monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
   today: 'Сегодня',
   clear: 'Очистить',
   format: 'yyyy-mm-dd',
   weekStart: 1,
   monthsTitle: 'Месяцы',
}

const DatePicker = ({ input, onBlur, ...props }) => {
   useEffect(() => {
      input.ref.current &&
         new Datepicker(input.ref.current, {
            language: 'ru',
            updateOnBlur: false,
         })
   }, [])

   const onBlurHandle = (e) => {
      setTimeout(() => {
         input.setValue(e.target.value)
         onBlur(e, input)
      }, 0)
   }

   return <input type='text' {...input.bind} {...props} className={`${props.className}${isActiveClass(input.error, 'input-error')}`} onBlur={onBlurHandle}></input>
}

export default DatePicker
