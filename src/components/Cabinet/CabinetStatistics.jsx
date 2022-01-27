import React from 'react'

const CabinetStatistics = () => {
    return (
        <div className='course-report sale-report'>
            <a href='' className='sale-report__back'>
                <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M3.54102 10.2284L16.041 10.2284' stroke='#5E62DA' strokeLinecap='round' strokeLinejoin='round' />
                    <path d='M8.58203 15.2488L3.54036 10.2288L8.58203 5.20801' stroke='#5E62DA' strokeLinecap='round' strokeLinejoin='round' />
                </svg>
                <span>Отчет по продажам</span>
            </a>
            <h1 className='sale-report__title mt0'>Подробности продаж курса</h1>
            <div className='sale-report__top card-bg'>
                <div className='sale-report__top-left'>
                    <div className='sale-report__top-img'>
                        <img src='/assets/img/course4.jpg' alt='' />
                    </div>
                    <span className='sale-report__top-name'>Название курса</span>
                </div>
                <div className='sale-report__top-right'>
                    <span className='sale-report__top-title'>День старта курса</span>
                    <span className='sale-report__top-date'>12.10.2021</span>
                </div>
            </div>
            <div className='course-report__nav'>
                <div className='sale-report__title mt0'>Продажи</div>
                <div className='course-report__selects'>
                    <select>
                        <option>Все варианты</option>
                        <option>Все варианты 2</option>
                    </select>
                    <select>
                        <option>За месяц</option>
                        <option>За месяц 2</option>
                    </select>
                </div>
            </div>
            <div className='course-report__items course-report__items--sale2 card-bg'>
                <div className='course-report__item'>
                    <span className='course-report__item-title'>Количество заказов</span>
                    <div className='course-report__item-desc'>56 заказов</div>
                </div>
                <div className='course-report__item'>
                    <span className='course-report__item-title'>Сумма заказов</span>
                    <div className='course-report__item-desc'>272 116 руб.</div>
                </div>
                <div className='course-report__item'>
                    <span className='course-report__item-title'>Средний чек</span>
                    <div className='course-report__item-desc'>9 459 руб.</div>
                </div>
                <div className='course-report__item'>
                    <span className='course-report__item-title'>Количество оплат</span>
                    <div className='course-report__item-desc'>40 оплат</div>
                </div>
                <div className='course-report__item'>
                    <span className='course-report__item-title'>Сумма оплат</span>
                    <div className='course-report__item-desc'>232 000 руб.</div>
                </div>
                <div className='course-report__item'>
                    <span className='course-report__item-title'>Конверсия из заказа в оплату</span>
                    <div className='course-report__item-desc green-text'>75%</div>
                </div>
            </div>

            <div className='sale-report__table-block'>
                <h3 className='sale-report__title'>Варианты участия</h3>
                <div className='course-report__table course-report__table4 card-bg'>
                    <div className='course-report__table-inner'>
                        <div className='course-report__table-head'>
                            <div className='course-report__table-head-col'>Вариант оплаты</div>
                            <div className='course-report__table-head-col'>Количество оплат</div>
                            <div className='course-report__table-head-col'>Средний чек</div>
                            <div className='course-report__table-head-col'>Сумма оплат</div>
                            <div className='course-report__table-head-col'>Конверсия из заказа в оплату</div>
                        </div>
                        <div className='course-report__table-items'>
                            <div className='course-report__table-item'>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-title'>Вариант 1</div>
                                </div>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-title'>10 000 руб.</div>
                                </div>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-title'>5</div>
                                </div>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-title'>50 000 руб.</div>
                                </div>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-title green-text'>75%</div>
                                </div>
                            </div>
                            <div className='course-report__table-item'>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-title'>Вариант 1</div>
                                </div>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-title'>10 000 руб.</div>
                                </div>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-title'>5</div>
                                </div>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-title'>50 000 руб.</div>
                                </div>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-title green-text'>75%</div>
                                </div>
                            </div>
                            <div className='course-report__table-item'>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-title'>Вариант 1</div>
                                </div>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-title'>10 000 руб.</div>
                                </div>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-title'>5</div>
                                </div>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-title'>50 000 руб.</div>
                                </div>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-title green-text'>75%</div>
                                </div>
                            </div>
                            <div className='course-report__table-item'>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-title'>Вариант 1</div>
                                </div>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-title'>10 000 руб.</div>
                                </div>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-title'>5</div>
                                </div>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-title'>50 000 руб.</div>
                                </div>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-title green-text'>75%</div>
                                </div>
                            </div>
                            <div className='course-report__table-item'>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-title'>Вариант 1</div>
                                </div>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-title'>10 000 руб.</div>
                                </div>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-title'>5</div>
                                </div>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-title'>50 000 руб.</div>
                                </div>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-title yellow-text'>75%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='sale-report__table-block'>
                <h3 className='sale-report__title'>По подписке</h3>
                <div className='course-report__table course-report__table5 card-bg'>
                    <div className='course-report__table-inner'>
                        <div className='course-report__table-head'>
                            <div className='course-report__table-head-col'>Вариант оплаты</div>
                            <div className='course-report__table-head-col'>Количество заказов курса</div>
                            <div className='course-report__table-head-col'>Сумма оплат</div>
                        </div>
                        <div className='course-report__table-items'>
                            <div className='course-report__table-item'>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-title'>Базовая</div>
                                </div>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-title'>8</div>
                                </div>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-title'>26 400 руб.</div>
                                </div>
                            </div>
                            <div className='course-report__table-item'>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-title'>Премиум</div>
                                </div>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-title'>4</div>
                                </div>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-title'>20 000 руб.</div>
                                </div>
                            </div>
                            <div className='course-report__table-item'>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-title'>ВИП</div>
                                </div>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-title'>1</div>
                                </div>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-title'>30 000 руб.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CabinetStatistics
