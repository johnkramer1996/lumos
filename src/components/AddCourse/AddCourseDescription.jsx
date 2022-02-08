import { Button, ImgUpload, Input } from 'components/ui'
import { useInput, useInputFile } from 'hooks'
import React, { useEffect, useState } from 'react'
import { getImgUrl } from 'utils'
import { ReactComponent as DeleteSvg } from 'svg/delete.svg'

const AddCourseDescription = ({ id, index, image, name, text, changeField, onDelete, onDeleteImg, descriptions }) => {
    const inputName = useInput({ bind: { name: 'name' }, is: { isRequired: true } })
    const inputText = useInput({ bind: { name: 'text' }, is: { isRequired: true, isTextarea: true } })
    const img = useInputFile()

    descriptions[index].inputs = [inputName, inputText, img]

    useEffect(() => {
        name && inputName.setValue(name)
        text && inputText.setValue(text)
        image && typeof image === 'string' && img.setValue(getImgUrl(image, false))
    }, [])

    const onChange = (e, input) => changeField(input.bind.name, index, e.target.value)

    return (
        <div className='create-whom__group'>
            <div className='create-whom__group-top'>
                <div className='create-whom__subtitle'>Описание {index + 1}</div>
                <button className='create-whom__delete' onClick={() => onDelete(id, index)}>
                    <DeleteSvg />
                </button>
            </div>
            <ImgUpload
                img={img}
                size={'sm'}
                onChange={changeField.bind(null, 'image', index)}
                onDelete={onDeleteImg.bind(null, id)}
                imgClass={'img--md'}
                ratio={'1/1'}
                recommend={'248x248'}
                max={'1 МБ'}
            />
            <Input className='create-whom__form-group' input={inputName} label={'Заголовок'} onChange={onChange} />
            <Input className='create-price__text' input={inputText} label={'Описание (новый пункт через Enter)'} onChange={onChange} />
        </div>
    )
}

export default AddCourseDescription
