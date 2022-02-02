import { useCallback, useEffect, useRef, useState } from 'react'

const useInput = ({ initialValue = '', isDisabled = false, isDate = false } = {}) => {
    const [value, setValue] = useState(initialValue)
    const [prevValue, setPrevValue] = useState(initialValue)
    const ref = useRef()

    const onChange = (e) => setValue(e.target.value)
    const onFocus = (e) => setPrevValue(e.target.value)
    const onBlur = (e) => isDisabled && ref.current.setAttribute('disabled', isDisabled)
    const onDisabledRemove = useCallback(() => {
        if (isDisabled) ref.current.removeAttribute('disabled')
        ref.current.focus()
        const prevValue = ref.current.value
        ref.current.value = ''
        setTimeout(() => (ref.current.value = prevValue), 0)
    }, [])
    const clear = () => setValue('')

    useEffect(() => {
        const maskDate = (e) => {
            if (e.keyCode < 47 || e.keyCode > 57) e.preventDefault()
            const len = e.target.value.length
            if (len !== 1 || len !== 3) if (e.keyCode === 47) e.preventDefault()
            if (len === 4) e.target.value += '-'
            if (len === 7) e.target.value += '-'
            if (len > 9) e.preventDefault()
        }

        ref.current?.addEventListener('keypress', maskDate)

        return () => {
            ref.current?.removeEventListener('keypress', maskDate)
        }
    }, [])

    return {
        value,
        prevValue,
        setValue,
        clear,
        ref,
        isDisabled,
        onDisabledRemove,
        onBlur,
        bind: {
            ref,
            value,
            onChange,
            onFocus,
            onBlur,
            disabled: isDisabled,
        },
    }
}
export default useInput
