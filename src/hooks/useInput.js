import { useRef, useState } from 'react'

const useInput = (initialValue = '') => {
    const [value, setValue] = useState(initialValue)
    const [oldValue, setOldValue] = useState(initialValue)
    const ref = useRef()

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onFocus = (e) => setOldValue(e.target.value)

    return {
        value,
        oldValue,
        setValue,
        clear: () => setValue(''),
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
