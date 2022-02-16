import { ImgUpload, Input } from 'components/ui'
import { useInput, useInputFile } from 'hooks'
import React from 'react'
import { getURL } from 'utils'
import { ReactComponent as DeleteSvg } from 'svg/delete.svg'

const AddCourseDescription = ({ id, index, image, name, text, onDelete, onDeleteImg, descriptions }) => {
   const inputName = useInput({ initialValue: name, bind: { name: 'name' }, is: { isRequired: true } })
   const inputText = useInput({ initialValue: text, bind: { name: 'text' }, is: { isRequired: true, isTextarea: true } })
   const img = useInputFile({ initialValue: getURL.img(image, false) })

   descriptions[index].inputs = [inputName, inputText, img]

   return (
      <div className='create-whom__group'>
         <div className='create-whom__group-top'>
            <div className='create-whom__subtitle'>Описание {index + 1}</div>
            <button className='create-whom__delete' onClick={() => onDelete(id, index)}>
               <DeleteSvg />
            </button>
         </div>
         <ImgUpload img={img} size={'sm'} onDelete={onDeleteImg.bind(null, id)} imgClass={'img--md'} ratio={'1/1'} recommend={'248x248'} max={'1 МБ'} />
         <Input classNameWrapper='create-whom__form-group' input={inputName} label={'Заголовок'} />
         <Input classNameWrapper='create-price__text' input={inputText} label={'Описание (новый пункт через Enter)'} />
      </div>
   )
}

export default AddCourseDescription
