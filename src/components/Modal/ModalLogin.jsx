import { useMemo } from 'react'
import { useDispatch, useNavigate, useRequest } from 'hooks'
import { useSelector } from 'react-redux'
import { authStepTypes } from 'store/reducers/auth/types'
import { authSelectors } from 'store/selectors'
import { ReactComponent as ArrowLeftSvg } from 'svg/arrow-left.svg'
import { modalsContentTypes } from 'store/reducers/modals/types'
import ModalLoginBottom from './ModalLoginBottom'
import ModalLoginForm from './ModalLoginForm'

const ModalLogin = ({ isModal = true }) => {
   const { toCabinet } = useNavigate()
   const { setStep, checkEmail, setBack, login, register, restore } = useDispatch()
   const step = useSelector(authSelectors.getStep)

   console.log(step)

   const checkEmailRequest = useRequest({
      request: checkEmail,
      success: ({ response, prevData, data }) => setStep(data.exists === 1 ? authStepTypes.LOGIN : authStepTypes.REGISTER),
   })
   const loginRequest = useRequest({
      request: login,
      success: () => toCabinet(),
      error: () => isModal && setBack(modalsContentTypes.LOGIN),
   })
   const registerRequest = useRequest({
      request: register,
      success: ({ response, prevData, data }) => setStep(modalsContentTypes.LOGIN),
      error: () => isModal && setBack(modalsContentTypes.LOGIN),
   })
   const restoreRequest = useRequest({
      request: restore,
      success: ({ response, prevData, data }) => setStep(modalsContentTypes.LOGIN),
      error: () => isModal && setBack(modalsContentTypes.LOGIN),
   })

   const steps = useMemo(
      () => ({
         [authStepTypes.CHECK_EMAIL]: {
            title: 'Вход или регистрация',
            btn: 'Продолжить',
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
            <div className='modal__title' onClick={steps[step]?.onPrev ? steps[step].onPrev : () => {}}>
               {steps[step]?.onPrev && <ArrowLeftSvg />}
               <span>{steps[step].title}</span>
            </div>
         </div>
         <div className='modal__content'>
            <ModalLoginForm steps={steps} />
            <ModalLoginBottom steps={steps} />
         </div>
      </>
   )
}

export default ModalLogin
