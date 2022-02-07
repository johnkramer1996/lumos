import React from 'react'
import { useSelector } from 'react-redux'

const CoursesItemInfo = () => {
    const {} = useSelector(({ frontCourses }) => frontCourses.course)
    const course = useSelector(({ frontCourses }) => frontCourses.course)
    const { themes = [], type_study = [], difficulty = [], format = [], event_types = [] } = useSelector(({ system }) => system.references)
    const { name: typeName } = type_study[typeStudy] || {}
    const { name: foramtName } = format[format_study] || {}
    console.log(course)

    return (
        <section className='course-info2'>
            <div className='container'>
                <div className='course-info2__inner'>
                    <div className='course-info2__left'>
                        <div className='course-about course-info2__group'>
                            <div className='course-info2__group-show'>
                                <h3 className='course-info2__title'>О курсе</h3>
                                <div className='course-about__desc'>
                                    {course.description}
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra nullam id tincidunt vestibulum quisque. Urna etiam nunc aliquam dolor, vitae faucibus ut.
                                        Proin pharetra, amet elementum etiam faucibus nunc purus placerat ut. Metus aliquam eu consectetur sed commodo imperdiet quam. Lacinia tortor id neque ornare
                                        consectetur habitant. Dui quam tortor ut sit. A, eget ut tempus eu.{' '}
                                    </p>
                                    <p>
                                        Accumsan tortor augue velit est amet lobortis. Sit pretium, urna, lobortis eget vitae sit aliquet id. Enim vitae aenean est, pharetra quis volutpat etiam lorem
                                        turpis. Gravida dictum faucibus duis in odio tempus amet. Malesuada purus elit nunc senectus porta tortor molestie.{' '}
                                    </p>
                                </div>
                            </div>
                            <div className='course-info2__group-hidden'>
                                <div className='course-about__img'>
                                    <img src='/assets/img/about.jpg' alt='' />
                                </div>
                                <div className='course-about__desc'>
                                    <p>
                                        Accumsan tortor augue velit est amet lobortis. Sit pretium, urna, lobortis eget vitae sit aliquet id. Enim vitae aenean est, pharetra quis volutpat etiam lorem
                                        turpis. Gravida dictum faucibus duis in odio tempus amet. Malesuada purus elit nunc senectus porta tortor molestie.{' '}
                                    </p>
                                    <p>
                                        Turpis arcu nibh habitant feugiat dictumst adipiscing suspendisse. Quis eu congue vulputate vel in tellus morbi arcu tortor. Magnis imperdiet sed orci vitae
                                        nisi, pellentesque. Praesent elementum a, augue sed cursus sem enim eni...
                                    </p>
                                </div>
                            </div>
                            <button className='course-info2__show'>
                                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                    <path d='M19 8.5L12 15.5L5 8.5' stroke='#9FADBF' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                </svg>
                                <span className='course-info2__show-open'>Показать больше</span>
                                <span className='course-info2__show-close'>Скрыть</span>
                            </button>
                        </div>
                        <div className='course-whom course-info2__group'>
                            <div className='course-info2__group-show'>
                                <h3 className='course-info2__title'>Кому подойдет этот курс</h3>
                                <div className='course-whom__item'>
                                    <div className='course-whom__item-img'>
                                        <img src='/assets/img/whom.jpg' alt='' />
                                    </div>
                                    <div className='course-whom__item-content'>
                                        <div className='course-whom__item-title truncate'>Новичкам</div>
                                        <div className='course-whom__item-desc'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra nullam id tincidunt vestibulum quisque. Urna etiam nunc aliquam dolor, vitae faucibus ut
                                            dolor sit amet.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='course-info2__group-hidden'>
                                <div className='course-whom__item'>
                                    <div className='course-whom__item-img'>
                                        <img src='/assets/img/whom2.jpg' alt='' />
                                    </div>
                                    <div className='course-whom__item-content'>
                                        <div className='course-whom__item-title truncate'>Начинающим иллюстраторам</div>
                                        <div className='course-whom__item-desc'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra nullam id tincidunt vestibulum quisque. Urna etiam nunc aliquam dolor, vitae faucibus ut.
                                            Proin pharetra, amet elementum etiam faucibus nunc purus placerat ut. Metus aliquam eu consectetur sed commodo imperdiet quam. Metus aliquam eu consectetur
                                            sed commodo imperdiet quam.
                                        </div>
                                    </div>
                                </div>
                                <div className='course-whom__item'>
                                    <div className='course-whom__item-img'>
                                        <img src='/assets/img/whom3.jpg' alt='' />
                                    </div>
                                    <div className='course-whom__item-content'>
                                        <div className='course-whom__item-title truncate'>Начинающим 3D-дизайнерам</div>
                                        <div className='course-whom__item-desc'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra nullam id tincidunt vestibulum quisque. Urna etiam nunc aliquam dolor, vitae faucibus ut.
                                            Proin pharetra, amet elementum etiam faucibus nunc purus placerat ut. Metus aliquam eu consectetur sed commodo imperdiet quam.
                                        </div>
                                    </div>
                                </div>
                                <div className='course-whom__item'>
                                    <div className='course-whom__item-img'>
                                        <img src='/assets/img/whom4.jpg' alt='' />
                                    </div>
                                    <div className='course-whom__item-content'>
                                        <div className='course-whom__item-title truncate'>Профессионалам в 3D</div>
                                        <div className='course-whom__item-desc'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra nullam id tincidunt vestibulum quisque. Urna etiam nunc aliquam dolor, vitae faucibus ut.
                                            Proin pharetra, amet elementum etiam faucibus nunc purus placerat ut.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className='course-info2__show'>
                                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                    <path d='M19 8.5L12 15.5L5 8.5' stroke='#9FADBF' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                </svg>
                                <span className='course-info2__show-open'>Показать больше</span>
                                <span className='course-info2__show-close'>Скрыть</span>
                            </button>
                        </div>
                        <div className='course-result course-info2__group'>
                            <h3 className='course-info2__title'>Результаты обучения</h3>
                            <div className='course-result__wrap'>
                                <div className='course-result__item'>
                                    <i></i>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                                </div>
                                <div className='course-result__item'>
                                    <i></i>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                                </div>
                                <div className='course-result__item'>
                                    <i></i>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                                </div>
                                <div className='course-result__item'>
                                    <i></i>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                                </div>
                                <div className='course-result__item'>
                                    <i></i>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                                </div>
                                <div className='course-result__item'>
                                    <i></i>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                                </div>
                                <div className='course-result__item'>
                                    <i></i>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                                </div>
                            </div>
                        </div>
                        <div className='course-programm course-info2__group'>
                            <h3 className='course-info2__title'>Программа курса</h3>
                            <div className='course-programm__wrap'>
                                <div className='course-programm__group'>
                                    <div className='course-programm__title'>Заголовок подблока</div>
                                    <ol className='course-programm__list'>
                                        <li className='course-programm__item'>Название урока</li>
                                        <li className='course-programm__item'>Короткое название</li>
                                        <li className='course-programm__item'>Длинное название урока из программы</li>
                                        <li className='course-programm__item'>Длинное название урока</li>
                                        <li className='course-programm__item'>Название урока</li>
                                        <li className='course-programm__item'>Короткое название</li>
                                        <li className='course-programm__item'>Длинное название урока из программы</li>
                                        <li className='course-programm__item'>Длинное название урока</li>
                                    </ol>
                                </div>
                                <div className='course-programm__group'>
                                    <div className='course-programm__title'>Заголовок подблока 2</div>
                                    <ol className='course-programm__list'>
                                        <li className='course-programm__item'>Название урока</li>
                                        <li className='course-programm__item'>Короткое название</li>
                                        <li className='course-programm__item'>Длинное название урока из программы</li>
                                        <li className='course-programm__item'>Длинное название урока</li>
                                        <li className='course-programm__item'>Название урока</li>
                                        <li className='course-programm__item'>Короткое название</li>
                                    </ol>
                                </div>
                                <div className='course-programm__group'>
                                    <div className='course-programm__title'>Заголовок подблока 3</div>
                                    <ol className='course-programm__list'>
                                        <li className='course-programm__item'>Название урока</li>
                                        <li className='course-programm__item'>Короткое название</li>
                                        <li className='course-programm__item'>Длинное название урока из программы</li>
                                        <li className='course-programm__item'>Длинное название урока</li>
                                        <li className='course-programm__item'>Название урока</li>
                                        <li className='course-programm__item'>Короткое название</li>
                                        <li className='course-programm__item'>Длинное название урока из программы</li>
                                        <li className='course-programm__item'>Длинное название урока</li>
                                        <li className='course-programm__item'>Название урока</li>
                                        <li className='course-programm__item'>Короткое название</li>
                                    </ol>
                                </div>
                                <div className='course-programm__group'>
                                    <div className='course-programm__title'>Заголовок подблока 4</div>
                                    <ol className='course-programm__list'>
                                        <li className='course-programm__item'>Название урока</li>
                                        <li className='course-programm__item'>Короткое название</li>
                                        <li className='course-programm__item'>Длинное название урока из программы</li>
                                        <li className='course-programm__item'>Длинное название урока</li>
                                        <li className='course-programm__item'>Название урока</li>
                                        <li className='course-programm__item'>Короткое название</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='course-info2__right'>
                        <div className='course-info2__cart'>
                            <div className='course-info2__cart-top'>
                                <div className='course-info2__cart-prices'>
                                    <div className='course-info2__cart-prices-new'>4 970 руб.</div>
                                    <div className='course-info2__cart-prices-old'>9 970 руб.</div>
                                </div>
                                <div className='course-info2__cart-buttons'>
                                    <button className='course-info2__cart-btn btn btn-blue'>Записаться</button>
                                    <button className='course-info2__cart-btn course-info2__cart-btn--free btn btn-outline'>Пройти бесплатный урок</button>
                                </div>
                            </div>
                            <div className='course-info2__timer'>
                                <div className='course-info2__timer-title'>Скидка исчезнет через</div>
                                <div className='course-info2__timer-wrap'>
                                    <div className='course-info2__timer-item'>11</div>
                                    <div className='course-info2__timer-separate'>:</div>
                                    <div className='course-info2__timer-item'>29</div>
                                    <div className='course-info2__timer-separate'>:</div>
                                    <div className='course-info2__timer-item course-info__timer-item--sek'>59</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CoursesItemInfo
