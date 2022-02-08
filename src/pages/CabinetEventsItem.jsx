import { useDispatch, useRequest } from 'hooks'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { declOfNum, getDate, getDeclOfArray, getImgUrl } from 'utils'
import { ReactComponent as EditSvg } from 'svg/edit.svg'
import { ReactComponent as ShareSvg } from 'svg/share.svg'
import { RouteNames } from 'routes'
import { Button } from 'components/ui'

const CabinetEventsItem = () => {
    const { eventId } = useParams()
    const { fetchEvent, setEvent } = useDispatch()
    const { image, name, All_Users, new_users, text, edate, etime, get_type: { name: typeName } = {}, timing } = useSelector(({ events }) => events.event)
    const event = useSelector(({ events }) => events.event)
    const fetchEventRequest = useRequest({
        request: fetchEvent,
    })

    useEffect(() => {
        fetchEventRequest.call({ eventId })
        return () => {
            setEvent({})
        }
    }, [])

    return (
        <section className='event-page'>
            <div className='container'>
                <div className='event-page__inner event-page__inner--bread'>
                    <aside className='event-page__left'>
                        <div className='event-page__card'>
                            <div className='event-page__card-img img img--cover img--md'>
                                <img src={getImgUrl(image)} alt='' />
                            </div>
                            <div className='event-page__card-num'>
                                {All_Users} {declOfNum(All_Users, getDeclOfArray['members'])}
                            </div>
                            <div className='event-page__card-progress green-text'>+{new_users} за сутки</div>
                            <Button to={`${RouteNames.CABINET_EVENTS}/${eventId}/edit`} className='event-page__card-btn event-page__card-btn--edit btn' outline link>
                                <EditSvg />
                                <span>Редактировать</span>
                            </Button>
                        </div>
                        <button className='event-page__share btn btn-outline'>
                            <ShareSvg />
                            <span>Поделиться</span>
                        </button>
                    </aside>
                    <div className='event-page__right'>
                        <div className='event-page__top'>
                            <div className='breadcrumbs'>
                                <Link to={RouteNames.CABINET_COURSES} className='breadcrumbs__item'>
                                    Мои мероприятия
                                </Link>
                            </div>
                            <h1 className='event-page__title display-3'>{name}</h1>
                        </div>

                        <div className='event-page__badges'>
                            <div className='event-page__badge'>
                                <span>Дата</span>
                                <strong>{getDate(edate, true)}</strong>
                            </div>
                            <div className='event-page__badge'>
                                <span>Тип</span>
                                <strong>{typeName}</strong>
                            </div>
                            <div className='event-page__badge'>
                                <span>Начало (по МСК)</span>
                                <strong>в {etime}</strong>
                            </div>
                            <div className='event-page__badge'>
                                <span>Длительность</span>
                                <strong>~{timing}</strong>
                            </div>
                        </div>
                        <div className='event-page__desc'>
                            <h3 className='event-page__desc-title'>Описание</h3>
                            <p className='event-page__desc-item'>{text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CabinetEventsItem
