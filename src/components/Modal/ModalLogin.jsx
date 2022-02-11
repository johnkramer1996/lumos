import { Component, useMemo, useState } from 'react'
import { useDispatch, useNavigate, useRequest } from 'hooks'
import { useSelector } from 'react-redux'
import ModalLoginBottom from './ModalLoginBottom'
import ModalLoginForm from './ModalLoginForm'
import { authStepTypes } from 'store/reducers/auth/types'
import { ReactComponent as CloseSvg } from 'svg/close.svg'

const ModalLogin = ({ onContinue }) => {
   const { toCabinet } = useNavigate()
   const { setStep, checkEmail, login, register, restore } = useDispatch()
   const step = useSelector(({ auth }) => auth.step)

   const checkEmailRequest = useRequest({ request: checkEmail, success: ({ response, prevData, data }) => (data.exists === 1 ? setStep('LOGIN') : setStep('REGISTER')) })
   const loginRequest = useRequest({
      request: login,
      success: () => toCabinet(),
   })
   const registerRequest = useRequest({ request: register, success: ({ response, prevData, data }) => setStep('LOGIN') })
   const restoreRequest = useRequest({ request: restore, success: ({ response, prevData, data }) => setStep('LOGIN') })

   const steps = useMemo(
      () => ({
         [authStepTypes.CHECK_EMAIL]: {
            title: 'Вход или регистрация',
            btn: 'Продолжить',
            onPrev: () => {},
            onNext: checkEmailRequest.call,
         },
         [authStepTypes.LOGIN]: {
            title: 'Вход',
            btn: 'Войти',
            onPrev: () => setStep(authStepTypes.CHECK_EMAIL),
            onNext: loginRequest.call,
         },
         [authStepTypes.REGISTER]: {
            title: 'Регистрация',
            btn: 'Создать аккаунт',
            onPrev: () => setStep(authStepTypes.CHECK_EMAIL),
            onNext: registerRequest.call,
         },
         [authStepTypes.RESTORE]: {
            title: 'Забыли пароль',
            btn: 'Отправить',
            onPrev: () => setStep(authStepTypes.LOGIN),
            onNext: restoreRequest.call,
         },
      }),
      [],
   )

   return (
      <>
         <div className='modal__top'>
            <div className='modal__title'>
               {step !== 'CHECK_EMAIL' && (
                  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' onClick={steps[step].onPrev}>
                     <path d='M15.5 19L8.5 12L15.5 5' stroke='#1B2C3E' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                  </svg>
               )}
               <span>{steps[step].title}</span>
            </div>
            {onContinue && (
               <button className='modal__close' onClick={onContinue}>
                  <CloseSvg />
               </button>
            )}
         </div>
         <div className='modal__content'>
            <ModalLoginForm steps={steps} />
            <ModalLoginBottom steps={steps} />
         </div>
      </>
   )
}

export default ModalLogin
