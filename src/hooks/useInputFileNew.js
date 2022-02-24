import { useRef } from 'react'
import { loadImg } from 'utils'

const useInputFileNew = ({ form, name = '' } = {}) => {
   const inputFileValue = form.register(`${name}imageValue`, { required: true })
   const inputFile = form.register(`${name}image`)
   const inputFileRef = useRef()
   const wrapperRef = useRef()

   const onOpen = (e) => inputFileRef.current.click()

   const onChange = async (e) => {
      const file = e.target.files[0]
      if (!file) return

      const img = await loadImg(file)
      setValueImg(img ? img.src : '')
   }

   const setValueImg = (src) => {
      if (src === undefined || src === null) return
      form.setValue(`${name}imageValue`, src)
      form.clearErrors(`${name}imageValue`)
   }

   const onDelete = (e) => {
      form.setValue(`${name}image`, '')
      form.setValue(`${name}imageValue`, '')
      inputFileRef.current.value = ''
   }

   return { onOpen, onChange, onDelete, setValueImg, inputFileValue, inputFile, inputFileRef, wrapperRef, form }
}
export default useInputFileNew
