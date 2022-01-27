import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RouteNames } from 'routes'
import { useDispatch, useSelector } from 'hooks'

const LoginModal = () => {
    const [email, setEmail] = useState('vitaliczinoviev@gmail.com')
    const [password, setPassword] = useState('dtPUtGMy')
    const [name, setName] = useState('Имя')
    const [phone, setPhone] = useState('12345')

    const navigate = useNavigate()
    const { checkEmail, login, register, setShowModal, setError, setStep } = useDispatch()
    const { showModal, step, error } = useSelector()

    const changeStep = (step) => {
        setError('')
        setStep(step)
    }

    const steps = {
        CHECK_EMAIL: {
            title: 'Вход или регистрация',
            btn: 'Продолжить',
            onPrev: () => {},
            onNext: () => checkEmail({ email }),
        },
        LOGIN: {
            title: 'Вход',
            btn: 'Войти',
            onPrev: () => changeStep('CHECK_EMAIL'),
            onNext: () => login({ email, password, cb: () => navigate(RouteNames.CABINET) }),
        },
        REGISTER: {
            title: 'Регистрация',
            btn: 'Создать аккаунт',
            onPrev: () => changeStep('CHECK_EMAIL'),
            onNext: () => register({ name, phone, email, password }),
        },
    }

    const onSubmit = (e) => {
        e.preventDefault()

        steps[step].onNext()
    }

    return (
        <div className={`modal ${showModal && 'modal--show'}`} id='modal'>
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
                    <form className='modal__form' onSubmit={onSubmit}>
                        <div className='input-error-text'>{error}</div>
                        <div className='modal__form-group form-group'>
                            <label>E-mail</label>
                            <input className='input-error1' type='text' placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
                            {/* <div className='input-error-text'>Error message here</div> */}
                        </div>
                        {step !== 'CHECK_EMAIL' && (
                            <div className='modal__form-group form-group'>
                                <label>Пароль</label>
                                <input type='password' placeholder='Пароль' value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        )}
                        {step === 'REGISTER' && (
                            <>
                                <div className='modal__form-group form-group'>
                                    <label>Имя Фамилия</label>
                                    <input type='text' placeholder='Имя Фамилия' value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className='modal__form-group form-group'>
                                    <label>Телефон</label>
                                    <input type='tel' placeholder='Телефон' value={phone} onChange={(e) => setPhone(e.target.value)} />
                                </div>
                            </>
                        )}
                        <button className='modal__form-btn btn btn-blue'>{steps[step].btn}</button>
                    </form>

                    {step === 'CHECK_EMAIL' && (
                        <>
                            <div className='modal__or'>Или</div>
                            <div className='modal__socials'>
                                <a href='' className='modal__socials-item'>
                                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            d='M5.625 11.9997C5.625 10.8106 5.95261 9.69672 6.52177 8.74295V4.69727H2.47608C0.870375 6.78264 0 9.32416 0 11.9997C0 14.6752 0.870375 17.2167 2.47608 19.3021H6.52177V15.2564C5.95261 14.3027 5.625 13.1888 5.625 11.9997Z'
                                            fill='#FBBD01'
                                        />
                                        <path
                                            d='M12 18.3749L9.1875 21.1874L12 23.9999C14.6756 23.9999 17.217 23.1295 19.3024 21.5238V17.4824H15.261C14.2989 18.0536 13.1804 18.3749 12 18.3749Z'
                                            fill='#30A952'
                                        />
                                        <path
                                            d='M6.52225 15.2559L2.47656 19.3015C2.79447 19.7144 3.14064 20.1098 3.51522 20.4844C5.78172 22.7509 8.79517 23.9991 12.0005 23.9991V18.3741C9.67436 18.3741 7.63562 17.1216 6.52225 15.2559Z'
                                            fill='#30A952'
                                        />
                                        <path
                                            d='M24 12.0004C24 11.2704 23.9339 10.5389 23.8035 9.82652L23.698 9.25H12V14.875H17.6931C17.1402 15.9747 16.2902 16.872 15.261 17.483L19.3024 21.5244C19.7153 21.2065 20.1106 20.8603 20.4853 20.4858C22.7518 18.2192 24 15.2058 24 12.0004Z'
                                            fill='#4086F4'
                                        />
                                        <path
                                            d='M16.5078 7.49217L17.005 7.98933L20.9825 4.01189L20.4853 3.51473C18.2188 1.24823 15.2054 0 12 0L9.1875 2.8125L12 5.625C13.7028 5.625 15.3037 6.28809 16.5078 7.49217Z'
                                            fill='#EB4132'
                                        />
                                        <path
                                            d='M12.0005 5.625V0C8.79522 0 5.78177 1.24823 3.51522 3.51469C3.14064 3.88927 2.79447 4.28466 2.47656 4.69758L6.52225 8.74327C7.63567 6.8775 9.67441 5.625 12.0005 5.625Z'
                                            fill='#EB4132'
                                        />
                                    </svg>
                                </a>
                                <a href='' className='modal__socials-item'>
                                    <svg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            d='M8.68475 24C5.11283 23.9794 2.1582 16.6879 2.1582 12.9745C2.1582 6.90873 6.70859 5.58077 8.46228 5.58077C9.25259 5.58077 10.0965 5.89112 10.8408 6.16577C11.3613 6.35734 11.8996 6.55511 12.199 6.55511C12.3782 6.55511 12.8005 6.38688 13.1734 6.23927C13.9685 5.92272 14.9579 5.5293 16.1101 5.5293C16.1122 5.5293 16.115 5.5293 16.117 5.5293C16.9773 5.5293 19.5859 5.71811 21.1542 8.0733L21.5216 8.62534L20.9929 9.0243C20.2376 9.5942 18.8594 10.6338 18.8594 12.6931C18.8594 15.132 20.4202 16.07 21.17 16.5211C21.501 16.7202 21.8436 16.9255 21.8436 17.3746C21.8436 17.6678 19.5035 23.9636 16.1053 23.9636C15.2738 23.9636 14.686 23.7137 14.1676 23.4933C13.643 23.2701 13.1905 23.0779 12.4427 23.0779C12.0637 23.0779 11.5844 23.2571 11.077 23.4473C10.3835 23.7061 9.59867 24 8.70809 24H8.68475Z'
                                            fill='black'
                                        />
                                        <path d='M16.4698 0C16.5583 3.19106 14.2762 5.40488 11.9967 5.26603C11.6211 2.71945 14.2759 0 16.4698 0Z' fill='black' />
                                    </svg>
                                </a>
                                <a href='' className='modal__socials-item'>
                                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            d='M23.7861 17.3664C23.7216 17.2584 23.3225 16.3913 21.4024 14.6092C19.3923 12.743 19.6623 13.0461 22.0835 9.81932C23.5581 7.85417 24.1476 6.65408 23.9631 6.14104C23.7876 5.65201 22.703 5.78102 22.703 5.78102L19.0967 5.80202C19.0967 5.80202 18.8297 5.76602 18.6302 5.88453C18.4367 6.00153 18.3122 6.27155 18.3122 6.27155C18.3122 6.27155 17.7406 7.79267 16.9786 9.08576C15.372 11.8145 14.7284 11.9585 14.4659 11.789C13.8553 11.3944 14.0084 10.2018 14.0084 9.35578C14.0084 6.71109 14.4089 5.6085 13.2268 5.32348C12.8338 5.22898 12.5458 5.16597 11.5422 5.15547C10.2551 5.14197 9.16451 5.15997 8.54796 5.46149C8.13693 5.66251 7.82041 6.11104 8.01392 6.13654C8.25244 6.16805 8.79248 6.28205 9.079 6.67208C9.44953 7.17462 9.43602 8.3057 9.43602 8.3057C9.43602 8.3057 9.64904 11.4184 8.93949 11.8055C8.45195 12.071 7.7844 11.5294 6.3518 9.05276C5.61825 7.78517 5.06321 6.38256 5.06321 6.38256C5.06321 6.38256 4.9567 6.12154 4.76618 5.98203C4.53517 5.81252 4.21114 5.75852 4.21114 5.75852L0.781892 5.77952C0.781892 5.77952 0.267354 5.79452 0.0783406 6.01804C-0.0896717 6.21755 0.0648396 6.62858 0.0648396 6.62858C0.0648396 6.62858 2.75004 12.9095 5.78926 16.0763C8.57796 18.979 11.7432 18.7885 11.7432 18.7885H13.1773C13.1773 18.7885 13.6108 18.7405 13.8313 18.502C14.0354 18.2829 14.0279 17.8719 14.0279 17.8719C14.0279 17.8719 13.9994 15.9473 14.8934 15.6637C15.774 15.3847 16.9051 17.5239 18.1037 18.3474C19.0097 18.97 19.6983 18.8335 19.6983 18.8335L22.904 18.7885C22.904 18.7885 24.5811 18.685 23.7861 17.3664Z'
                                            fill='#0077FF'
                                        />
                                    </svg>
                                </a>
                                <a href='' className='modal__socials-item'>
                                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            d='M15.1743 5.32056H17V2.14082C16.685 2.09749 15.6018 2 14.3402 2C11.7079 2 9.90476 3.6557 9.90476 6.69878V9.49938H7V13.0541H9.90476V21.9983H13.4661V13.0549H16.2534L16.6959 9.50021H13.4653V7.05125C13.4661 6.02383 13.7428 5.32056 15.1743 5.32056Z'
                                            fill='#1877F2'
                                        />
                                    </svg>
                                </a>
                            </div>
                        </>
                    )}
                    {step === 'LOGIN' && (
                        <>
                            <button className='modal__forgot btn'>Забыли пароль?</button>
                        </>
                    )}
                    {step === 'REGISTER' && (
                        <>
                            <div className='modal__hint'>
                                Нажимая на «Создать аккаунт», вы соглашаетесь с <a href=''>Политикой обработки данных</a>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default LoginModal
