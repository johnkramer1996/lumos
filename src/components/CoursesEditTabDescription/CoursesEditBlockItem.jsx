import { useInputFileNew } from 'hooks'
import React from 'react'
import { getURL } from 'utils'
import { ReactComponent as DeleteSvg } from 'svg/delete.svg'
import { ImgUploadNew, Input } from 'components/ui'
import { useForm } from 'react-hook-form'

const CoursesEditBlockItem = ({ id, index, image, name, text, onDelete, onDeleteImg, state }) => {
   const form = useForm({
      mode: 'onBlur',
      defaultValues: {
         name: name || 'name test',
         text: text || 'text test',
      },
   })
   const inputFileObj = useInputFileNew({ form })
   inputFileObj.setValueImg(getURL.img(image, false) ?? '')

   state[index].form = form

   return (
      <div className='create-whom__group'>
         <div className='create-whom__group-top'>
            <div className='create-whom__subtitle'>Описание {index + 1}</div>
            <button className='create-whom__delete' onClick={() => onDelete(id, index)}>
               <DeleteSvg />
            </button>
         </div>
         <ImgUploadNew inputFileObj={inputFileObj} size={'sm'} onDelete={onDeleteImg.bind(null, id)} imgClass={'img--md'} ratio={'1/1'} recommend={'248x248'} max={'1 МБ'} />
         <Input form={form} name='name' label='Заголовок' classNameWrapper='create-whom__form-group' />
         <Input form={form} name='text' label='Описание (новый пункт через Enter)' classNameWrapper='create-price__text' textarea />
      </div>
   )
}

export default CoursesEditBlockItem
