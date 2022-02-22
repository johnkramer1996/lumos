import { Button, ImgUpload, ImgUploadNew, Input, LoaderWrapper } from 'components/ui'
import { useDispatch, useInput, useInputFile, useInputFileNew, useNavigate, useRequest } from 'hooks'
import React, { useEffect, useLayoutEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getDate, getURL, isActiveClass, timeout } from 'utils'
import { useForm } from 'react-hook-form'
import { eventsSelectors } from 'store/selectors'

const CabinetEventsAdd = () => {
   const { eventId } = useParams()
   const isEditPage = !!eventId
   const { toCabinetEvents, toCabinetEventsEdit } = useNavigate()
   const { fetchEvent, addEvent, putEvent, deleteEvent, resetEvents, setIsShow, setContent } = useDispatch()
   const event = useSelector(eventsSelectors.getEvent)
   const hasEvent = !(Object.keys(event).length === 0)

   const form = useForm({ mode: 'onBlur' })
   const inputFileObj = useInputFileNew({ form })
   // TODO ADD VIDEO KEY
   const getEntries = async () => timeout(() => Object.entries(form.getValues()).filter(([key]) => !(key === 'video_key' || key === 'inputFile' || key === 'inputFileValue')))

   useEffect(() => {
      if (hasEvent) {
         ;(async () => {
            ;(await getEntries()).forEach(([key]) => form.setValue(key, event[key] !== '0' ? event[key] : false ?? ''))
            inputFileObj.setValueImg(getURL.img(event.image, false) ?? '')
         })()
      }
   }, [event])

   const fetchEventRequest = useRequest({
      request: fetchEvent,
      loading: isEditPage,
   })

   useEffect(() => {
      if (isEditPage) fetchEventRequest.call({ eventId })
      return () => resetEvents()
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

   const onSave = async (e) => {
      if (!(await form.trigger())) return

      const body = new FormData()

      ;(await getEntries()).forEach(([key, value]) => body.append(key, typeof value === 'boolean' ? +value : value))
      const inputFile = form.getValues('inputFile')
      inputFile[0] && body.append('image', inputFile[0])

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
                  <LoaderWrapper isLoading={fetchEventRequest.isLoading}>
                     <h1 className='edit-event__title display-3'>
                        <span>{isEditPage ? 'Редактирование' : 'Добавление'} мероприятия</span>
                     </h1>
                     <div className='course-edit__form'>
                        <h3 className='course-edit__form-title'>Основная информация</h3>
                        <ImgUploadNew inputFileObj={inputFileObj} title={'Изображение'} size={'md'} imgClass={'img--md'} />
                        <div className='course-edit__form-grid'>
                           <Input form={form} name='name' label='Название' className='course-edit__form-group' />
                           <Input form={form} name='event_type_id' label='Тип' options={[{ id: 1, name: 'Онлайн-трансляция' }]} className='course-edit__form-group' />
                           <Input form={form} name='edate' label='Дата' datepicker className='course-edit__form-group' />
                           <Input form={form} name='etime' label='Время начала (по МСК)' time className='course-edit__form-group' />
                           <Input form={form} name='timing' label='Ориентировочная длительность' className='course-edit__form-group' />
                        </div>
                     </div>
                     <div className='create-about card-bg'>
                        <h3 className='create-about__title display-4'>Описание</h3>
                        <Input className='create-about__editor' form={form} name={'text'} textarea />
                     </div>
                     <div className='edit-event__broadcast card-bg'>
                        <h3 className='edit-event__broadcast-title display-4'>Трансляция</h3>
                        <div className='edit-event__broadcast-bottom'>
                           <Input classNameWrapper='edit-event__broadcast-form-group' form={form} name={'video_key'} registerOptions={{ required: false }} label={'Ключ трансляции'} />
                           <Button className='edit-event__broadcast-btn' outline>
                              Как узнать ключ трансляции?
                           </Button>
                        </div>
                     </div>
                  </LoaderWrapper>
               </div>
               <div className='edit-event__right'>
                  <div className='edit-event__nav card-bg'>
                     <Button className='edit-event__save' onClick={onSave}>
                        {isEditPage ? 'Сохранить' : 'Создать'}
                     </Button>
                     <div className='edit-event__hint'>Ваши изменения будут отправлены на модерацию.</div>
                  </div>
                  {isEditPage && (
                     <Button className='edit-event__delete' color='red' onClick={onDelete} light>
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
