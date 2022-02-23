import { useRef } from 'react'

const useInputFileNew = ({ initialValue = '', form, name = '' } = {}) => {
   const inputFileValue = form.register(`${name}inputFileValue`, { required: true })
   const inputFile = form.register(`${name}inputFile`)
   const inputFileRef = useRef()
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
      form.setValue(`${name}inputFileValue`, src)
      form.formState.errors.inputFileValue && form.clearErrors(`${name}inputFileValue`)
      // setTimeout(() => inputFileValueRef.current?.setAttribute('src', src), 0)
      // wrapperRef.current?.classList.add('course-edit__form-upload--uploaded')
   }

   const onDelete = (e) => {
      form.setValue(`${name}inputFile`, '')
      form.setValue(`${name}inputFileValue`, '')
      inputFileRef.current.value = ''
      // inputFileValueRef.current?.setAttribute('src', '')
      // wrapperRef.current?.classList.remove('course-edit__form-upload--uploaded')
   }

   return { onOpen, onChange, onDelete, setValueImg, inputFileValue, inputFile, inputFileRef, wrapperRef, form }
}
export default useInputFileNew
