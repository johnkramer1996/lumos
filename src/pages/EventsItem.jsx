import { Button } from 'components/ui'
import { useDispatch, useRequest } from 'hooks'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ReactComponent as ShareSvg } from 'svg/share.svg'
import { getDate, getURL } from 'utils'

const EventsItem = () => {
    const { eventId } = useParams()
    const { fetchFrontEvent, setFrontEvent, addUserToEvent } = useDispatch()
    const { id: user_id } = useSelector(({ auth }) => auth.user)
    const { id, image, name, All_Users, new_users, text, edate, etime, get_type: { name: typeName } = {}, timing } = useSelector(({ frontEvents }) => frontEvents.event)

    const fetchFrontEventRequest = useRequest({
        request: fetchFrontEvent,
    })
    const addUserToEventRequest = useRequest({
        request: addUserToEvent,
        success: (data) => {
            console.log(data)
        },
        error: (data) => {
            console.log(data)
        },
    })
    useEffect(() => {
        fetchFrontEventRequest.call({ eventId })
        return () => {
            setFrontEvent({})
        }
    }, [])

    const onEnroll = () => addUserToEventRequest.call({ body: { user_id, event_id: id } })

    return (
        <section className='event-page'>
            <div className='container'>
                <div className='event-page__inner'>
                    <aside className='event-page__left'>
                        <div className='event-page__card'>
                            <div className='event-page__card-img img img--md'>
                                <img src={getURL.img(image)} alt='' />
                            </div>
                            <Button className='event-page__card-btn' onClick={onEnroll}>
                                Записаться
                            </Button>
                            <div className='event-page__card-hint'>Запись бесплатна</div>
                        </div>
                        <Button className='event-page__share' outline>
                            <ShareSvg />
                            <span>Поделиться</span>
                        </Button>
                    </aside>
                    <div className='event-page__right'>
                        <div className='event-page__top'>
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

export default EventsItem
