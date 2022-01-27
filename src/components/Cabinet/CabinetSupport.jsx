import React from 'react'

const CabinetSupport = () => {
    return (
        <div className='support'>
            <div className='cabinet-page__top'>
                <h1 className='cabinet-page__title display-3'>Чат со службой поддержки</h1>
            </div>
            <div className='support-block card-bg'>
                <div className='support__items'>
                    <div className='support__item'>
                        <div className='support__item-img'>
                            <img src='/assets/img/avatar2.jpg' alt='' />
                        </div>
                        <div className='support__item-content'>
                            <div className='support__item-top'>
                                <div className='support__item-name'>Олег Олегов</div>
                            </div>
                            <div className='support__item-text'>
                                <p>
                                    Accumsan tortor augue velit est amet lobortis. Sit pretium, urna, lobortis eget vitae sit aliquet id. Enim vitae aenean est, pharetra quis volutpat etiam lorem
                                    turpis?
                                </p>
                                <p>
                                    Accumsan tortor augue velit est amet lobortis. Sit pretium, urna, lobortis eget vitae sit aliquet id. Enim vitae aenean est, pharetra quis volutpat etiam lorem
                                    turpis?
                                </p>
                            </div>
                            <div className='support__item-bottom'>
                                <div className='support__item-date'>10 сен 2020 в 12:10</div>
                            </div>
                        </div>
                    </div>
                    <div className='support__item'>
                        <div className='support__item-img'>
                            <img src='/assets/img/avatar3.jpg' alt='' />
                        </div>
                        <div className='support__item-content'>
                            <div className='support__item-top'>
                                <div className='support__item-name'>Александр Александров</div>
                                <div className='support__item-badge'>Люмос</div>
                            </div>
                            <div className='support__item-text'>
                                <p>
                                    Accumsan tortor augue velit est amet lobortis. Sit pretium, urna, lobortis eget vitae sit aliquet id. Enim vitae aenean est, pharetra quis volutpat etiam lorem
                                    turpis. Gravida dictum faucibus duis in odio tempus amet. Malesuada purus elit nunc senectus porta tortor molestie.{' '}
                                </p>
                                <p>
                                    Accumsan tortor augue velit est amet lobortis. Sit pretium, urna, lobortis eget vitae sit aliquet id. Enim vitae aenean est, pharetra quis volutpat etiam lorem
                                    turpis. Gravida dictum faucibus duis in odio tempus amet. Malesuada purus elit nunc senectus porta tortor molestie.{' '}
                                </p>
                            </div>
                            <div className='support__item-bottom'>
                                <div className='support__item-date'>10 сен 2020 в 12:10</div>
                                <button className='support__item-btn'>Ответить</button>
                            </div>
                        </div>
                    </div>
                    <div className='support__new'>
                        <div className='support__item-img'>
                            <img src='/assets/img/avatar2.jpg' alt='' />
                        </div>
                        <div className='support__new-text form-group'>
                            <textarea placeholder='Написать ответ'></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <button className='support__btn btn btn-blue'>
                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M5 12L9.66798 17L19 7' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                </svg>
                <span>Мой вопрос решен</span>
            </button>
        </div>
    )
}

export default CabinetSupport
