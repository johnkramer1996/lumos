import React, { Fragment, useMemo } from 'react'
import { useCallback } from 'react'
import { isActiveClass } from 'utils'
import { Button } from '..'

const ImgUpload = ({ callbackHandler = () => {}, img, imgClass, title, size = 'md', ratio = '16:9', recommend = '1280x720', max = '5 MБ' }) => {
    const onDelete = useCallback(() => {
        img.onDelete()
        callbackHandler('delete', img.ref.current?.files[0])
    }, [])
    const onChange = () => {
        img.onChange()
        callbackHandler('change', img.ref.current?.files[0])
    }
    const descr = useMemo(() => ['Соотношение сторон: ', ratio, ' (рекомендуемое разрешение: ', recommend, <br />, 'PNG, JPG до ', max].map((s, index) => <Fragment key={index}>{s}</Fragment>), [])
    return (
        <div className={`course-edit__form-upload ${size && `course-edit__form-upload--${size}`}`}>
            {title && <div className='course-edit__form-upload-title'>{title}</div>}
            <div className='course-edit__form-upload-desc'>{descr}</div>
            <div className='course-edit__form-upload-wrap'>
                <div className={`course-edit__form-upload-img img img--cover img--upload${isActiveClass(img.isError, 'img--error')} ${imgClass}`} onClick={img.onOpen}>
                    {img.value && <img src={img.value} alt='' />}
                </div>
                <div className='course-edit__form-upload-right'>
                    <div className='course-edit__form-upload-desc'>{descr}</div>
                    <div className='course-edit__form-upload-buttons'>
                        <Button className='course-edit__form-upload-btn btn--uploadfile'>
                            <input ref={img.ref} type='file' name='image' accept='image/png, image/gif, image/jpeg' onChange={onChange} />
                            Загрузить {img.value ? 'новое' : 'изображение'}
                        </Button>
                        <Button className='course-edit__form-upload-delete' onClick={onDelete} outline>
                            Удалить
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImgUpload
