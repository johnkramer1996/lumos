import { Button, ImgUpload, ImgUploadNew, Input, LoaderWrapper } from 'components/ui'
import { useDispatch, useInput, useInputFile, useInputFileNew, useNavigate, useRequest } from 'hooks'
import React, { useEffect, useLayoutEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getURL, timeout } from 'utils'
import { useForm } from 'react-hook-form'
import { eventsSelectors } from 'store/selectors'
import { TIME_NAMES } from 'constants'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const validationSchema = yup.object({
   name: yup.string().required('Обязательное поле'),
   timing: yup.string().required('Обязательное поле'),
   //  width_number: yup.number().typeError('Некорректное число').required('Обязательное поле'),
   //  width_name: yup.string().required('Обязательное поле'),
   imageValue: yup.string().required('Обязательное поле'),
   image: yup.mixed().imageFormatCheck().imageFileSizeCheck(5).imageMinResolutionCheck(1280, 720),
})

const CabinetEventsAdd = () => {
   const { eventId } = useParams()
   const isEditPage = !!eventId
   const { toCabinetEvents, toCabinetEventsEdit } = useNavigate()
   const { fetchEvent, addEvent, putEvent, deleteEvent, resetEvents, setIsShow, setContent } = useDispatch()
   const event = useSelector(eventsSelectors.getEvent)
   const hasEvent = !(Object.keys(event).length === 0)

   const form = useForm({
      mode: 'onChange',
      resolver: yupResolver(validationSchema),
      defaultValues: {
         name: '',
         event_type_id: '',
         edate: '',
         timing: '',
         text: '',
      },
   })

   useEffect(() => {
      console.log(event, fetchEventRequest.isLoading)
      if (hasEvent) {
         Object.entries(form.getValues())
            .filter(([k]) => !['image'].includes(k))
            .forEach(([key]) => form.setValue(key, event[key] ?? ''))
         form.setValue('imageValue', getURL.img(event['image'], false) ?? '')
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

   const onSave = (data) => {
      const body = new FormData()

      Object.entries(data)
         // TODO REMOVE VIDEO KEY
         .filter(([k]) => !['imageValue', 'video_key'].includes(k))
         .forEach(([key, value]) => {
            const val = typeof value === 'boolean' ? +value : value?.constructor.name === 'FileList' ? value[0] : value
            if (val === undefined || val === null) return
            body.append(key, val)
         })

      hasEvent ? putEventRequest.call({ eventId, body }) : addEventRequest.call({ body })
   }

   const onDelete = (e) => {
      e.preventDefault()

      deleteEventRequest.call({ eventId })
   }

   return (
      <section className='edit-event'>
         <div className='container'>
            <form onSubmit={form.handleSubmit(onSave)} className='edit-event__inner'>
               <div className='edit-event__left'>
                  <LoaderWrapper isLoading={false && fetchEventRequest.isLoading}>
                     <h1 className='edit-event__title display-3'>
                        <span>{isEditPage ? 'Редактирование' : 'Добавление'} мероприятия</span>
                     </h1>
                     <div className='course-edit__form'>
                        <h3 className='course-edit__form-title'>Основная информация</h3>
                        <ImgUploadNew form={form} title={'Изображение'} imgClass={'img--md'} />
                        <div className='course-edit__form-grid'>
                           <Input form={form} name='name' label='Название' className='course-edit__form-group' />
                           <Input form={form} name='event_type_id' label='Тип' options={[{ id: 1, name: 'Онлайн-трансляция' }]} className='course-edit__form-group' />
                           <Input form={form} name='edate' label='Дата' datepicker className='course-edit__form-group' />
                           <Input form={form} name='etime' label='Время начала (по МСК)' className='course-edit__form-group' />
                           {/* <div className='course-edit__form-group form-group form-group--row'>
                              <Input form={form} name='width_number' label='Длительность' className='course-edit__form-group' number />
                              <Input form={form} name='width_name' label='&nbsp;' className='course-edit__form-group' options={TIME_NAMES} />
                           </div> */}
                           <Input form={form} name='timing' label='Ориентировочная длительность' className='course-edit__form-group' />
                        </div>
                     </div>
                     <div className='create-about card-bg'>
                        <h3 className='create-about__title display-4'>Описание</h3>
                        <Input form={form} name='text' className='create-about__editor' textarea />
                     </div>
                     <div className='edit-event__broadcast card-bg'>
                        <h3 className='edit-event__broadcast-title display-4'>Трансляция</h3>
                        <div className='edit-event__broadcast-bottom'>
                           <Input form={form} name={'video_key'} registerOptions={{ required: false }} label='Ключ трансляции' classNameWrapper='edit-event__broadcast-form-group' />
                           <Button className='edit-event__broadcast-btn' outline>
                              Как узнать ключ трансляции?
                           </Button>
                        </div>
                     </div>
                  </LoaderWrapper>
               </div>
               <div className='edit-event__right'>
                  <div className='edit-event__nav card-bg'>
                     <Button className='edit-event__save'>{isEditPage ? 'Сохранить' : 'Создать'}</Button>
                     <div className='edit-event__hint'>Ваши изменения будут отправлены на модерацию.</div>
                  </div>
                  {isEditPage && (
                     <Button className='edit-event__delete' color='red' onClick={onDelete} light>
                        Удалить мероприятие
                     </Button>
                  )}
               </div>
            </form>
         </div>
      </section>
   )
}

export default CabinetEventsAdd
