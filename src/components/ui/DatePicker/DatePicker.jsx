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

const DatePicker = ({ props: { ref, ...props } }) => {
   const myRef = useRef()
   useEffect(() => {
      myRef.current &&
         new Datepicker(myRef.current, {
            language: 'ru',
            // updateOnBlur: false,
            autohide: true,
         })
   }, [])

   return (
      <input
         type='text'
         ref={(e) => {
            ref(e)
            myRef.current = e
         }}
         autoComplete='off'
         {...props}
      ></input>
   )
}

export default DatePicker
