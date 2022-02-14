import React from 'react'
import PropTypes from 'prop-types'
import { DatePicker } from '..'
import { isActiveClass } from 'utils'

const Input = ({ classNameWrapper = '', label = '', placeholder = '', input, list = [], onChange = () => {}, onBlur = () => {}, withoutWrapper, datepicker, ...props }) => {
   const onChangeHandle = (e) => {
      input.bind.onChange(e)
      onChange(e, input)
   }
   const onBlurHandle = (e) => {
      input.bind.onBlur(e)
      onBlur(e, input)
   }

   const InputInner = () => (
      <>
         {label && <label>{label}</label>}

         {input.isDate ? (
            <DatePicker {...props} input={input} onBlur={onBlurHandle} />
         ) : !list.length ? (
            !input.isTextarea ? (
               <input
                  type='text'
                  placeholder={placeholder || label}
                  {...input.bind}
                  {...props}
                  className={`${props.className || ''}${isActiveClass(input.error, 'input-error')}`}
                  onChange={onChangeHandle}
                  onBlur={onBlurHandle}
               />
            ) : (
               <textarea
                  type='text'
                  placeholder={placeholder || label}
                  {...input.bind}
                  {...props}
                  className={`${props.className || ''}${isActiveClass(input.error, 'input-error')}`}
                  onChange={onChangeHandle}
                  onBlur={onBlurHandle}
               ></textarea>
            )
         ) : (
            <select {...input.bind} {...props} className={`${props.className || ''}${isActiveClass(input.error, 'input-error')}`} onChange={onChangeHandle} onBlur={onBlurHandle}>
               <option defaultValue hidden>
                  {placeholder || label}
               </option>
               {list.map(({ id, name }, index) => (
                  <option key={id || index} value={id}>
                     {name}
                  </option>
               ))}
            </select>
         )}
         {input.error && <div className='input-error-text'>{input.error}</div>}
      </>
   )

   return <>{withoutWrapper ? InputInner() : <div className={`${classNameWrapper} form-group`}>{InputInner()}</div>}</>
}

Input.propTypes = {
   input: PropTypes.object.isRequired,
}

export default Input
