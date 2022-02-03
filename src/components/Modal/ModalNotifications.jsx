import { useDispatch } from 'hooks'
import React from 'react'
import { useSelector } from 'react-redux'

const ModalNotifications = ({ onContinue }) => {
    const { content: { title = '', descr = '' } = {} } = useSelector(({ modals }) => modals)

    return (
        <div className='modal__content'>
            <div className='modal-result__title display-3'>{title}</div>
            {descr && (
                <div className='modal__content'>
                    <div className='modal__desc'>{descr}</div>
                </div>
            )}

            <button className='modal-result__next btn btn-blue' onClick={onContinue}>
                Продолжить
            </button>
        </div>
    )
}

export default ModalNotifications
