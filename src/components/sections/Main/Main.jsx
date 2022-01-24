import React from 'react'
import { Button } from 'components/ui/'

const Main = ({ title, descr, img }) => {
    return (
        <section className='main'>
            <div className='container'>
                <div className='main__inner'>
                    <div className='main-circle'></div>
                    <div className='main-circle-mask'></div>
                    <div className='main__left'>
                        <h1 className='main__title display-1'>{title}</h1>
                        <div className='main__desc'>{descr}</div>
                        <div className='main__buttons'>
                            <Button text={'Найти курс для себя'} className='main__btn' onClick={() => {}} />
                            <Button text={'Какой курс выбрать?'} className='main__btn' onClick={() => {}} isOutline />
                        </div>
                    </div>
                    <div className='main__img'>
                        <img src={img} alt='' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main
