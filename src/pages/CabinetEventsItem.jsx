import React from 'react'

const CabinetEventsItem = () => {
    return (
        <section className='event-page'>
            <div className='container'>
                <div className='event-page__inner event-page__inner--bread'>
                    <aside className='event-page__left'>
                        <div className='event-page__card'>
                            <div className='event-page__card-img'>
                                <img src='/assets/img/event1.jpg' alt='' />
                            </div>
                            <div className='event-page__card-num'>35 участников</div>
                            <div className='event-page__card-progress green-text'>+4 за сутки</div>
                            <button className='event-page__card-btn event-page__card-btn--edit btn btn-outline'>
                                <svg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                    <path d='M14.1992 19.8979H20.5762' stroke='#1B2C3E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                    <path
                                        fillRule='evenodd'
                                        clipRule='evenodd'
                                        d='M13.3547 4.95561C14.0917 4.01661 15.2827 4.06561 16.2227 4.80261L17.6127 5.89261C18.5527 6.62961 18.8857 7.77261 18.1487 8.71361L9.85972 19.2886C9.58272 19.6426 9.15972 19.8516 8.70972 19.8566L5.51272 19.8976L4.78872 16.7826C4.68672 16.3456 4.78872 15.8856 5.06572 15.5306L13.3547 4.95561Z'
                                        stroke='#1B2C3E'
                                        strokeWidth='1.5'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                    <path d='M11.8027 6.93604L16.5967 10.694' stroke='#1B2C3E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                </svg>
                                <span>Редактировать</span>
                            </button>
                        </div>
                        <button className='event-page__share btn btn-outline'>
                            <svg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    d='M22.2558 11.1378L14.7602 4.70927C14.522 4.50569 14.1647 4.44354 13.8524 4.55428C13.5409 4.66428 13.3385 4.92572 13.3385 5.21429V8.07429C8.54632 8.24286 4.36545 11.0179 3.02623 14.9943C2.44657 16.7186 2.49155 18.1193 2.50818 18.6471L2.51152 18.7857C2.51152 19.1071 2.76218 19.3893 3.12281 19.4743C3.19695 19.4915 3.27104 19.5 3.34436 19.5C3.63252 19.5 3.90735 19.3707 4.05976 19.1514C7.35866 14.3957 11.7294 14.2607 13.3385 14.395V18.0715C13.3385 18.36 13.5409 18.6215 13.8524 18.7315C14.1647 18.8429 14.522 18.7808 14.7602 18.5765L22.2558 12.1479C22.5814 11.8686 22.5814 11.4171 22.2558 11.1378Z'
                                    stroke='#1B2C3E'
                                    strokeWidth='1.5'
                                ></path>
                            </svg>
                            <span>Поделиться</span>
                        </button>
                    </aside>
                    <div className='event-page__right'>
                        <div className='event-page__top'>
                            <div className='breadcrumbs'>
                                <a href='' className='breadcrumbs__item'>
                                    Мои мероприятия
                                </a>
                            </div>
                            <h1 className='event-page__title display-3'>Название мероприятия</h1>
                        </div>

                        <div className='event-page__badges'>
                            <div className='event-page__badge'>
                                <span>Дата</span>
                                <strong>18 декабря 2021</strong>
                            </div>
                            <div className='event-page__badge'>
                                <span>Тип</span>
                                <strong>Онлайн-трансляция</strong>
                            </div>
                            <div className='event-page__badge'>
                                <span>Начало (по МСК)</span>
                                <strong>в 20:00</strong>
                            </div>
                            <div className='event-page__badge'>
                                <span>Длительность</span>
                                <strong>~1,5 часа</strong>
                            </div>
                        </div>
                        <div className='event-page__desc'>
                            <h3 className='event-page__desc-title'>Описание</h3>
                            <p className='event-page__desc-item'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra nullam id tincidunt vestibulum quisque. Urna etiam nunc aliquam dolor, vitae faucibus ut. Proin
                                pharetra, amet elementum etiam faucibus nunc purus placerat ut. Metus aliquam eu consectetur sed commodo imperdiet quam. Lacinia tortor id neque ornare consectetur
                                habitant. Dui quam tortor ut sit. A, eget ut tempus eu.{' '}
                            </p>
                            <p className='event-page__desc-item'>
                                Accumsan tortor augue velit est amet lobortis. Sit pretium, urna, lobortis eget vitae sit aliquet id. Enim vitae aenean est, pharetra quis volutpat etiam lorem turpis.
                                Gravida dictum faucibus duis in odio tempus amet. Malesuada purus elit nunc senectus porta tortor molestie.{' '}
                            </p>
                            <div className='event-page__desc-img'>
                                <img src='/assets/img/event5.jpg' alt='' />
                            </div>
                            <p className='event-page__desc-item'>
                                Accumsan tortor augue velit est amet lobortis. Sit pretium, urna, lobortis eget vitae sit aliquet id. Enim vitae aenean est, pharetra quis volutpat etiam lorem turpis.
                                Gravida dictum faucibus duis in odio tempus amet. Malesuada purus elit nunc senectus porta tortor molestie.{' '}
                            </p>
                            <p className='event-page__desc-item'>
                                Turpis arcu nibh habitant feugiat dictumst adipiscing suspendisse. Quis eu congue vulputate vel in tellus morbi arcu tortor. Magnis imperdiet sed orci vitae nisi,
                                pellentesque. Praesent elementum a, augue sed cursus sem enim.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CabinetEventsItem
