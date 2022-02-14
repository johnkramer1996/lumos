import { useCallback, useEffect, useRef, useState } from 'react'
import { maskDate, toBoolean, validateEmail, validateName, validatePassword, validatePhone } from 'utils'

const useInput = ({ initialValue = '', label = '', bind = {}, is: { isRequired, isDisabled, isDate, isCheckbox, isName, isNumbers, isEmail, isTextarea, isPassword } = {} } = {}) => {
   const [value, setValue] = useState(initialValue)
   const [error, setError] = useState('')
   const prevValueRef = useRef(initialValue)
   const propertyRef = useRef()
   const inputRef = useRef()

   const onChange = useCallback((e) => {
      let newValue = !isCheckbox ? e.target.value : e.target.checked
      newValue = !isNumbers ? newValue : onlyNumbers(newValue)
      setValue(newValue)
   }, [])
   const onFocus = useCallback((e) => {
      propertyRef.current.update()
      prevValueRef.current = !isCheckbox ? e.target.value : e.target.checked
   }, [])
   const onBlur = useCallback((e) => {
      check(e.target.value)
      isDisabled && inputRef.current.setAttribute('disabled', isDisabled)
   }, [])
   const onDisabledRemove = useCallback(() => {
      inputRef.current.removeAttribute('disabled')
      inputRef.current.focus()
      inputRef.current.value = ''
      !isPassword && setTimeout(() => (inputRef.current.value = prevValueRef.current), 0)
   }, [])
   const clear = useCallback(() => setValue(''), [])
   const check = useCallback((value) => {
      if (!isRequired) return
      const error = hasError(value)
      setError(error)
      return !!error
   }, [])
   const hasError = useCallback((value) => {
      if (value === '') return 'Обязательное поле'
      if (isPassword && !validatePassword(value)) return 'Некорректный пароль'
      if (isName && !validateName(value)) return 'Некорректное имя'
      // if (isPhone && !validatePhone(value)) return 'Некорректный телефон'
      if (isEmail && !validateEmail(value)) return 'Некорректный E-mail'
      return ''
   }, [])
   const update = () => setError('')
   const isNewValue = (val) => prevValueRef.current !== val
   const onlyNumbers = (val) => val.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1')

   propertyRef.current = {
      value,
      prevValueRef,
      setValue,
      update,
      clear,
      ref: inputRef,
      isDisabled,
      onDisabledRemove,
      onBlur,
      error,
      check,
      label,
      isDate,
      isTextarea,
      isCheckbox,
      isNewValue,
      bind: {
         ref: inputRef,
         value,
         onChange,
         onFocus,
         onBlur,
         disabled: isDisabled || false,
         ...bind,
      },
   }

   if (isCheckbox) propertyRef.current.bind.checked = toBoolean(value)
   if (isPassword) propertyRef.current.bind.type = 'password'

   return propertyRef.current
}
export default useInput
