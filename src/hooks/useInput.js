import { useRef, useState } from 'react'

const useInput = (initialValue = '') => {
    const [value, setValue] = useState(initialValue)
    const [prevValue, setPrevValue] = useState(initialValue)
    const ref = useRef()

    const onChange = (e) => setValue(e.target.value)

    const onFocus = (e) => setPrevValue(e.target.value)

    const clear = () => setValue('')

    return {
        value,
        prevValue,
        setValue,
        clear,
        ref,
        bind: {
            value,
            onChange,
            ref,
            onFocus,
        },
    }
}
export default useInput
