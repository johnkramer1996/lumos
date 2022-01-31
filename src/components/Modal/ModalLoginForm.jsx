import React, { useState } from 'react'

const ModalLoginForm = ({ step, steps = {} }) => {
    const [email, setEmail] = useState('vitaliczinoviev@gmail.com')
    const [password, setPassword] = useState('dtPUtGMy')
    const [name, setName] = useState('Имя')
    const [phone, setPhone] = useState('12345')

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
            {step !== 'CHECK_EMAIL' && step !== 'RESTORE' && (
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
            <button className='modal__form-btn btn btn-blue'>{steps[step]?.btn}</button>
        </form>
    )
}

export default ModalLoginForm
