import React from 'react'

const Contacts = ({ title = 'Контакты' }) => {
    return (
        <section className='contacts'>
            <div className='container'>
                <div className='contacts__inner'>
                    <div className='contacts__left'>
                        <h1 className='contacts__title display-2'>{title}</h1>
                        <div className='contacts__items'>
                            <a href='tel:8 800 888-88-88' className='contacts__item'>
                                <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                    <path
                                        fillRule='evenodd'
                                        clipRule='evenodd'
                                        d='M3.98727 6.49736C4.40903 5.79903 6.73283 3.259 8.39112 3.33568C8.88682 3.37676 9.32502 3.67664 9.68105 4.02443C10.4986 4.82273 12.8388 7.842 12.9716 8.47735C13.2948 10.0356 11.4379 10.9339 12.0062 12.5044C13.455 16.0495 15.9513 18.5457 19.498 19.993C21.0672 20.5613 21.9655 18.7045 23.5239 19.0291C24.1579 19.1619 27.1787 21.502 27.977 22.3195C28.3235 22.6741 28.6247 23.1136 28.6658 23.6093C28.7274 25.3552 26.0298 27.7117 25.5039 28.013C24.2633 28.9002 22.6447 28.8852 20.6715 27.9678C15.1653 25.6769 6.36584 17.0436 4.03246 11.3296C3.13964 9.36739 3.07802 7.73794 3.98727 6.49736Z'
                                        stroke='#9FADBF'
                                        strokeWidth='1.5'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                </svg>
                                <span>8 800 888-88-88</span>
                            </a>
                            <a href='mailto:email@lumos22.ru' className='contacts__item'>
                                <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                    <path
                                        d='M23.0236 12.0801L17.3364 16.6591C16.2601 17.5029 14.7513 17.5029 13.675 16.6591L7.93896 12.0801'
                                        stroke='#9FADBF'
                                        strokeWidth='1.5'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                    <path
                                        fillRule='evenodd'
                                        clipRule='evenodd'
                                        d='M9.18367 4.66602H21.7542C23.5667 4.68634 25.2919 5.45259 26.5278 6.78629C27.7638 8.11998 28.4027 9.90472 28.2958 11.7248V20.4287C28.4027 22.2488 27.7638 24.0335 26.5278 25.3672C25.2919 26.7009 23.5667 27.4672 21.7542 27.4875H9.18367C5.29045 27.4875 2.6665 24.3202 2.6665 20.4287V11.7248C2.6665 7.83328 5.29045 4.66602 9.18367 4.66602Z'
                                        stroke='#9FADBF'
                                        strokeWidth='1.5'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                </svg>
                                <span>email@lumos22.ru</span>
                            </a>
                        </div>
                        <form action='' className='contacts__form'>
                            <h3 className='contacts__form-title display-3'>Связаться с нами</h3>
                            <div className='contacts__form-grid'>
                                <div className='contacts__form-group form-group'>
                                    <label>Имя</label>
                                    <input type='text' placeholder='Имя' />
                                </div>
                                <div className='contacts__form-group form-group'>
                                    <label>E-mail</label>
                                    <input type='text' placeholder='E-mail' />
                                </div>
                                <div className='contacts__form-group contacts__form-group--text form-group'>
                                    <label>
                                        <span>Связаться с нами</span>
                                        <span className='contacts__form-num'>0/400</span>
                                    </label>
                                    <textarea placeholder='Напишите свой вопрос или опишите проблему'></textarea>
                                </div>
                            </div>
                            <button className='contacts__form-btn btn btn-blue'>Отправить</button>
                        </form>
                    </div>
                    <div className='contacts__right'>
                        <div className='contacts__card'>
                            <div className='contacts__card-title'>Хотите разместить свои курсы?</div>
                            <div className='contacts__card-desc'>Aliquam commodo dictum hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit dictum hendrerit.</div>
                            <button className='contacts__card-btn btn btn-blue'>Стать тренером</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacts
