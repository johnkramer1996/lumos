import React from 'react'
import { ReactComponent as ShareSvg } from 'svg/share.svg'

const EventsItem = () => {
    const { name } = {
        id: 1,
        day: '18',
        month: 'декабря',
        year: '2021',
        time: 'в 20:00',
        img: '/assets/img/event1.jpg',
        name: 'Длинное название мероприятия минимум в две строки текста',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo dictum hendrerit. Suspendisse diam libero, blandit sit amet lacinia at, scelerisque sed est. Ut eleifend nulla tortor, ut porta quam aliquet vel. Ut eleifend nulla tortor, ut porta quam aliquet Integer ero. Aliquam commodo dictum hendrerit. Suspendisse diam libero,	blandit sit amet lacinia at, scelerisque sed est. Ut eleifend nulla tortor, ut porta.',
    }
    return (
        <section className='event-page'>
            <div className='container'>
                <div className='event-page__inner'>
                    <aside className='event-page__left'>
                        <div className='event-page__card'>
                            <div className='event-page__card-img'>
                                <img src='/assets/img/event1.jpg' alt='' />
                            </div>
                            <button className='event-page__card-btn btn btn-blue'>Записаться</button>
                            <div className='event-page__card-hint'>Запись бесплатна</div>
                        </div>
                        <button className='event-page__share btn btn-outline'>
                            <ShareSvg />
                            <span>Поделиться</span>
                        </button>
                    </aside>
                    <div className='event-page__right'>
                        <div className='event-page__top'>
                            <h1 className='event-page__title display-3'>{name}</h1>
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

export default EventsItem
