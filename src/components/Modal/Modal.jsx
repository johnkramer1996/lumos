import { useDispatch } from 'hooks'
import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { modalsContentTypes } from 'store/reducers/modals/types'
import ModalLogin from './ModalLogin'
import ModalNotifications from './ModalNotifications'

const Modal = () => {
    const { setIsShow, setType, setBack } = useDispatch()
    const { isShow, type, back } = useSelector(({ modals }) => modals)

    const onContinue = useCallback(() => {
        if (!back) return setIsShow(false)
        setType(back)
        setBack('')
    }, [back])

    const ActiveModal = {
        [modalsContentTypes.NOTIFICATIONS]: ModalNotifications,
        [modalsContentTypes.LOGIN]: ModalLogin,
    }

    return (
        <div className={`modal${isShow ? ' modal--show' : ''}`} style={{ textAlign: 'center' }}>
            <div className='modal__bg' onClick={onContinue}></div>
            <div className='modal-dialog'>{React.createElement(ActiveModal[type !== '' ? type : modalsContentTypes.NOTIFICATIONS], { onContinue }, null)}</div>
        </div>
    )
}

export default Modal

// setContent({ title: 'Успех' })
// setIsShow(true)
