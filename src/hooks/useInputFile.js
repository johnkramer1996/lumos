import { useCallback, useMemo, useRef, useState } from 'react'

const useInputFile = ({ initialValue = '', callbackHandler = () => {} } = {}) => {
    const [value, setValue] = useState(initialValue)
    const [isError, setIsError] = useState(false)
    const ref = useRef()

    const onChange = useCallback(() => {
        setIsError(false)
        upload(ref, setValue)
    }, [])
    const onDelete = useCallback(() => {
        remove(ref, setValue)
    }, [])
    const check = useCallback((value) => {
        const isError = !value
        setIsError(isError)
        return isError
    }, [])
    const onOpen = useCallback(() => ref.current.click(), [])

    const upload = (inputRef, setImg) => {
        const file = inputRef.current.files[0]
        if (!file) return
        const size = file.size || 0

        if (size > 5 * 1024 * 1024) {
            inputRef.current.value = ''
            return alert('*Слишком большой файл')
        }
        const reader = new FileReader()
        reader.onload = (e) => setImg(e.target.result)
        reader.readAsDataURL(file)
    }
    const remove = (inputFileRef, setImg) => {
        inputFileRef.current.value = ''
        setImg('')
    }
    const update = () => setIsError(false)

    return {
        value,
        setValue,
        ref,
        onChange,
        onDelete,
        onOpen,
        check,
        isError,
        update,
    }
}
export default useInputFile
