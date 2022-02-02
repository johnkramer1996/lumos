import React from 'react'
import { useSelector } from 'react-redux'
import { declOfNum, getDeclOfArray } from 'utils'

const CoursesTabsLessons = () => {
    const course = useSelector(({ courses }) => courses.course)
    const modules = useSelector(({ courses }) => courses.modules)

    console.log(modules)

    return (
        <div className='lessons-tab'>
            <div className='lessons-tab__left'>
                {modules.data?.map(({ name, lessonsshort }, index) => (
                    <div key={index} className='lessons-tab__module'>
                        <div className='lessons-tab__module-top'>
                            <div className='lessons-tab__module-title'>{name}</div>
                            <div className='lessons-tab__module-num'>
                                {lessonsshort?.length} {declOfNum(lessonsshort?.length, getDeclOfArray['lessons'])}
                            </div>
                        </div>
                        <div className='lessons-tab__module-items'>
                            {lessonsshort?.map(({ id, name }) => (
                                <div key={id} className='lessons-tab__module-item'>
                                    <span className='lessons-tab__module-item-num'>01</span>
                                    <span className='lessons-tab__module-item-title'>{name}</span>
                                    {/* <span className='lessons-tab__module-item-notification'>1</span> */}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className='lessons-tab__right'>
                <div className='lessons-tab__comments'>
                    <div className='lessons-tab__comments-top'>
                        <div className='lessons-tab__comments-title'>Комментарии</div>
                        <div className='lessons-tab__comments-new'>2 новых</div>
                    </div>
                    <div className='lessons-tab__comments-items'>
                        <div className='lessons-tab__comments-item lessons-tab__comments-item--new'>
                            <div className='lessons-tab__comments-item-top'>
                                <div className='lessons-tab__comments-item-user'>
                                    <img src='/assets/img/avatar2.jpg' alt='' />
                                    <span>Мария Мариева</span>
                                </div>
                                <div className='lessons-tab__comments-item-date'>12 сен в 12:40</div>
                            </div>
                            <div className='lessons-tab__comments-item-text'>
                                Accumsan tortor augue velit est amet lobortis. Sit pretium, urna, lobortis eget vitae sit aliquet id. Enim vitae aenean est, pharetra quis volutpat etiam lorem turpis?
                            </div>
                            <div className='lessons-tab__comments-item-title'>
                                <span>01</span>
                                <span>Название урока</span>
                            </div>
                        </div>
                        <div className='lessons-tab__comments-item lessons-tab__comments-item--new'>
                            <div className='lessons-tab__comments-item-top'>
                                <div className='lessons-tab__comments-item-user'>
                                    <img src='/assets/img/avatar2.jpg' alt='' />
                                    <span>Мария Мариева</span>
                                </div>
                                <div className='lessons-tab__comments-item-date'>12 сен в 12:40</div>
                            </div>
                            <div className='lessons-tab__comments-item-text'>
                                Accumsan tortor augue velit est amet lobortis. Sit pretium, urna, lobortis eget vitae sit aliquet id. Enim vitae aenean est, pharetra quis volutpat etiam lorem turpis?
                            </div>
                            <div className='lessons-tab__comments-item-title'>
                                <span>01</span>
                                <span>Название урока</span>
                            </div>
                        </div>
                        <div className='lessons-tab__comments-item'>
                            <div className='lessons-tab__comments-item-top'>
                                <div className='lessons-tab__comments-item-user'>
                                    <img src='/assets/img/avatar2.jpg' alt='' />
                                    <span>Мария Мариева</span>
                                </div>
                                <div className='lessons-tab__comments-item-date'>12 сен в 12:40</div>
                            </div>
                            <div className='lessons-tab__comments-item-text'>
                                Accumsan tortor augue velit est amet lobortis. Sit pretium, urna, lobortis eget vitae sit aliquet id. Enim vitae aenean est, pharetra quis volutpat etiam lorem turpis?
                            </div>
                            <div className='lessons-tab__comments-item-title'>
                                <span>01</span>
                                <span>Название урока</span>
                            </div>
                        </div>
                        <div className='lessons-tab__comments-item'>
                            <div className='lessons-tab__comments-item-top'>
                                <div className='lessons-tab__comments-item-user'>
                                    <img src='/assets/img/avatar2.jpg' alt='' />
                                    <span>Мария Мариева</span>
                                </div>
                                <div className='lessons-tab__comments-item-date'>12 сен в 12:40</div>
                            </div>
                            <div className='lessons-tab__comments-item-text'>
                                Accumsan tortor augue velit est amet lobortis. Sit pretium, urna, lobortis eget vitae sit aliquet id. Enim vitae aenean est, pharetra quis volutpat etiam lorem turpis?
                            </div>
                            <div className='lessons-tab__comments-item-title'>
                                <span>01</span>
                                <span>Название урока</span>
                            </div>
                        </div>
                        <div className='lessons-tab__comments-item'>
                            <div className='lessons-tab__comments-item-top'>
                                <div className='lessons-tab__comments-item-user'>
                                    <img src='/assets/img/avatar2.jpg' alt='' />
                                    <span>Мария Мариева</span>
                                </div>
                                <div className='lessons-tab__comments-item-date'>12 сен в 12:40</div>
                            </div>
                            <div className='lessons-tab__comments-item-text'>
                                Accumsan tortor augue velit est amet lobortis. Sit pretium, urna, lobortis eget vitae sit aliquet id. Enim vitae aenean est, pharetra quis volutpat etiam lorem turpis?
                            </div>
                            <div className='lessons-tab__comments-item-title'>
                                <span>01</span>
                                <span>Название урока</span>
                            </div>
                        </div>
                        <div className='lessons-tab__comments-item'>
                            <div className='lessons-tab__comments-item-top'>
                                <div className='lessons-tab__comments-item-user'>
                                    <img src='/assets/img/avatar2.jpg' alt='' />
                                    <span>Мария Мариева</span>
                                </div>
                                <div className='lessons-tab__comments-item-date'>12 сен в 12:40</div>
                            </div>
                            <div className='lessons-tab__comments-item-text'>
                                Accumsan tortor augue velit est amet lobortis. Sit pretium, urna, lobortis eget vitae sit aliquet id. Enim vitae aenean est, pharetra quis volutpat etiam lorem turpis?
                            </div>
                            <div className='lessons-tab__comments-item-title'>
                                <span>01</span>
                                <span>Название урока</span>
                            </div>
                        </div>
                    </div>
                    <div className='lessons-tab__comments-bottom'>
                        <button className='lessons-tab__comments-more btn'>
                            <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path d='M12.6673 5.66675L8.00065 10.3334L3.33398 5.66675' stroke='#7481E0' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                            </svg>
                            <span>Показать больше</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoursesTabsLessons
