import React from 'react'
import { DatePicker } from '..'
import { isActiveClass, isFunction } from 'utils'

const Input = ({ errorName, form, label, registerOptions = {}, options, classNameWrapper = '', withoutWrapper, datepicker, textarea, email, password, time, number, isErrorText = true, ...props }) => {
   if (!form || !props['name']) return <input type='text' placeholder='Error Input' />
   //  const onChangeHandle = (e) => {
   //     input.bind.onChange(e)
   //     isFunction(onChange) && onChange(e, input)
   //  }
   //  const onBlurHandle = (e) => {
   //     input.bind.onBlur(e)
   //     isFunction(onBlur) && onBlur(e, input)
   //  }

   //  onChange={onChangeHandle} onBlur={onBlurHandle}

   const name = props['name']
   const {
      register,
      formState: { errors },
   } = form

   if (email) {
      registerOptions.pattern = {
         value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
         message: 'Некорректный E-mail',
      }
   }
   if (password)
      registerOptions.minLength = {
         value: 7,
         message: 'Минимальная длина пароля - 7 символов',
      }
   if (time)
      registerOptions.pattern = {
         value: /^([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/,
         message: 'Время в формате 00:00:00',
      }
   if (number) registerOptions.onChange = (e) => (e.target.value = e.target.value.replace(/[^0-9]/g, ''))
   if (props.type === 'hidden') registerOptions.required = false

   const error = errorName ? errors[errorName] : errors[name]
   props = {
      ...register(name, { required: true, ...registerOptions }),
      ...props,
      placeholder: props.placeholder ? props.placeholder : label,
      className: `${props.className || ''}${isActiveClass(error, 'input-error')}`,
   }

   const InputInner = () => (
      <>
         {label && <label>{label}</label>}
         {datepicker ? (
            <DatePicker props={props} />
         ) : !Array.isArray(options) ? (
            !textarea ? (
               <input type='text' {...props} autoComplete='off' />
            ) : (
               <textarea {...props}></textarea>
            )
         ) : (
            <select {...props}>
               <option value='' hidden>
                  {label}
               </option>
               {options.map(({ id, name }, index) => (
                  <option key={id || index} value={id}>
                     {name}
                  </option>
               ))}
            </select>
         )}

         {error && isErrorText && <div className='input-error-text'>{error.message || 'Обязательное поле'}</div>}
      </>
   )

   return <>{withoutWrapper ? InputInner() : <div className={`form-group ${classNameWrapper}`}>{InputInner()}</div>}</>
}

export default Input
