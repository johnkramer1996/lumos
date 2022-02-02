import { useMemo, useRef, useState } from 'react'
import { deleteImg, uploadImg } from 'utils'

const useInputFile = (initialValue = '') => {
    const [value, setValue] = useState(initialValue)
    const ref = useRef()

    const onChange = useMemo(() => uploadImg.bind(null, ref, setValue), [])
    const onDelete = useMemo(() => deleteImg.bind(null, ref, setValue), [])

    return {
        value,
        setValue,
        ref,
        onChange,
        onDelete,
    }
}
export default useInputFile
