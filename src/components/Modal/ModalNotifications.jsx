import React from 'react'
import { useSelector } from 'react-redux'

const ModalNotifications = ({ onContinue }) => {
   const { content: { title = '', descr = '' } = {} } = useSelector(({ modals }) => modals)

   return (
      <>
         <div className='modal-result__title display-3'>{title}</div>
         {descr && <div className='modal__desc'>{descr}</div>}

         <button className='modal-result__next btn btn-blue' onClick={onContinue}>
            Продолжить
         </button>
      </>
   )
}

export default ModalNotifications
