import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

const CabinetSettingsNotifications = ({ onChange }) => {
    const user = useSelector(({ auth }) => auth.user)
    const [novifications, setNovifications] = useState([])

    const notificationsTypes = ['Системные', 'От поддержки', 'Комментарии от клиентов']
    const notificationsSource = ['Электронная почта', 'На сайте', 'Телеграм']

    const createNotifications = (notifications) => {
        return new Array(notificationsTypes.length)
            .fill(0)
            .map((_) => new Array(notificationsSource.length).fill(0))
            .map((row, indexRow) => ({
                type: notificationsTypes[indexRow],
                sources: row.map((col, indexCol) => ({
                    source: notificationsSource[indexCol],
                    status: !!notifications?.find(({ type, source }) => type === indexRow && source === indexCol),
                })),
            }))
    }

    useEffect(() => {
        setNovifications(createNotifications(user.notifications))
    }, [user])

    return (
        <div className='account-settings__group card-bg'>
            <h3 className='account-settings__subtitle display-4'>Уведомления</h3>
            <div className='account-settings__item'>
                <span className='account-settings__item-title'>Социальные сети</span>
                <span className='account-settings__item-desc'>Подключите Telegram к своему аккаунту, чтобы получать уведомления от бота в мессенджере</span>
                <div className='account-settings__item-socials'>
                    <div className='account-settings__item-social account-settings__item-social--active'>
                        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path
                                d='M23.9998 2.36664L20.2039 21.5048C20.2039 21.5048 19.6732 22.8318 18.2131 22.1948L9.41417 15.4602C10.5968 14.3971 19.7717 6.14851 20.1729 5.77445C20.7931 5.19554 20.4082 4.85101 19.6873 5.28882L6.13526 13.8951L0.906828 12.1349C0.906828 12.1349 0.0837031 11.8429 0.00448434 11.2059C-0.0752032 10.5688 0.933547 10.2238 0.933547 10.2238L22.2481 1.86226C22.2481 1.86226 23.9998 1.09257 23.9998 2.36664Z'
                                fill='#2FA4DE'
                            />
                        </svg>
                        <span>Отключить</span>
                    </div>
                </div>
            </div>
            {novifications.map(({ type, sources }, indexType) => (
                <div key={indexType} className='account-settings__item'>
                    <span className='account-settings__item-title'>{type}</span>
                    <span className='account-settings__item-desc'>Оповещения о добавлении новых курсов или их редактировании</span>

                    <div className='account-settings__switches'>
                        {sources.map(({ source, status }, indexSource) => (
                            <div key={indexSource} className='account-settings__switch'>
                                {status}
                                <div className='account-settings__switch-title'>{source}</div>
                                <div className='account-settings__switch-input switch'>
                                    <input
                                        type='checkbox'
                                        className='checkbox'
                                        id={`switch${indexType}-${indexSource}`}
                                        defaultChecked={status}
                                        onChange={(e) => onChange(indexType, indexSource, e.target.checked)}
                                    />
                                    <label htmlFor={`switch${indexType}-${indexSource}`}></label>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            {/* <div className='account-settings__item'>
                <span className='account-settings__item-title'>Системные</span>
                <span className='account-settings__item-desc'>Оповещения о добавлении новых курсов или их редактировании</span>

                <div className='account-settings__switches'></div>
            </div>

            <div className='account-settings__item'>
                <span className='account-settings__item-title'>Системные</span>
                <span className='account-settings__item-desc'>Оповещения о добавлении новых курсов или их редактировании</span>
                <div className='account-settings__switches'>
                    <div className='account-settings__switch'>
                        <div className='account-settings__switch-title'>Электронная почта</div>
                        <div className='account-settings__switch-input switch'>
                            <input type='checkbox' className='checkbox' id='switch1' defaultChecked={checkbox1.value} {...checkbox1.bind} onChange={(e) => {}} />
                            <label htmlFor='switch1'></label>
                        </div>
                    </div>
                    <div className='account-settings__switch'>
                        <div className='account-settings__switch-title'>На сайте</div>
                        <div className='account-settings__switch-input switch'>
                            <input type='checkbox' className='checkbox' id='switch2' />
                            <label htmlFor='switch2'></label>
                        </div>
                    </div>
                    <div className='account-settings__switch'>
                        <div className='account-settings__switch-title'>Telegram</div>
                        <div className='account-settings__switch-input switch'>
                            <input type='checkbox' className='checkbox' id='switch3' />
                            <label htmlFor='switch3'></label>
                        </div>
                    </div>
                </div>
            </div>
            <div className='account-settings__item'>
                <span className='account-settings__item-title'>От поддержк</span>
                <span className='account-settings__item-desc'>Оповещения о добавлении новых комментариев к статьям блога</span>
                <div className='account-settings__switches'>
                    <div className='account-settings__switch'>
                        <div className='account-settings__switch-title'>Электронная почта</div>
                        <div className='account-settings__switch-input switch'>
                            <input type='checkbox' className='checkbox' id='switch4' />
                            <label htmlFor='switch4'></label>
                        </div>
                    </div>
                    <div className='account-settings__switch'>
                        <div className='account-settings__switch-title'>На сайте</div>
                        <div className='account-settings__switch-input switch'>
                            <input type='checkbox' className='checkbox' id='switch5' />
                            <label htmlFor='switch5'></label>
                        </div>
                    </div>
                    <div className='account-settings__switch'>
                        <div className='account-settings__switch-title'>Telegram</div>
                        <div className='account-settings__switch-input switch'>
                            <input type='checkbox' className='checkbox' id='switch6' />
                            <label htmlFor='switch6'></label>
                        </div>
                    </div>
                </div>
            </div>
            <div className='account-settings__item'>
                <span className='account-settings__item-title'>Комментарии от клиентов</span>
                <span className='account-settings__item-desc'>Оповещения о добавлении новых заявок в поддержку</span>
                <div className='account-settings__switches'>
                    <div className='account-settings__switch'>
                        <div className='account-settings__switch-title'>Электронная почта</div>
                        <div className='account-settings__switch-input switch'>
                            <input type='checkbox' className='checkbox' id='switch7' />
                            <label htmlFor='switch7'></label>
                        </div>
                    </div>
                    <div className='account-settings__switch'>
                        <div className='account-settings__switch-title'>На сайте</div>
                        <div className='account-settings__switch-input switch'>
                            <input type='checkbox' className='checkbox' id='switch8' />
                            <label htmlFor='switch8'></label>
                        </div>
                    </div>
                    <div className='account-settings__switch'>
                        <div className='account-settings__switch-title'>Telegram</div>
                        <div className='account-settings__switch-input switch'>
                            <input type='checkbox' className='checkbox' id='switch9' />
                            <label htmlFor='switch9'></label>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

CabinetSettingsNotifications.propTypes = {
    onChange: PropTypes.func.isRequired,
}

export default CabinetSettingsNotifications
