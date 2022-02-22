import { useRef } from 'react'

const useInputFileNew = ({ initialValue = '', form } = {}) => {
   const inputFileValue = form.register('inputFileValue', { required: true })
   const inputFile = form.register('inputFile')
   const inputFileRef = useRef()
   const inputFileValueRef = useRef()
   const wrapperRef = useRef()

   const onOpen = (e) => inputFileRef.current.click()

   const onChange = (e) => {
      const file = inputFileRef.current.files[0]
      if (!file) return
      const size = file.size || 0

      if (size > 5 * 1024 * 1024) {
         inputFileRef.current.value = ''
         return alert('*Слишком большой файл')
      }
      const reader = new FileReader()
      reader.onload = (e) => setValueImg(e.target.result)
      reader.readAsDataURL(file)
   }

   const setValueImg = (src) => {
      if (!src) return
      form.setValue('inputFileValue', src)
      form.formState.errors.inputFileValue && form.clearErrors('inputFileValue')
      setTimeout(() => inputFileValueRef.current?.setAttribute('src', src), 0)
      wrapperRef.current?.classList.add('course-edit__form-upload--uploaded')
   }

   const onDelete = (e) => {
      form.setValue('inputFile', '')
      form.setValue('inputFileValue', '')
      inputFileRef.current.value = ''
      inputFileValueRef.current?.setAttribute('src', '')
      wrapperRef.current?.classList.remove('course-edit__form-upload--uploaded')
   }

   return { onOpen, onChange, onDelete, setValueImg, inputFileValue, inputFile, inputFileRef, inputFileValueRef, wrapperRef, form }
}
export default useInputFileNew
