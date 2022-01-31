import { useDispatch } from 'hooks'
import { useSelector } from 'react-redux'

const Modal = () => {
    const { isShow, content: { title = '', descr = '' } = {} } = useSelector(({ modals }) => modals)
    const { setIsShow } = useDispatch()

    return (
        <div className={`modal${isShow ? ' modal--show' : ''}`}>
            <div className='modal__bg' onClick={() => setIsShow(false)}></div>
            <div className='modal-dialog'>
                <div className='modal__top'>
                    <div className='modal__title'>
                        <span>{title}</span>
                    </div>
                    <button className='modal__close' onClick={() => setIsShow(false)}>
                        <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M13.3327 2.66602L2.66602 13.3327' stroke='#1B2C3E' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                            <path d='M13.3327 13.3327L2.66602 2.66602' stroke='#1B2C3E' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                        </svg>
                    </button>
                </div>
                {descr && (
                    <div className='modal__content'>
                        <div className='modal__desc'>
                            <span>{descr}</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Modal

// setContent({ title: 'Успех' })
// setIsShow(true)
