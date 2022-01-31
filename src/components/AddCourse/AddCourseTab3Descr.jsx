import { Button } from 'components/ui'
import { useSelector } from 'hooks'
import React, { useEffect, useRef, useState } from 'react'
import { getImgUrl } from 'utils'

const AddCourseTab3Descr = ({ index, image, name, text, changeField }) => {
    const [nameValue, setName] = useState(name)
    const [textValue, setText] = useState(text)
    const [dataImg, setDataImg] = useState(getImgUrl(image, false) || '')

    const onChangeName = (value) => {
        setName(value)
        changeField('name', index, value)
    }
    const onChangeText = (value) => {
        setText(value)
        changeField('text', index, value)
    }

    const inputImage = useRef()
    const imgRef = useRef()

    const uploadImg = (e) => {
        const file = e.target.files[0]
        if (!file) return

        const size = file.size || 0

        if (size > 5 * 1024 * 1024) {
            inputImage.current.value = ''
            alert('*Слишком большой файл')

            return
        }

        changeField('image', index, file)

        const reader = new FileReader()
        reader.onload = (e) => setDataImg(e.target.result)
        reader.readAsDataURL(file)
    }

    const deleteImg = (e) => {
        inputImage.current.value = ''
        setDataImg('')
    }

    return (
        <div className='create-whom__group'>
            <div className='create-whom__group-top'>
                <div className='create-whom__subtitle'>Описание {index + 1}</div>
                <button className='create-whom__delete'>
                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M19.3249 9.46826C19.3249 9.46826 18.7819 16.2033 18.4669 19.0403C18.3169 20.3953 17.4799 21.1893 16.1089 21.2143C13.4999 21.2613 10.8879 21.2643 8.27991 21.2093C6.96091 21.1823 6.13791 20.3783 5.99091 19.0473C5.67391 16.1853 5.13391 9.46826 5.13391 9.46826'
                            stroke='#EC9898'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                        <path d='M20.7082 6.23975H3.75024' stroke='#EC9898' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                        <path
                            d='M17.4407 6.23973C16.6557 6.23973 15.9797 5.68473 15.8257 4.91573L15.5827 3.69973C15.4327 3.13873 14.9247 2.75073 14.3457 2.75073H10.1127C9.5337 2.75073 9.0257 3.13873 8.8757 3.69973L8.6327 4.91573C8.4787 5.68473 7.8027 6.23973 7.0177 6.23973'
                            stroke='#EC9898'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                    </svg>
                </button>
            </div>
            <div className='create-whom__uploaded'>
                <div className='create-whom__img'>{dataImg && <img ref={imgRef} src={dataImg} alt='' />}</div>
                <div className='create-whom__uploaded-right'>
                    <div className='create-whom__hint'>
                        Соотношение сторон: 1:1 (рекомендуемое разрешение: 248x248) <br />
                        PNG, JPG до 1 MБ
                    </div>
                    <div className='create-whom__buttons'>
                        <Button className='create-whom__new btn--uploadfile'>
                            <input ref={inputImage} type='file' name='image' accept='image/png, image/gif, image/jpeg' onChange={uploadImg} />
                            Загрузить {dataImg ? 'новое' : 'изображение'}
                        </Button>
                        <Button className='create-whom__remove-img' onClick={deleteImg} outline>
                            Удалить
                        </Button>
                    </div>
                </div>
            </div>
            <div className='create-whom__form-group form-group'>
                <label>Заголовок</label>
                <input type='text' value={nameValue} onChange={(e) => onChangeName(e.target.value)} />
            </div>
            <div className='create-whom__form-group form-group'>
                <label>
                    <span>Описание</span>
                    <span>335/600</span>
                </label>
                <textarea value={textValue} onChange={(e) => onChangeText(e.target.value)}></textarea>
            </div>
        </div>
    )
}

export default AddCourseTab3Descr
