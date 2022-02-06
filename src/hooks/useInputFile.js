import { useCallback, useMemo, useRef, useState } from 'react'
import { deleteImg, uploadImg } from 'utils'

const useInputFile = ({ initialValue = '', callbackHandler = () => {} } = {}) => {
    const [value, setValue] = useState(initialValue)
    const [isError, setIsError] = useState(false)
    const ref = useRef()

    const onChange = useCallback(() => {
        setIsError(false)
        uploadImg(ref, setValue)
        callbackHandler('change', ref)
    }, [])
    const onDelete = useCallback(() => {
        deleteImg(ref, setValue)
        callbackHandler('delete', ref)
    }, [])
    const check = useCallback(() => {
        const isError = !value
        setIsError(isError)
        return isError
    }, [])
    const onOpen = useCallback(() => ref.current.click(), [])

    return {
        value,
        setValue,
        ref,
        onChange,
        onDelete,
        onOpen,
        check,
        isError,
    }
}
export default useInputFile
