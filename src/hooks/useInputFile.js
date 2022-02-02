import { useMemo, useRef, useState } from 'react'
import { deleteImg, uploadImg } from 'utils'

const useInputFile = (initialValue = '') => {
    const [img, setImg] = useState(initialValue)
    const ref = useRef()

    const onChange = useMemo(() => uploadImg.bind(null, ref, setImg), [])
    const onDelete = useMemo(() => deleteImg.bind(null, ref, setImg), [])

    return {
        img,
        setImg,
        ref,
        onChange,
        onDelete,
    }
}
export default useInputFile
