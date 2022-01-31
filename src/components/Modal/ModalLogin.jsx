import { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch, useRequest } from 'hooks'
import ModalLoginBottom from './ModalLoginBottom'
import ModalLoginForm from './ModalLoginForm'

const ModalLogin = () => {
    const { checkEmail, login, register, restore, setShowModal, setUser, setToken, setIsAuth } = useDispatch()
    const showModal = useSelector((state) => state.auth?.showModal)
    const [step, setStep] = useState('CHECK_EMAIL')

    const restoreRequest = useRequest({ request: restore, success: ({ dispatch, response, data }) => setStep('LOGIN') })

    const steps = useMemo(
        () => ({
            CHECK_EMAIL: {
                title: 'Вход или регистрация',
                btn: 'Продолжить',
                onPrev: () => {},
                onNext: (data) =>
                    checkEmail({
                        data,
                        success: ({ dispatch, response, data }) => (data.exists === 1 ? setStep('LOGIN') : setStep('REGISTER')),
                    }),
            },
            LOGIN: {
                title: 'Вход',
                btn: 'Войти',
                onPrev: () => setStep('CHECK_EMAIL'),
                onNext: ({ email, password }) =>
                    login({
                        data: { email, password },
                    }),
            },
            REGISTER: {
                title: 'Регистрация',
                btn: 'Создать аккаунт',
                onPrev: () => setStep('CHECK_EMAIL'),
                onNext: (data) =>
                    register({
                        data: data,
                    }),
            },
            RESTORE: {
                title: 'Забыли пароль',
                btn: 'Отправить',
                onPrev: () => setStep('LOGIN'),
                onNext: (data) => {
                    console.log(data)
                    restoreRequest.call(data)
                },
            },
        }),
        [],
    )

    return (
        <div className={`modal${showModal ? ' modal--show' : ''}`}>
            <div className='modal__bg' onClick={() => setShowModal(false)}></div>
            <div className='modal-dialog'>
                <div className='modal__top'>
                    <div className='modal__title'>
                        {step !== 'CHECK_EMAIL' && (
                            <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' onClick={steps[step].onPrev}>
                                <path d='M15.5 19L8.5 12L15.5 5' stroke='#1B2C3E' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                            </svg>
                        )}
                        <span>{steps[step].title}</span>
                    </div>
                    <button className='modal__close' onClick={() => setShowModal(false)}>
                        <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M13.3327 2.66602L2.66602 13.3327' stroke='#1B2C3E' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                            <path d='M13.3327 13.3327L2.66602 2.66602' stroke='#1B2C3E' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                        </svg>
                    </button>
                </div>
                <div className='modal__content'>
                    <ModalLoginForm steps={steps} step={step} setStep={setStep} />
                    <ModalLoginBottom steps={steps} step={step} setStep={setStep} />
                </div>
            </div>
        </div>
    )
}

export default ModalLogin
