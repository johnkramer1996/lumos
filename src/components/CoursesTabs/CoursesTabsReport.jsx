import React from 'react'

const CoursesTabsReport = () => {
    return (
        <div className='course-report'>
            <h3 className='course-report__title display-3'>Отчет по курсу</h3>
            <div className='course-report__top card-bg'>
                <div className='course-report__top-form-group form-group'>
                    <label>Курс</label>
                    <select>
                        <option defaultValue hidden>
                            Курс
                        </option>
                        <option>Курс 1</option>
                        <option>Курс 2</option>
                    </select>
                </div>
                <div className='course-report__items'>
                    <div className='course-report__item'>
                        <span className='course-report__item-title'>Начало курса</span>
                        <div className='course-report__item-desc'>12.10.2021</div>
                    </div>
                    <div className='course-report__item'>
                        <span className='course-report__item-title'>Дней со старта</span>
                        <div className='course-report__item-desc'>50 дней</div>
                    </div>
                    <div className='course-report__item'>
                        <span className='course-report__item-title'>Всего уроков</span>
                        <div className='course-report__item-desc'>24 урока</div>
                    </div>
                    <div className='course-report__item'>
                        <span className='course-report__item-title'>Всего учеников</span>
                        <div className='course-report__item-desc'>35 учеников</div>
                    </div>
                    <div className='course-report__item'>
                        <span className='course-report__item-title'>Процент завершивших</span>
                        <div className='course-report__item-desc yellow-text'>63%</div>
                    </div>
                </div>
            </div>
            <div className='course-report__nav'>
                <div className='course-report__tabs'>
                    <div className='course-report__tab course-report__tab--active'>Ученики</div>
                    <div className='course-report__tab'>Динамика курса</div>
                </div>
                <div className='course-report__selects'>
                    <select>
                        <option>Все статусы</option>
                        <option>Все статусы 2</option>
                    </select>
                    <select>
                        <option>За месяц</option>
                        <option>За месяц 2</option>
                    </select>
                </div>
            </div>
            <div className='course-report__content  course-report__content--active'>
                <div className='course-report__items course-report__items--num card-bg'>
                    <div className='course-report__item'>
                        <span className='course-report__item-title'>Количество учеников</span>
                        <div className='course-report__item-desc'>11 учеников</div>
                    </div>
                    <div className='course-report__item'>
                        <span className='course-report__item-title'>Процент завершивших</span>
                        <div className='course-report__item-desc green-text'>75%</div>
                    </div>
                </div>

                <div className='course-report__table card-bg'>
                    <div className='course-report__table-inner'>
                        <div className='course-report__table-head'>
                            <div className='course-report__table-head-col'>Ученик</div>
                            <div className='course-report__table-head-col'>Статус</div>
                        </div>
                        <div className='course-report__table-items'>
                            <div className='course-report__table-item'>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-user'>
                                        <div className='course-report__table-avatar'>
                                            <img src='/assets/img/avatar2.jpg' alt='' />
                                        </div>
                                        <div className='course-report__table-info'>
                                            <div className='course-report__table-name'>Мария Мариева</div>
                                            <div className='course-report__table-lesson'>
                                                <span>01</span>
                                                <span>Название урока</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-status yellow-text'>Не приступил</div>
                                </div>
                            </div>
                            <div className='course-report__table-item'>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-user'>
                                        <div className='course-report__table-avatar'>
                                            <img src='/assets/img/avatar5.jpg' alt='' />
                                        </div>
                                        <div className='course-report__table-info'>
                                            <div className='course-report__table-name'>Мария Мариева</div>
                                            <div className='course-report__table-lesson'>
                                                <span>01</span>
                                                <span>Название урока</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-status green-text'>Пройден</div>
                                </div>
                            </div>
                            <div className='course-report__table-item'>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-user'>
                                        <div className='course-report__table-avatar'>
                                            <img src='/assets/img/avatar3.jpg' alt='' />
                                        </div>
                                        <div className='course-report__table-info'>
                                            <div className='course-report__table-name'>Мария Мариева</div>
                                            <div className='course-report__table-lesson'>
                                                <span>02</span>
                                                <span>Название урока</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-status'>Завершен 20.12.2021</div>
                                </div>
                            </div>
                            <div className='course-report__table-item'>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-user'>
                                        <div className='course-report__table-avatar'>
                                            <img src='/assets/img/avatar2.jpg' alt='' />
                                        </div>
                                        <div className='course-report__table-info'>
                                            <div className='course-report__table-name'>Мария Мариева</div>
                                            <div className='course-report__table-lesson'>
                                                <span>01</span>
                                                <span>Название урока</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-status yellow-text'>Не приступил</div>
                                </div>
                            </div>
                            <div className='course-report__table-item'>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-user'>
                                        <div className='course-report__table-avatar'>
                                            <img src='/assets/img/avatar5.jpg' alt='' />
                                        </div>
                                        <div className='course-report__table-info'>
                                            <div className='course-report__table-name'>Мария Мариева</div>
                                            <div className='course-report__table-lesson'>
                                                <span>01</span>
                                                <span>Название урока</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-status green-text'>Пройден</div>
                                </div>
                            </div>
                            <div className='course-report__table-item'>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-user'>
                                        <div className='course-report__table-avatar'>
                                            <img src='/assets/img/avatar3.jpg' alt='' />
                                        </div>
                                        <div className='course-report__table-info'>
                                            <div className='course-report__table-name'>Мария Мариева</div>
                                            <div className='course-report__table-lesson'>
                                                <span>02</span>
                                                <span>Название урока</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-status'>Завершен 20.12.2021</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='course-report__content'>
                <div className='course-report__items course-report__items--num card-bg'>
                    <div className='course-report__item'>
                        <span className='course-report__item-title'>Количество учеников</span>
                        <div className='course-report__item-desc'>11 учеников</div>
                    </div>
                    <div className='course-report__item'>
                        <span className='course-report__item-title'>Среднее прохождение урока</span>
                        <div className='course-report__item-desc'>1.5 дня</div>
                    </div>
                </div>

                <div className='course-report__table course-report__table2 card-bg'>
                    <div className='course-report__table-inner'>
                        <div className='course-report__table-head'>
                            <div className='course-report__table-head-col'>№</div>
                            <div className='course-report__table-head-col'>Название</div>
                            <div className='course-report__table-head-col'>Прохождение</div>
                        </div>
                        <div className='course-report__table-items'>
                            <div className='course-report__table-item'>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-num'>01</div>
                                </div>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-title'>Название урока</div>
                                </div>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-duration'>1 день</div>
                                </div>
                            </div>
                            <div className='course-report__table-item'>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-num'>01</div>
                                </div>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-title'>Название урока</div>
                                </div>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-duration'>1 день</div>
                                </div>
                            </div>
                            <div className='course-report__table-item'>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-num'>01</div>
                                </div>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-title'>Название урока</div>
                                </div>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-duration'>1 день</div>
                                </div>
                            </div>
                            <div className='course-report__table-item'>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-num'>01</div>
                                </div>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-title'>Название урока</div>
                                </div>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-duration'>1 день</div>
                                </div>
                            </div>
                            <div className='course-report__table-item'>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-num'>01</div>
                                </div>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-title'>Название урока</div>
                                </div>
                                <div className='course-report__table-item-col'>
                                    <div className='course-report__table-duration'>1 день</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoursesTabsReport
