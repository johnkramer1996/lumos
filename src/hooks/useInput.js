import { useCallback, useRef, useState } from 'react'

const useInput = ({ initialValue = '', isDisabled = false } = {}) => {
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
