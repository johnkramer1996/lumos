import { useCallback, useRef, useState } from 'react'

const useInputFile = ({ initialValue = '' } = {}) => {
   const [value, setValue] = useState(initialValue)
   const [isError, setIsError] = useState(false)
   const ref = useRef()

   const onChange = useCallback(() => {
      setIsError(false)
      upload(ref, setValue)
   }, [])
   const onDelete = useCallback((open) => {
      remove(ref, setValue)
      open && ref.current.click()
   }, [])
   const onOpen = useCallback(() => ref.current.click(), [])
   const check = useCallback((value) => {
      const isError = !value
      setIsError(isError)
      return isError
   }, [])
   const upload = (inputRef, setValue) => {
      const file = inputRef.current.files[0]
      if (!file) return
      const size = file.size || 0

      if (size > 5 * 1024 * 1024) {
         inputRef.current.value = ''
         return alert('*Слишком большой файл')
      }
      const reader = new FileReader()
      reader.onload = (e) => setValue(e.target.result)
      reader.readAsDataURL(file)
   }
   const remove = (inputFileRef, setValue) => {
      inputFileRef.current.value = ''
      setValue('')
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
