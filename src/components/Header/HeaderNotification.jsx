import React, { useState } from 'react'

const HeaderNotification = () => {
    const [isActive, setIsActive] = useState(false)
    return (
        <div className={`header__notification ${isActive ? 'header__notification--active' : ''}`}>
            <div className='header__notification-show' onClick={() => setIsActive(!isActive)}>
                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M3.50083 13.7871V13.5681C3.53295 12.9202 3.7406 12.2925 4.10236 11.7496C4.7045 11.0975 5.1167 10.2983 5.29571 9.43598C5.29571 8.7695 5.29571 8.0935 5.35393 7.42703C5.65469 4.21842 8.82728 2 11.9611 2H12.0387C15.1725 2 18.345 4.21842 18.6555 7.42703C18.7137 8.0935 18.6555 8.7695 18.704 9.43598C18.8854 10.3003 19.2972 11.1019 19.8974 11.7591C20.2618 12.2972 20.4698 12.9227 20.4989 13.5681V13.7776C20.5206 14.648 20.2208 15.4968 19.6548 16.1674C18.907 16.9515 17.8921 17.4393 16.8024 17.5384C13.607 17.8812 10.383 17.8812 7.18762 17.5384C6.09914 17.435 5.08576 16.9479 4.33521 16.1674C3.778 15.4963 3.48224 14.6526 3.50083 13.7871Z'
                        stroke='#1B2C3E'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    />
                    <path
                        d='M9.55518 20.8518C10.0545 21.4785 10.7876 21.884 11.5925 21.9788C12.3973 22.0735 13.2074 21.8495 13.8435 21.3564C14.0391 21.2106 14.2152 21.041 14.3674 20.8518'
                        stroke='#1B2C3E'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    />
                </svg>
                <i>2</i>
            </div>
            <div className='header__notification-dropdown'>
                <div className='header__notification-top'>
                    <div className='header__notification-title'>Уведомления</div>
                    <div className='header__notification-new'>2 новых</div>
                </div>
                <div className='header__notification-items'>
                    <div className='header__notification-item'>
                        <i className='header__notification-item-icon header__notification-item-icon--yellow'>
                            <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    d='M17.9184 14.3201C17.6594 14.5711 17.5404 14.9341 17.5994 15.2901L18.4884 20.2101C18.5634 20.6271 18.3874 21.0491 18.0384 21.2901C17.6964 21.5401 17.2414 21.5701 16.8684 21.3701L12.4394 19.0601C12.2854 18.9781 12.1144 18.9341 11.9394 18.9291H11.6684C11.5744 18.9431 11.4824 18.9731 11.3984 19.0191L6.96839 21.3401C6.74939 21.4501 6.50139 21.4891 6.25839 21.4501C5.66639 21.3381 5.27139 20.7741 5.36839 20.1791L6.25839 15.2591C6.31739 14.9001 6.19839 14.5351 5.93939 14.2801L2.32839 10.7801C2.02639 10.4871 1.92139 10.0471 2.05939 9.65012C2.19339 9.25412 2.53539 8.96512 2.94839 8.90012L7.91839 8.17912C8.29639 8.14012 8.62839 7.91012 8.79839 7.57012L10.9884 3.08012C11.0404 2.98012 11.1074 2.88812 11.1884 2.81012L11.2784 2.74012C11.3254 2.68812 11.3794 2.64512 11.4394 2.61012L11.5484 2.57012L11.7184 2.50012H12.1394C12.5154 2.53912 12.8464 2.76412 13.0194 3.10012L15.2384 7.57012C15.3984 7.89712 15.7094 8.12412 16.0684 8.17912L21.0384 8.90012C21.4584 8.96012 21.8094 9.25012 21.9484 9.65012C22.0794 10.0511 21.9664 10.4911 21.6584 10.7801L17.9184 14.3201Z'
                                    fill='#F7B23B'
                                />
                            </svg>
                        </i>
                        <div className='header__notification-item-content'>
                            <div className='header__notification-item-text'>
                                Accumsan tortor augue velit est amet lobortis. Sit pretium, urna, lobortis eget vitae sit aliquet id. Enim vitae aenean est, pharetra quis volutpat etiam lorem.
                            </div>
                            <div className='header__notification-item-date'>12 сен в 12:40</div>
                        </div>
                    </div>
                    <div className='header__notification-item'>
                        <i className='header__notification-item-icon header__notification-item-icon--green'>
                            <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    fillRule='evenodd'
                                    clipRule='evenodd'
                                    d='M17.1796 4.41C17.1796 3.08 18.2596 2 19.5896 2C20.9196 2 21.9996 3.08 21.9996 4.41C21.9996 5.74 20.9196 6.82 19.5896 6.82C18.2596 6.82 17.1796 5.74 17.1796 4.41ZM13.3295 14.7593L16.2195 11.0303L16.1795 11.0503C16.3395 10.8303 16.3695 10.5503 16.2595 10.3003C16.1505 10.0503 15.9095 9.8803 15.6505 9.8603C15.3795 9.8303 15.1105 9.9503 14.9495 10.1703L12.5305 13.3003L9.75951 11.1203C9.58951 10.9903 9.38951 10.9393 9.18951 10.9603C8.99051 10.9903 8.81051 11.0993 8.68951 11.2593L5.73051 15.1103L5.66951 15.2003C5.49951 15.5193 5.57951 15.9293 5.87951 16.1503C6.01951 16.2403 6.16951 16.3003 6.33951 16.3003C6.57051 16.3103 6.78951 16.1893 6.92951 16.0003L9.43951 12.7693L12.2895 14.9103L12.3795 14.9693C12.6995 15.1393 13.0995 15.0603 13.3295 14.7593ZM15.4495 3.7803C15.4095 4.0303 15.3895 4.2803 15.3895 4.5303C15.3895 6.7803 17.2095 8.5993 19.4495 8.5993C19.6995 8.5993 19.9395 8.5703 20.1895 8.5303V16.5993C20.1895 19.9903 18.1895 22.0003 14.7895 22.0003H7.40051C3.99951 22.0003 1.99951 19.9903 1.99951 16.5993V9.2003C1.99951 5.8003 3.99951 3.7803 7.40051 3.7803H15.4495Z'
                                    fill='#ACD59A'
                                />
                            </svg>
                        </i>
                        <div className='header__notification-item-content'>
                            <div className='header__notification-item-text'>Accumsan tortor augue velit est amet lobortis. Sit pretium, urna, lobortis eget vitae sit aliquet id.</div>
                            <div className='header__notification-item-date'>12 сен в 12:40</div>
                        </div>
                    </div>
                    <div className='header__notification-item'>
                        <i className='header__notification-item-icon'>
                            <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    d='M17.9184 14.3201C17.6594 14.5711 17.5404 14.9341 17.5994 15.2901L18.4884 20.2101C18.5634 20.6271 18.3874 21.0491 18.0384 21.2901C17.6964 21.5401 17.2414 21.5701 16.8684 21.3701L12.4394 19.0601C12.2854 18.9781 12.1144 18.9341 11.9394 18.9291H11.6684C11.5744 18.9431 11.4824 18.9731 11.3984 19.0191L6.96839 21.3401C6.74939 21.4501 6.50139 21.4891 6.25839 21.4501C5.66639 21.3381 5.27139 20.7741 5.36839 20.1791L6.25839 15.2591C6.31739 14.9001 6.19839 14.5351 5.93939 14.2801L2.32839 10.7801C2.02639 10.4871 1.92139 10.0471 2.05939 9.65012C2.19339 9.25412 2.53539 8.96512 2.94839 8.90012L7.91839 8.17912C8.29639 8.14012 8.62839 7.91012 8.79839 7.57012L10.9884 3.08012C11.0404 2.98012 11.1074 2.88812 11.1884 2.81012L11.2784 2.74012C11.3254 2.68812 11.3794 2.64512 11.4394 2.61012L11.5484 2.57012L11.7184 2.50012H12.1394C12.5154 2.53912 12.8464 2.76412 13.0194 3.10012L15.2384 7.57012C15.3984 7.89712 15.7094 8.12412 16.0684 8.17912L21.0384 8.90012C21.4584 8.96012 21.8094 9.25012 21.9484 9.65012C22.0794 10.0511 21.9664 10.4911 21.6584 10.7801L17.9184 14.3201Z'
                                    fill='#8C52D6'
                                />
                            </svg>
                        </i>
                        <div className='header__notification-item-content'>
                            <div className='header__notification-item-text'>
                                Accumsan tortor augue velit est amet lobortis. Sit pretium, urna, lobortis eget vitae sit aliquet id. Enim vitae aenean est, pharetra quis volutpat etiam lorem.
                            </div>
                            <div className='header__notification-item-date'>12 сен в 12:40</div>
                        </div>
                    </div>
                    <div className='header__notification-item'>
                        <i className='header__notification-item-icon'>
                            <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    d='M17.9184 14.3201C17.6594 14.5711 17.5404 14.9341 17.5994 15.2901L18.4884 20.2101C18.5634 20.6271 18.3874 21.0491 18.0384 21.2901C17.6964 21.5401 17.2414 21.5701 16.8684 21.3701L12.4394 19.0601C12.2854 18.9781 12.1144 18.9341 11.9394 18.9291H11.6684C11.5744 18.9431 11.4824 18.9731 11.3984 19.0191L6.96839 21.3401C6.74939 21.4501 6.50139 21.4891 6.25839 21.4501C5.66639 21.3381 5.27139 20.7741 5.36839 20.1791L6.25839 15.2591C6.31739 14.9001 6.19839 14.5351 5.93939 14.2801L2.32839 10.7801C2.02639 10.4871 1.92139 10.0471 2.05939 9.65012C2.19339 9.25412 2.53539 8.96512 2.94839 8.90012L7.91839 8.17912C8.29639 8.14012 8.62839 7.91012 8.79839 7.57012L10.9884 3.08012C11.0404 2.98012 11.1074 2.88812 11.1884 2.81012L11.2784 2.74012C11.3254 2.68812 11.3794 2.64512 11.4394 2.61012L11.5484 2.57012L11.7184 2.50012H12.1394C12.5154 2.53912 12.8464 2.76412 13.0194 3.10012L15.2384 7.57012C15.3984 7.89712 15.7094 8.12412 16.0684 8.17912L21.0384 8.90012C21.4584 8.96012 21.8094 9.25012 21.9484 9.65012C22.0794 10.0511 21.9664 10.4911 21.6584 10.7801L17.9184 14.3201Z'
                                    fill='#8C52D6'
                                />
                            </svg>
                        </i>
                        <div className='header__notification-item-content'>
                            <div className='header__notification-item-text'>
                                Accumsan tortor augue velit est amet lobortis. Sit pretium, urna, lobortis eget vitae sit aliquet id. Enim vitae aenean est, pharetra quis volutpat etiam lorem.
                            </div>
                            <div className='header__notification-item-date'>12 сен в 12:40</div>
                        </div>
                    </div>
                    <div className='header__notification-item'>
                        <i className='header__notification-item-icon'>
                            <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    d='M17.9184 14.3201C17.6594 14.5711 17.5404 14.9341 17.5994 15.2901L18.4884 20.2101C18.5634 20.6271 18.3874 21.0491 18.0384 21.2901C17.6964 21.5401 17.2414 21.5701 16.8684 21.3701L12.4394 19.0601C12.2854 18.9781 12.1144 18.9341 11.9394 18.9291H11.6684C11.5744 18.9431 11.4824 18.9731 11.3984 19.0191L6.96839 21.3401C6.74939 21.4501 6.50139 21.4891 6.25839 21.4501C5.66639 21.3381 5.27139 20.7741 5.36839 20.1791L6.25839 15.2591C6.31739 14.9001 6.19839 14.5351 5.93939 14.2801L2.32839 10.7801C2.02639 10.4871 1.92139 10.0471 2.05939 9.65012C2.19339 9.25412 2.53539 8.96512 2.94839 8.90012L7.91839 8.17912C8.29639 8.14012 8.62839 7.91012 8.79839 7.57012L10.9884 3.08012C11.0404 2.98012 11.1074 2.88812 11.1884 2.81012L11.2784 2.74012C11.3254 2.68812 11.3794 2.64512 11.4394 2.61012L11.5484 2.57012L11.7184 2.50012H12.1394C12.5154 2.53912 12.8464 2.76412 13.0194 3.10012L15.2384 7.57012C15.3984 7.89712 15.7094 8.12412 16.0684 8.17912L21.0384 8.90012C21.4584 8.96012 21.8094 9.25012 21.9484 9.65012C22.0794 10.0511 21.9664 10.4911 21.6584 10.7801L17.9184 14.3201Z'
                                    fill='#8C52D6'
                                />
                            </svg>
                        </i>
                        <div className='header__notification-item-content'>
                            <div className='header__notification-item-text'>
                                Accumsan tortor augue velit est amet lobortis. Sit pretium, urna, lobortis eget vitae sit aliquet id. Enim vitae aenean est, pharetra quis volutpat etiam lorem.
                            </div>
                            <div className='header__notification-item-date'>12 сен в 12:40</div>
                        </div>
                    </div>
                </div>
                <div className='header__notification-bottom'>
                    <button className='header__notification-all'>Показать все</button>
                </div>
            </div>
        </div>
    )
}

export default HeaderNotification
