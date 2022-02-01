import React from 'react'

const CabinetEventsAdd = () => {
    return (
        <section className='edit-event'>
            <div className='container'>
                <div className='edit-event__inner'>
                    <div className='edit-event__left'>
                        <h1 className='edit-event__title display-3'>Редактирование мероприятия</h1>
                        <form className='course-edit__form'>
                            <h3 className='course-edit__form-title'>Основная информация</h3>
                            <div className='course-edit__form-upload edit-event__upload'>
                                <div className='course-edit__form-upload-title'>Изображение</div>
                                <div className='course-edit__form-upload-desc'>
                                    Соотношение сторон: 16:9 (рекомендуемое разрешение: 1280x720) <br /> PNG, JPG до 5 MБ
                                </div>
                                <div className='course-edit__form-upload-wrap'>
                                    <div className='course-edit__form-upload-img'>
                                        <img src='/assets/img/event1.jpg' alt='' />
                                    </div>
                                    <div className='course-edit__form-upload-buttons'>
                                        <button className='course-edit__form-upload-btn btn btn-blue' type='button'>
                                            Загрузить новое
                                        </button>
                                        <button className='course-edit__form-upload-delete btn btn-outline' type='button'>
                                            Удалить
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='course-edit__form-grid'>
                                <div className='course-edit__form-group form-group'>
                                    <label>Название</label>
                                    <input type='text' placeholder='Название' />
                                </div>
                                <div className='course-edit__form-group form-group'>
                                    <label>Тип</label>
                                    <select>
                                        <option defaultValue hidden=''>
                                            Тип
                                        </option>
                                        <option value=''>Онлайн-трансляция</option>
                                        <option value=''>Онлайн-трансляция 2</option>
                                    </select>
                                </div>
                                <div className='course-edit__form-group form-group'>
                                    <label>Дата</label>
                                    <input type='text' placeholder='Дата' />
                                </div>
                                <div className='course-edit__form-group form-group'>
                                    <label>Время начала (по МСК)</label>
                                    <input type='text' placeholder='Время начала (по МСК)' />
                                </div>
                                <div className='course-edit__form-group form-group'>
                                    <label>Ориентировочная длительность</label>
                                    <input type='text' placeholder='Ориентировочная длительность' />
                                </div>
                            </div>
                        </form>
                        <div className='create-about card-bg'>
                            <h3 className='create-about__title display-4'>Описание</h3>
                            <div className='create-about__editor'>
                                <textarea></textarea>
                            </div>
                        </div>
                        <div className='edit-event__broadcast card-bg'>
                            <h3 className='edit-event__broadcast-title display-4'>Трансляция</h3>
                            <div className='edit-event__broadcast-bottom'>
                                <div className='edit-event__broadcast-form-group form-group'>
                                    <label>Ключ трансляции</label>
                                    <input type='text' placeholder='Ключ трансляции' />
                                </div>
                                <button className='edit-event__broadcast-btn btn btn-outline'>Как узнать ключ трансляции?</button>
                            </div>
                        </div>
                    </div>
                    <div className='edit-event__right'>
                        <div className='edit-event__nav card-bg'>
                            <button className='edit-event__save btn btn-blue'>Сохранить</button>
                            <div className='edit-event__hint'>Ваши изменения будут отправлены на модерацию.</div>
                        </div>
                        <button className='edit-event__delete btn btn-light-red'>Удалить мероприятие</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CabinetEventsAdd
