import { Button } from 'components/ui'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { authStepTypes } from 'store/reducers/auth/types'

const ModalLoginForm = ({ steps = {} }) => {
    const step = useSelector(({ auth }) => auth.step)

    const [email, setEmail] = useState('vitaliczinoviev@gmail.com')
    const [password, setPassword] = useState('EtmAraHk')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    const onSubmitForm = (e) => {
        e.preventDefault()
        steps[step].onNext({ email, password, name, phone })
    }

    return (
        <form className='modal__form' onSubmit={onSubmitForm}>
            <div className='modal__form-group form-group'>
                <label>E-mail</label>
                <input type='text' placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            {step !== authStepTypes.CHECK_EMAIL && step !== authStepTypes.RESTORE && (
                <div className='modal__form-group form-group'>
                    <label>Пароль</label>
                    <input type='password' placeholder='Пароль' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
            )}
            {step === authStepTypes.REGISTER && (
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
            <Button className='modal__form-btn'>{steps[step]?.btn}</Button>
        </form>
    )
}

export default ModalLoginForm
