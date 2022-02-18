import { Button, ImgUpload, Input } from 'components/ui'
import { useDispatch, useInput, useInputFile, useNavigate, useRequest } from 'hooks'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getDate, getURL } from 'utils'

const CabinetEventsAdd = () => {
   const { eventId } = useParams()
   const isEditPage = !!eventId
   const { toCabinetEvents, toCabinetEventsEdit } = useNavigate()
   const { fetchEvent, addEvent, putEvent, deleteEvent, setEvent, setIsShow, setContent } = useDispatch()
   const event = useSelector(({ events }) => events.event)
   const hasEvent = event && !(Object.keys(event).length === 0)

   const inputName = useInput({ initialValue: 'test', bind: { name: 'name' }, is: { isRequired: true } })
   const inputType = useInput({ initialValue: 1, bind: { name: 'event_type_id' }, is: { isRequired: true } })
   const inputEDate = useInput({ initialValue: getDate(new Date(2022, 11, 31), { monthNames: false, isDayFirst: false }), bind: { name: 'edate' }, is: { isRequired: true, isDate: true } })
   const inputETime = useInput({ initialValue: '12:00:00', bind: { name: 'etime' }, is: { isRequired: true, isTime: true } })
   const inputTiming = useInput({ initialValue: 'test', bind: { name: 'timing' }, is: { isRequired: true } })
   const inputText = useInput({
      initialValue:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ad at et voluptates soluta, quibusdam ea unde iure velit odit labore molestiae a quis laboriosam nisi voluptas, sunt itaque cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ad at et voluptates soluta, quibusdam ea unde iure velit odit labore molestiae a quis laboriosam nisi voluptas, sunt itaque cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ad at et voluptates soluta, quibusdam ea unde iure velit odit labore molestiae a quis laboriosam nisi voluptas, sunt itaque cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ad at et voluptates soluta, quibusdam ea unde iure velit odit labore molestiae a quis laboriosam nisi voluptas, sunt itaque cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ad at et voluptates soluta, quibusdam ea unde iure velit odit labore molestiae a quis laboriosam nisi voluptas, sunt itaque cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ad at et voluptates soluta, quibusdam ea unde iure velit odit labore molestiae a quis laboriosam nisi voluptas, sunt itaque cum.',
      bind: { name: 'text' },
      is: { isRequired: true, isTextarea: true },
   })
   const inputKey = useInput({ initialValue: 'test', bind: { name: 'video_key' }, is: { isRequired: true } })
   const img = useInputFile()

   useEffect(() => {
      if (hasEvent) {
         inputName.setValue(event.name || '')
         inputType.setValue(event.event_type_id || '')
         inputEDate.setValue(event.edate || '')
         inputETime.setValue(event.etime || '')
         inputText.setValue(event.text || '')
         inputKey.setValue(event.key || '')
         img.setValue(getURL.img(event.image, false) || '')
      }
   }, [event])

   const fetchEventRequest = useRequest({
      request: fetchEvent,
   })

   useEffect(() => {
      if (isEditPage) {
         fetchEventRequest.call({ eventId })
      }
      return () => {
         setEvent({})
      }
   }, [])

   const addEventRequest = useRequest({
      request: addEvent,
      success: ({ response, data }) => {
         toCabinetEventsEdit({ type: 'event', eventId: data.course.id })
         setIsShow(true)
         setContent({ title: 'Информация о мероприятии  - добавлена' })
      },
   })

   const putEventRequest = useRequest({
      request: putEvent,
      success: ({ response, data }) => {
         setIsShow(true)
         setContent({ title: 'Информация о мероприятии  - обновлена' })
      },
   })

   const deleteEventRequest = useRequest({
      request: deleteEvent,
      success: ({ response, data }) => {
         setIsShow(true)
         setContent({ title: 'Мероприятие удалено' })
         toCabinetEvents({ type: 'event' })
      },
   })

   const onSave = (e) => {
      e.preventDefault()
      // TODO inputKey
      const isError = [inputName, inputType, inputEDate, inputETime, inputTiming, inputText, img].filter((i) => i.check(i.value)).length
      if (isError) return

      const body = new FormData()
      body.append('name', inputName.value)
      body.append('event_type_id', inputType.value)
      body.append('edate', inputEDate.value)
      body.append('etime', inputETime.value)
      body.append('timing', inputTiming.value)
      body.append('text', inputText.value)
      // body.append('video_key', +inputKey.value)
      img.ref.current?.files[0] && body.append('image', img.ref.current?.files[0])

      hasEvent ? putEventRequest.call({ eventId, body }) : addEventRequest.call({ body })
   }

   const onDelete = (e) => {
      e.preventDefault()

      deleteEventRequest.call({ eventId })
   }

   return (
      <section className='edit-event'>
         <div className='container'>
            <div className='edit-event__inner'>
               <div className='edit-event__left'>
                  <h1 className='edit-event__title display-3'>
                     <span>{isEditPage ? 'Редактирование' : 'Добавление'} мероприятия</span>
                  </h1>
                  <div className='course-edit__form'>
                     <h3 className='course-edit__form-title'>Основная информация</h3>
                     <ImgUpload img={img} title={'Изображение'} size={'md'} imgClass={'img--md'} />

                     <div className='course-edit__form-grid'>
                        <Input className='course-edit__form-group' input={inputName} label={'Название'} />
                        <Input className='course-edit__form-group' input={inputType} label={'Тип'} list={[{ id: 1, name: 'Онлайн-трансляция' }]} />
                        <Input className='course-edit__form-group' input={inputEDate} label={'Дата'} />
                        <Input className='course-edit__form-group' input={inputETime} label={'Время начала (по МСК)'} />
                        <Input className='course-edit__form-group' input={inputTiming} label={'Ориентировочная длительность'} />
                     </div>
                  </div>
                  <div className='create-about card-bg'>
                     <h3 className='create-about__title display-4'>Описание</h3>
                     <Input className='create-about__editor' input={inputText} />
                  </div>
                  <div className='edit-event__broadcast card-bg'>
                     <h3 className='edit-event__broadcast-title display-4'>Трансляция</h3>
                     <div className='edit-event__broadcast-bottom'>
                        <Input className='edit-event__broadcast-form-group' input={inputKey} label={'Ключ трансляции'} />
                        <Button className='edit-event__broadcast-btn' outline>
                           Как узнать ключ трансляции?
                        </Button>
                     </div>
                  </div>
               </div>
               <div className='edit-event__right'>
                  <div className='edit-event__nav card-bg'>
                     <Button className='edit-event__save' onClick={onSave}>
                        {isEditPage ? 'Сохранить' : 'Создать'}
                     </Button>
                     <div className='edit-event__hint'>Ваши изменения будут отправлены на модерацию.</div>
                  </div>
                  {isEditPage && (
                     <Button className='edit-event__delete' color='red' light onClick={onDelete}>
                        Удалить мероприятие
                     </Button>
                  )}
               </div>
            </div>
         </div>
      </section>
   )
}

export default CabinetEventsAdd
