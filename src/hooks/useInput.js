import { useCallback, useEffect, useRef, useState } from 'react'
import { maskDate, toBoolean, validateEmail, validateName, validatePhone } from 'utils'

const useInput = ({ initialValue = '', label = '', bind = {}, is: { isRequired, isDisabled, isDate, isCheckbox, isName, isPhone, isEmail, isTextarea } = {} } = {}) => {
    const [value, setValue] = useState(initialValue)
    const [error, setError] = useState('')
    const prevValueRef = useRef(initialValue)
    const propertyRef = useRef()
    const inputRef = useRef()

    const onChange = useCallback((e) => {
        const newValue = !isCheckbox ? e.target.value : e.target.checked
        check(newValue)
        setValue(newValue)
        return true
    }, [])
    const onFocus = useCallback((e) => {
        prevValueRef.current = !isCheckbox ? e.target.value : e.target.checked
    }, [])
    const onBlur = useCallback((e) => {
        isDisabled && inputRef.current.setAttribute('disabled', isDisabled)
    }, [])
    const onDisabledRemove = useCallback(() => {
        inputRef.current.removeAttribute('disabled')
        inputRef.current.focus()
        inputRef.current.value = ''
        setTimeout(() => (inputRef.current.value = prevValueRef.current), 0)
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
        if (isName && !validateName(value)) return 'Некорректное имя'
        if (isPhone && !validatePhone(value)) return 'Некорректный телефон'
        if (isEmail && !validateEmail(value)) return 'Некорректный E-mail'
        return ''
    }, [])
    const update = () => setError('')
    const isNewValue = (val) => prevValueRef.current !== val ?? value
    useEffect(() => {
        const handlers = {}
        if (isDate) {
            handlers.maskDate = maskDate
            isDate && inputRef.current?.addEventListener('keypress', handlers.maskDate)
        }
        return () => {
            isDate && inputRef.current?.removeEventListener('keypress', handlers.maskDate)
        }
    }, [])

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
            className: error ? (bind.className || '') + ' input-error' : bind.className,
            ...bind,
        },
    }

    if (isCheckbox) propertyRef.current.bind.checked = toBoolean(value)
    return propertyRef.current
}
export default useInput
