import { useInputFileNew } from 'hooks'
import React, { Fragment, useEffect, useMemo, useRef } from 'react'
import { useCallback } from 'react'
import { useWatch } from 'react-hook-form'
import { getURL, isActiveClass, isFunction } from 'utils'
import { Button } from '..'

const ImgUploadNew = ({ form, image, name = '', onChange, onDelete, imgClass, title, size = 'md', ratio = '16:9', recommend = '1280x720', max = '5 MБ' }) => {
   const inputFileObj = useInputFileNew({ form, name })
   const { onOpen, inputFileValue, inputFile, inputFileRef, inputFileValueRef, wrapperRef } = inputFileObj
   const descr = useMemo(() => ['Соотношение сторон: ', ratio, ' (рекомендуемое разрешение: ', recommend, <br />, 'PNG, JPG до ', max].map((s, index) => <Fragment key={index}>{s}</Fragment>), [])

   useEffect(() => {
      // inputFileObj.setValueImg(fileValue ?? '')
   }, [])

   const onDeleteHandler = (e) => {
      inputFileObj.onDelete()
      isFunction(onDelete) && onDelete(e)
   }
   const onChangeHandler = (e) => {
      inputFileObj.onChange(e)
      // TODO check it
      // isFunction(onChange) && onChange(img.ref.current?.files[0])
      isFunction(onChange) && onChange(e)
   }

   const fileValue = useWatch({
      control: form.control,
      name: inputFileValue.name,
   })

   const {
      formState: { errors },
   } = form
   const spl = inputFileValue.name.split('.')
   const error = errors[name] || (spl.length > 1 && errors && spl.reduce((prev, value) => (Array.isArray(prev) || typeof prev === 'object') && prev[value], errors))

   return (
      <div ref={wrapperRef} className={`course-edit__form-upload ${size && `course-edit__form-upload--${size}`}`}>
         {title && <div className='course-edit__form-upload-title'>{title}</div>}
         <div className='course-edit__form-upload-desc'>{descr}</div>
         <div className='course-edit__form-upload-wrap'>
            <div className={`course-edit__form-upload-img img img--cover img--upload${isActiveClass(error, 'img--error')} ${imgClass}`} onClick={onOpen}>
               {<img ref={inputFileValueRef} src={fileValue} alt='' />}
               <input type='hidden' {...inputFileValue} />
            </div>
            <div className='course-edit__form-upload-right'>
               <div className='course-edit__form-upload-desc'>{descr}</div>
               <div className='course-edit__form-upload-buttons'>
                  <Button className='course-edit__form-upload-btn btn--uploadfile'>
                     <input
                        name={inputFile.name}
                        onBlur={inputFile.onBlur}
                        ref={(e) => {
                           inputFile.ref(e)
                           inputFileRef.current = e
                        }}
                        onChange={async (e) => {
                           await inputFile.onChange(e)
                           onChangeHandler(e)
                        }}
                        type='file'
                        accept='image/png, image/gif, image/jpeg'
                     />
                     Загрузить изображение
                  </Button>
                  <Button className='course-edit__form-upload-delete' onClick={onDeleteHandler} outline>
                     Удалить
                  </Button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ImgUploadNew
