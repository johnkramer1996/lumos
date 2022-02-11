import React, { forwardRef, useRef } from 'react'
import { useEffect } from 'react'
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

const DatePicker = ({ input, ...props }) => {
   const ref = useRef()
   console.log(input.ref)
   useEffect(() => {
      input.ref.current &&
         new Datepicker(input.ref.current, {
            language: 'ru',
            updateOnBlur: false,
         })
   }, [])

   return (
      <input
         type='text'
         {...input.bind}
         {...props}
         onBlur={(e) => {
            setTimeout(() => {
               input.setValue(e.target.value)
               props.onBlur(input)
            }, 0)
         }}
      ></input>
   )
}

export default DatePicker
