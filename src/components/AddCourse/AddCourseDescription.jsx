import { Button, ImgUpload, Input } from 'components/ui'
import { useInput, useInputFile } from 'hooks'
import React, { useEffect, useState } from 'react'
import { getImgUrl } from 'utils'
import { ReactComponent as DeleteSvg } from 'svg/delete.svg'

const AddCourseDescription = ({ id, index, image, name, text, changeField, onDelete, onDeleteImg, callbackHandler }) => {
    const inputName = useInput({ callbackHandler, bind: { name: 'name' }, is: { isRequired: true } })
    const inputText = useInput({ callbackHandler, bind: { name: 'text' }, is: { isRequired: true } })
    const img = useInputFile({ callbackHandler })

    useEffect(() => {
        name && inputName.setValue(name)
        text && inputText.setValue(text)
        image && typeof image === 'string' && img.setValue(getImgUrl(image, false))
        console.log(image)
    }, [name, text, image])

    const onChange = (e, input) => changeField(input.bind.name, index, input.value)

    const imgCallbackHandler = (type) => {
        if (type === 'delete') return onDeleteImg(id)
    }

    return (
        <div className='create-whom__group'>
            <div className='create-whom__group-top'>
                <div className='create-whom__subtitle'>Описание {index + 1}</div>
                <button className='create-whom__delete' onClick={() => onDelete(id, index)}>
                    <DeleteSvg />
                </button>
            </div>
            <ImgUpload img={img} size={'sm'} callbackHandler={imgCallbackHandler} title={''} imgClass={'img--md'} ratio={'1/1'} recommend={'248x248'} max={'1 МБ'} />
            <Input className='create-price__form-group' input={inputName} label={'Заголовок'} onChange={onChange} />
            <Input className='create-price__text' input={inputText} label={'Описание (новый пункт через Enter)'} onChange={onChange} />
            {/* <div className='create-whom__uploaded'>
                <div className='create-whom__img'>{img.value && <img src={img.value} alt='' />}</div>
                <div className='create-whom__uploaded-right'>
                    <div className='create-whom__hint'>
                        Соотношение сторон: 1:1 (рекомендуемое разрешение: 248x248) <br /> PNG, JPG до 1 MБ
                    </div>
                    <div className='create-whom__buttons'>
                        <Button className='create-whom__new btn--uploadfile'>
                            <input ref={img.ref} type='file' name='image' accept='image/png, image/gif, image/jpeg' onChange={(e) => onChangeImage(e.target)} />
                            Загрузить {img.value ? 'новое' : 'изображение'}
                        </Button>
                        <Button className='create-whom__remove-img' onClick={() => (img.onDelete(), onDeleteImg(id))} outline>
                            Удалить
                        </Button>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default AddCourseDescription
