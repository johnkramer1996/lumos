import React from 'react'
import Button from 'components/ui/Button/Button'
import { useSelector } from 'hooks/'

const AddCourse = () => {
    const { themes, typeStudy, format } = useSelector()

    return (
        <section className='course-edit'>
            <div className='container'>
                <div className='course-edit__inner'>
                    <div className='course-edit__left'>
                        <h1 className='course-edit__title display-3'>
                            <span>Редактирование курса</span>
                        </h1>
                        <div className='course-edit__tabs'>
                            <div data-tab-path='1' className='course-edit__tab course-edit__tab--active'>
                                Основная информация
                            </div>
                            <div data-tab-path='2' className='course-edit__tab'>
                                Уроки
                            </div>
                            <div data-tab-path='3' className='course-edit__tab'>
                                Страница курса
                            </div>
                        </div>
                        <div data-tab-path='1' className='course-edit__content course-edit__content--active'>
                            <form className='course-edit__form'>
                                <h3 className='course-edit__form-title'>Основная информация</h3>
                                <div className='course-edit__form-grid'>
                                    <div className='course-edit__form-group form-group'>
                                        <label>Название</label>
                                        <input type='text' placeholder='Название' />
                                    </div>
                                    <div className='course-edit__form-group form-group'>
                                        <label>Категория</label>
                                        <select>
                                            <option selected hidden>
                                                Категория
                                            </option>
                                            {themes.map(({ id, name }) => (
                                                <option key={id} value={id}>
                                                    {name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className='course-edit__form-group form-group'>
                                        <label>Тип обучения</label>
                                        <select>
                                            <option selected hidden>
                                                Тип обучения
                                            </option>
                                            {typeStudy.map(({ id, name }) => (
                                                <option key={id} value={id}>
                                                    {name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className='course-edit__form-group form-group'>
                                        <label>Формат</label>
                                        <select>
                                            <option selected hidden>
                                                Формат
                                            </option>
                                            {format.map(({ id, name }) => (
                                                <option key={id} value={id}>
                                                    {name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className='course-edit__form-group form-group'>
                                        <label>Старт курса</label>
                                        <select>
                                            <option selected hidden>
                                                Старт курса
                                            </option>
                                            <option value=''>В любое время</option>
                                            <option value=''>В любое время 2</option>
                                        </select>
                                    </div>
                                    <div className='course-edit__form-group form-group'>
                                        <label>Длительность</label>
                                        <input type='text' placeholder='Длительность' />
                                    </div>
                                    <div className='course-edit__form-checkbox checkbox'>
                                        <input type='checkbox' className='checkbox' id='c' />
                                        <label htmlFor='c'>Разрешить продавать по подписке</label>
                                    </div>
                                </div>
                                <div className='course-edit__form-upload'>
                                    <div className='course-edit__form-upload-title'>Изображение</div>
                                    <div className='course-edit__form-upload-desc'>
                                        Соотношение сторон: 16:9 (рекомендуемое разрешение: 1280x720) <br /> PNG, JPG до 5 MБ
                                    </div>
                                    <div className='course-edit__form-upload-wrap'>
                                        <div className='course-edit__form-upload-img'>
                                            <img src='./assets/img/course4.jpg' alt='' />
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
                            </form>
                        </div>
                        <div data-tab-path='2' className='course-edit__content'>
                            <div className='course-edit__small-desc card-bg'>
                                <div className='course-edit__small-desc-title display-4'>Короткое описание</div>
                                <div className='form-group'>
                                    <label>
                                        <span>Описание</span>
                                        <span>335/600</span>
                                    </label>
                                    <textarea placeholder='Описание'></textarea>
                                </div>
                            </div>
                            <div className='create-module card-bg'>
                                <h3 className='create-module__title display-4'>Модули</h3>
                                <div className='create-module__items'>
                                    <div className='create-module__item form-group'>
                                        <label>Название модуля 1</label>
                                        <div className='create-module__input'>
                                            <input type='text' placeholder='Название модуля' />
                                            <button className='create-module__delete'>
                                                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                    <path
                                                        d='M19.325 9.46826C19.325 9.46826 18.782 16.2033 18.467 19.0403C18.317 20.3953 17.48 21.1893 16.109 21.2143C13.5 21.2613 10.888 21.2643 8.28003 21.2093C6.96103 21.1823 6.13803 20.3783 5.99103 19.0473C5.67403 16.1853 5.13403 9.46826 5.13403 9.46826'
                                                        stroke='#EC9898'
                                                        strokeWidth='1.5'
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                    />
                                                    <path d='M20.7082 6.23975H3.75024' stroke='#EC9898' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                                    <path
                                                        d='M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973'
                                                        stroke='#EC9898'
                                                        strokeWidth='1.5'
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='create-module__item form-group'>
                                        <label>Название модуля 2</label>
                                        <div className='create-module__input'>
                                            <input type='text' placeholder='Название модуля' />
                                            <button className='create-module__delete'>
                                                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                    <path
                                                        d='M19.325 9.46826C19.325 9.46826 18.782 16.2033 18.467 19.0403C18.317 20.3953 17.48 21.1893 16.109 21.2143C13.5 21.2613 10.888 21.2643 8.28003 21.2093C6.96103 21.1823 6.13803 20.3783 5.99103 19.0473C5.67403 16.1853 5.13403 9.46826 5.13403 9.46826'
                                                        stroke='#EC9898'
                                                        strokeWidth='1.5'
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                    />
                                                    <path d='M20.7082 6.23975H3.75024' stroke='#EC9898' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                                    <path
                                                        d='M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973'
                                                        stroke='#EC9898'
                                                        strokeWidth='1.5'
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='create-module__item form-group'>
                                        <label>Название модуля 3</label>
                                        <div className='create-module__input'>
                                            <input type='text' placeholder='Название модуля' />
                                            <button className='create-module__delete'>
                                                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                    <path
                                                        d='M19.325 9.46826C19.325 9.46826 18.782 16.2033 18.467 19.0403C18.317 20.3953 17.48 21.1893 16.109 21.2143C13.5 21.2613 10.888 21.2643 8.28003 21.2093C6.96103 21.1823 6.13803 20.3783 5.99103 19.0473C5.67403 16.1853 5.13403 9.46826 5.13403 9.46826'
                                                        stroke='#EC9898'
                                                        strokeWidth='1.5'
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                    />
                                                    <path d='M20.7082 6.23975H3.75024' stroke='#EC9898' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                                    <path
                                                        d='M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973'
                                                        stroke='#EC9898'
                                                        strokeWidth='1.5'
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <button className='create-module__add btn btn-outline'>
                                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                        <path d='M12.039 4V20' stroke='#1B2C3E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                        <path d='M20 12.038H4' stroke='#1B2C3E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                    </svg>
                                    <span>Добавить модуль</span>
                                </button>
                            </div>
                            <div className='create-module card-bg'>
                                <div className='create-module__top'>
                                    <h3 className='create-module__title display-4'>Модуль 1</h3>
                                    <div className='create-module__num'>4 урока</div>
                                </div>
                                <div className='create-module__items'>
                                    <div className='create-module__item form-group'>
                                        <div className='create-module__input'>
                                            <button className='create-module__drag'>
                                                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                    <path d='M10 4C10 5.10457 9.10457 6 8 6C6.89543 6 6 5.10457 6 4C6 2.89543 6.89543 2 8 2C9.10457 2 10 2.89543 10 4Z' fill='#9FADBF' />
                                                    <path d='M18 4C18 5.10457 17.1046 6 16 6C14.8954 6 14 5.10457 14 4C14 2.89543 14.8954 2 16 2C17.1046 2 18 2.89543 18 4Z' fill='#9FADBF' />
                                                    <path d='M10 12C10 13.1046 9.10457 14 8 14C6.89543 14 6 13.1046 6 12C6 10.8954 6.89543 10 8 10C9.10457 10 10 10.8954 10 12Z' fill='#9FADBF' />
                                                    <path d='M18 12C18 13.1046 17.1046 14 16 14C14.8954 14 14 13.1046 14 12C14 10.8954 14.8954 10 16 10C17.1046 10 18 10.8954 18 12Z' fill='#9FADBF' />
                                                    <path d='M10 20C10 21.1046 9.10457 22 8 22C6.89543 22 6 21.1046 6 20C6 18.8954 6.89543 18 8 18C9.10457 18 10 18.8954 10 20Z' fill='#9FADBF' />
                                                    <path d='M18 20C18 21.1046 17.1046 22 16 22C14.8954 22 14 21.1046 14 20C14 18.8954 14.8954 18 16 18C17.1046 18 18 18.8954 18 20Z' fill='#9FADBF' />
                                                </svg>
                                            </button>
                                            <button className='create-module__link'>
                                                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                    <path d='M10 7H6.5C5.33333 7.16667 2 8 2 12C2 16 5.33333 16.8333 6.5 17H10' stroke='#8B9EE6' strokeWidth='1.5' strokeLinecap='round' />
                                                    <path d='M14 7H17.5C18.6667 7.16667 22 8 22 12C22 16 18.6667 16.8333 17.5 17H14' stroke='#8B9EE6' strokeWidth='1.5' strokeLinecap='round' />
                                                    <path d='M8 12H16' stroke='#8B9EE6' strokeWidth='1.5' strokeLinecap='round' />
                                                </svg>
                                            </button>
                                            <input type='text' placeholder='Название урока' />
                                            <button className='create-module__delete'>
                                                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                    <path
                                                        d='M19.325 9.46826C19.325 9.46826 18.782 16.2033 18.467 19.0403C18.317 20.3953 17.48 21.1893 16.109 21.2143C13.5 21.2613 10.888 21.2643 8.28003 21.2093C6.96103 21.1823 6.13803 20.3783 5.99103 19.0473C5.67403 16.1853 5.13403 9.46826 5.13403 9.46826'
                                                        stroke='#EC9898'
                                                        strokeWidth='1.5'
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                    />
                                                    <path d='M20.7082 6.23975H3.75024' stroke='#EC9898' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                                    <path
                                                        d='M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973'
                                                        stroke='#EC9898'
                                                        strokeWidth='1.5'
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='create-module__item form-group'>
                                        <div className='create-module__input'>
                                            <button className='create-module__drag'>
                                                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                    <path d='M10 4C10 5.10457 9.10457 6 8 6C6.89543 6 6 5.10457 6 4C6 2.89543 6.89543 2 8 2C9.10457 2 10 2.89543 10 4Z' fill='#9FADBF' />
                                                    <path d='M18 4C18 5.10457 17.1046 6 16 6C14.8954 6 14 5.10457 14 4C14 2.89543 14.8954 2 16 2C17.1046 2 18 2.89543 18 4Z' fill='#9FADBF' />
                                                    <path d='M10 12C10 13.1046 9.10457 14 8 14C6.89543 14 6 13.1046 6 12C6 10.8954 6.89543 10 8 10C9.10457 10 10 10.8954 10 12Z' fill='#9FADBF' />
                                                    <path d='M18 12C18 13.1046 17.1046 14 16 14C14.8954 14 14 13.1046 14 12C14 10.8954 14.8954 10 16 10C17.1046 10 18 10.8954 18 12Z' fill='#9FADBF' />
                                                    <path d='M10 20C10 21.1046 9.10457 22 8 22C6.89543 22 6 21.1046 6 20C6 18.8954 6.89543 18 8 18C9.10457 18 10 18.8954 10 20Z' fill='#9FADBF' />
                                                    <path d='M18 20C18 21.1046 17.1046 22 16 22C14.8954 22 14 21.1046 14 20C14 18.8954 14.8954 18 16 18C17.1046 18 18 18.8954 18 20Z' fill='#9FADBF' />
                                                </svg>
                                            </button>
                                            <button className='create-module__link'>
                                                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                    <path d='M10 7H6.5C5.33333 7.16667 2 8 2 12C2 16 5.33333 16.8333 6.5 17H10' stroke='#8B9EE6' strokeWidth='1.5' strokeLinecap='round' />
                                                    <path d='M14 7H17.5C18.6667 7.16667 22 8 22 12C22 16 18.6667 16.8333 17.5 17H14' stroke='#8B9EE6' strokeWidth='1.5' strokeLinecap='round' />
                                                    <path d='M8 12H16' stroke='#8B9EE6' strokeWidth='1.5' strokeLinecap='round' />
                                                </svg>
                                            </button>
                                            <input type='text' placeholder='Название урока' />
                                            <button className='create-module__delete'>
                                                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                    <path
                                                        d='M19.325 9.46826C19.325 9.46826 18.782 16.2033 18.467 19.0403C18.317 20.3953 17.48 21.1893 16.109 21.2143C13.5 21.2613 10.888 21.2643 8.28003 21.2093C6.96103 21.1823 6.13803 20.3783 5.99103 19.0473C5.67403 16.1853 5.13403 9.46826 5.13403 9.46826'
                                                        stroke='#EC9898'
                                                        strokeWidth='1.5'
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                    />
                                                    <path d='M20.7082 6.23975H3.75024' stroke='#EC9898' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                                    <path
                                                        d='M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973'
                                                        stroke='#EC9898'
                                                        strokeWidth='1.5'
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='create-module__item form-group'>
                                        <div className='create-module__input'>
                                            <button className='create-module__drag'>
                                                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                    <path d='M10 4C10 5.10457 9.10457 6 8 6C6.89543 6 6 5.10457 6 4C6 2.89543 6.89543 2 8 2C9.10457 2 10 2.89543 10 4Z' fill='#9FADBF' />
                                                    <path d='M18 4C18 5.10457 17.1046 6 16 6C14.8954 6 14 5.10457 14 4C14 2.89543 14.8954 2 16 2C17.1046 2 18 2.89543 18 4Z' fill='#9FADBF' />
                                                    <path d='M10 12C10 13.1046 9.10457 14 8 14C6.89543 14 6 13.1046 6 12C6 10.8954 6.89543 10 8 10C9.10457 10 10 10.8954 10 12Z' fill='#9FADBF' />
                                                    <path d='M18 12C18 13.1046 17.1046 14 16 14C14.8954 14 14 13.1046 14 12C14 10.8954 14.8954 10 16 10C17.1046 10 18 10.8954 18 12Z' fill='#9FADBF' />
                                                    <path d='M10 20C10 21.1046 9.10457 22 8 22C6.89543 22 6 21.1046 6 20C6 18.8954 6.89543 18 8 18C9.10457 18 10 18.8954 10 20Z' fill='#9FADBF' />
                                                    <path d='M18 20C18 21.1046 17.1046 22 16 22C14.8954 22 14 21.1046 14 20C14 18.8954 14.8954 18 16 18C17.1046 18 18 18.8954 18 20Z' fill='#9FADBF' />
                                                </svg>
                                            </button>
                                            <button className='create-module__link'>
                                                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                    <path d='M10 7H6.5C5.33333 7.16667 2 8 2 12C2 16 5.33333 16.8333 6.5 17H10' stroke='#8B9EE6' strokeWidth='1.5' strokeLinecap='round' />
                                                    <path d='M14 7H17.5C18.6667 7.16667 22 8 22 12C22 16 18.6667 16.8333 17.5 17H14' stroke='#8B9EE6' strokeWidth='1.5' strokeLinecap='round' />
                                                    <path d='M8 12H16' stroke='#8B9EE6' strokeWidth='1.5' strokeLinecap='round' />
                                                </svg>
                                            </button>
                                            <input type='text' placeholder='Название урока' />
                                            <button className='create-module__delete'>
                                                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                    <path
                                                        d='M19.325 9.46826C19.325 9.46826 18.782 16.2033 18.467 19.0403C18.317 20.3953 17.48 21.1893 16.109 21.2143C13.5 21.2613 10.888 21.2643 8.28003 21.2093C6.96103 21.1823 6.13803 20.3783 5.99103 19.0473C5.67403 16.1853 5.13403 9.46826 5.13403 9.46826'
                                                        stroke='#EC9898'
                                                        strokeWidth='1.5'
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                    />
                                                    <path d='M20.7082 6.23975H3.75024' stroke='#EC9898' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                                    <path
                                                        d='M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973'
                                                        stroke='#EC9898'
                                                        strokeWidth='1.5'
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='create-module__item form-group'>
                                        <div className='create-module__input'>
                                            <button className='create-module__drag'>
                                                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                    <path d='M10 4C10 5.10457 9.10457 6 8 6C6.89543 6 6 5.10457 6 4C6 2.89543 6.89543 2 8 2C9.10457 2 10 2.89543 10 4Z' fill='#9FADBF' />
                                                    <path d='M18 4C18 5.10457 17.1046 6 16 6C14.8954 6 14 5.10457 14 4C14 2.89543 14.8954 2 16 2C17.1046 2 18 2.89543 18 4Z' fill='#9FADBF' />
                                                    <path d='M10 12C10 13.1046 9.10457 14 8 14C6.89543 14 6 13.1046 6 12C6 10.8954 6.89543 10 8 10C9.10457 10 10 10.8954 10 12Z' fill='#9FADBF' />
                                                    <path d='M18 12C18 13.1046 17.1046 14 16 14C14.8954 14 14 13.1046 14 12C14 10.8954 14.8954 10 16 10C17.1046 10 18 10.8954 18 12Z' fill='#9FADBF' />
                                                    <path d='M10 20C10 21.1046 9.10457 22 8 22C6.89543 22 6 21.1046 6 20C6 18.8954 6.89543 18 8 18C9.10457 18 10 18.8954 10 20Z' fill='#9FADBF' />
                                                    <path d='M18 20C18 21.1046 17.1046 22 16 22C14.8954 22 14 21.1046 14 20C14 18.8954 14.8954 18 16 18C17.1046 18 18 18.8954 18 20Z' fill='#9FADBF' />
                                                </svg>
                                            </button>
                                            <button className='create-module__link'>
                                                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                    <path d='M10 7H6.5C5.33333 7.16667 2 8 2 12C2 16 5.33333 16.8333 6.5 17H10' stroke='#8B9EE6' strokeWidth='1.5' strokeLinecap='round' />
                                                    <path d='M14 7H17.5C18.6667 7.16667 22 8 22 12C22 16 18.6667 16.8333 17.5 17H14' stroke='#8B9EE6' strokeWidth='1.5' strokeLinecap='round' />
                                                    <path d='M8 12H16' stroke='#8B9EE6' strokeWidth='1.5' strokeLinecap='round' />
                                                </svg>
                                            </button>
                                            <input type='text' placeholder='Название урока' />
                                            <button className='create-module__delete'>
                                                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                    <path
                                                        d='M19.325 9.46826C19.325 9.46826 18.782 16.2033 18.467 19.0403C18.317 20.3953 17.48 21.1893 16.109 21.2143C13.5 21.2613 10.888 21.2643 8.28003 21.2093C6.96103 21.1823 6.13803 20.3783 5.99103 19.0473C5.67403 16.1853 5.13403 9.46826 5.13403 9.46826'
                                                        stroke='#EC9898'
                                                        strokeWidth='1.5'
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                    />
                                                    <path d='M20.7082 6.23975H3.75024' stroke='#EC9898' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                                    <path
                                                        d='M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973'
                                                        stroke='#EC9898'
                                                        strokeWidth='1.5'
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <button className='create-module__add btn btn-outline'>
                                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                        <path d='M12.039 4V20' stroke='#1B2C3E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                        <path d='M20 12.038H4' stroke='#1B2C3E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                    </svg>
                                    <span>Добавить урок</span>
                                </button>
                            </div>
                            <div className='create-module card-bg'>
                                <div className='create-module__top'>
                                    <h3 className='create-module__title display-4'>Модуль 2</h3>
                                    <div className='create-module__num'>6 уроков</div>
                                </div>
                                <div className='create-module__items'>
                                    <div className='create-module__item form-group'>
                                        <div className='create-module__input'>
                                            <button className='create-module__drag'>
                                                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                    <path d='M10 4C10 5.10457 9.10457 6 8 6C6.89543 6 6 5.10457 6 4C6 2.89543 6.89543 2 8 2C9.10457 2 10 2.89543 10 4Z' fill='#9FADBF' />
                                                    <path d='M18 4C18 5.10457 17.1046 6 16 6C14.8954 6 14 5.10457 14 4C14 2.89543 14.8954 2 16 2C17.1046 2 18 2.89543 18 4Z' fill='#9FADBF' />
                                                    <path d='M10 12C10 13.1046 9.10457 14 8 14C6.89543 14 6 13.1046 6 12C6 10.8954 6.89543 10 8 10C9.10457 10 10 10.8954 10 12Z' fill='#9FADBF' />
                                                    <path d='M18 12C18 13.1046 17.1046 14 16 14C14.8954 14 14 13.1046 14 12C14 10.8954 14.8954 10 16 10C17.1046 10 18 10.8954 18 12Z' fill='#9FADBF' />
                                                    <path d='M10 20C10 21.1046 9.10457 22 8 22C6.89543 22 6 21.1046 6 20C6 18.8954 6.89543 18 8 18C9.10457 18 10 18.8954 10 20Z' fill='#9FADBF' />
                                                    <path d='M18 20C18 21.1046 17.1046 22 16 22C14.8954 22 14 21.1046 14 20C14 18.8954 14.8954 18 16 18C17.1046 18 18 18.8954 18 20Z' fill='#9FADBF' />
                                                </svg>
                                            </button>
                                            <button className='create-module__link'>
                                                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                    <path d='M10 7H6.5C5.33333 7.16667 2 8 2 12C2 16 5.33333 16.8333 6.5 17H10' stroke='#8B9EE6' strokeWidth='1.5' strokeLinecap='round' />
                                                    <path d='M14 7H17.5C18.6667 7.16667 22 8 22 12C22 16 18.6667 16.8333 17.5 17H14' stroke='#8B9EE6' strokeWidth='1.5' strokeLinecap='round' />
                                                    <path d='M8 12H16' stroke='#8B9EE6' strokeWidth='1.5' strokeLinecap='round' />
                                                </svg>
                                            </button>
                                            <input type='text' placeholder='Название урока' />
                                            <button className='create-module__delete'>
                                                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                    <path
                                                        d='M19.325 9.46826C19.325 9.46826 18.782 16.2033 18.467 19.0403C18.317 20.3953 17.48 21.1893 16.109 21.2143C13.5 21.2613 10.888 21.2643 8.28003 21.2093C6.96103 21.1823 6.13803 20.3783 5.99103 19.0473C5.67403 16.1853 5.13403 9.46826 5.13403 9.46826'
                                                        stroke='#EC9898'
                                                        strokeWidth='1.5'
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                    />
                                                    <path d='M20.7082 6.23975H3.75024' stroke='#EC9898' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                                    <path
                                                        d='M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973'
                                                        stroke='#EC9898'
                                                        strokeWidth='1.5'
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='create-module__item form-group'>
                                        <div className='create-module__input'>
                                            <button className='create-module__drag'>
                                                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                    <path d='M10 4C10 5.10457 9.10457 6 8 6C6.89543 6 6 5.10457 6 4C6 2.89543 6.89543 2 8 2C9.10457 2 10 2.89543 10 4Z' fill='#9FADBF' />
                                                    <path d='M18 4C18 5.10457 17.1046 6 16 6C14.8954 6 14 5.10457 14 4C14 2.89543 14.8954 2 16 2C17.1046 2 18 2.89543 18 4Z' fill='#9FADBF' />
                                                    <path d='M10 12C10 13.1046 9.10457 14 8 14C6.89543 14 6 13.1046 6 12C6 10.8954 6.89543 10 8 10C9.10457 10 10 10.8954 10 12Z' fill='#9FADBF' />
                                                    <path d='M18 12C18 13.1046 17.1046 14 16 14C14.8954 14 14 13.1046 14 12C14 10.8954 14.8954 10 16 10C17.1046 10 18 10.8954 18 12Z' fill='#9FADBF' />
                                                    <path d='M10 20C10 21.1046 9.10457 22 8 22C6.89543 22 6 21.1046 6 20C6 18.8954 6.89543 18 8 18C9.10457 18 10 18.8954 10 20Z' fill='#9FADBF' />
                                                    <path d='M18 20C18 21.1046 17.1046 22 16 22C14.8954 22 14 21.1046 14 20C14 18.8954 14.8954 18 16 18C17.1046 18 18 18.8954 18 20Z' fill='#9FADBF' />
                                                </svg>
                                            </button>
                                            <button className='create-module__link'>
                                                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                    <path d='M10 7H6.5C5.33333 7.16667 2 8 2 12C2 16 5.33333 16.8333 6.5 17H10' stroke='#8B9EE6' strokeWidth='1.5' strokeLinecap='round' />
                                                    <path d='M14 7H17.5C18.6667 7.16667 22 8 22 12C22 16 18.6667 16.8333 17.5 17H14' stroke='#8B9EE6' strokeWidth='1.5' strokeLinecap='round' />
                                                    <path d='M8 12H16' stroke='#8B9EE6' strokeWidth='1.5' strokeLinecap='round' />
                                                </svg>
                                            </button>
                                            <input type='text' placeholder='Название урока' />
                                            <button className='create-module__delete'>
                                                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                    <path
                                                        d='M19.325 9.46826C19.325 9.46826 18.782 16.2033 18.467 19.0403C18.317 20.3953 17.48 21.1893 16.109 21.2143C13.5 21.2613 10.888 21.2643 8.28003 21.2093C6.96103 21.1823 6.13803 20.3783 5.99103 19.0473C5.67403 16.1853 5.13403 9.46826 5.13403 9.46826'
                                                        stroke='#EC9898'
                                                        strokeWidth='1.5'
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                    />
                                                    <path d='M20.7082 6.23975H3.75024' stroke='#EC9898' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                                    <path
                                                        d='M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973'
                                                        stroke='#EC9898'
                                                        strokeWidth='1.5'
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='create-module__item form-group'>
                                        <div className='create-module__input'>
                                            <button className='create-module__drag'>
                                                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                    <path d='M10 4C10 5.10457 9.10457 6 8 6C6.89543 6 6 5.10457 6 4C6 2.89543 6.89543 2 8 2C9.10457 2 10 2.89543 10 4Z' fill='#9FADBF' />
                                                    <path d='M18 4C18 5.10457 17.1046 6 16 6C14.8954 6 14 5.10457 14 4C14 2.89543 14.8954 2 16 2C17.1046 2 18 2.89543 18 4Z' fill='#9FADBF' />
                                                    <path d='M10 12C10 13.1046 9.10457 14 8 14C6.89543 14 6 13.1046 6 12C6 10.8954 6.89543 10 8 10C9.10457 10 10 10.8954 10 12Z' fill='#9FADBF' />
                                                    <path d='M18 12C18 13.1046 17.1046 14 16 14C14.8954 14 14 13.1046 14 12C14 10.8954 14.8954 10 16 10C17.1046 10 18 10.8954 18 12Z' fill='#9FADBF' />
                                                    <path d='M10 20C10 21.1046 9.10457 22 8 22C6.89543 22 6 21.1046 6 20C6 18.8954 6.89543 18 8 18C9.10457 18 10 18.8954 10 20Z' fill='#9FADBF' />
                                                    <path d='M18 20C18 21.1046 17.1046 22 16 22C14.8954 22 14 21.1046 14 20C14 18.8954 14.8954 18 16 18C17.1046 18 18 18.8954 18 20Z' fill='#9FADBF' />
                                                </svg>
                                            </button>
                                            <button className='create-module__link'>
                                                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                    <path d='M10 7H6.5C5.33333 7.16667 2 8 2 12C2 16 5.33333 16.8333 6.5 17H10' stroke='#8B9EE6' strokeWidth='1.5' strokeLinecap='round' />
                                                    <path d='M14 7H17.5C18.6667 7.16667 22 8 22 12C22 16 18.6667 16.8333 17.5 17H14' stroke='#8B9EE6' strokeWidth='1.5' strokeLinecap='round' />
                                                    <path d='M8 12H16' stroke='#8B9EE6' strokeWidth='1.5' strokeLinecap='round' />
                                                </svg>
                                            </button>
                                            <input type='text' placeholder='Название урока' />
                                            <button className='create-module__delete'>
                                                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                    <path
                                                        d='M19.325 9.46826C19.325 9.46826 18.782 16.2033 18.467 19.0403C18.317 20.3953 17.48 21.1893 16.109 21.2143C13.5 21.2613 10.888 21.2643 8.28003 21.2093C6.96103 21.1823 6.13803 20.3783 5.99103 19.0473C5.67403 16.1853 5.13403 9.46826 5.13403 9.46826'
                                                        stroke='#EC9898'
                                                        strokeWidth='1.5'
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                    />
                                                    <path d='M20.7082 6.23975H3.75024' stroke='#EC9898' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                                    <path
                                                        d='M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973'
                                                        stroke='#EC9898'
                                                        strokeWidth='1.5'
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='create-module__item form-group'>
                                        <div className='create-module__input'>
                                            <button className='create-module__drag'>
                                                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                    <path d='M10 4C10 5.10457 9.10457 6 8 6C6.89543 6 6 5.10457 6 4C6 2.89543 6.89543 2 8 2C9.10457 2 10 2.89543 10 4Z' fill='#9FADBF' />
                                                    <path d='M18 4C18 5.10457 17.1046 6 16 6C14.8954 6 14 5.10457 14 4C14 2.89543 14.8954 2 16 2C17.1046 2 18 2.89543 18 4Z' fill='#9FADBF' />
                                                    <path d='M10 12C10 13.1046 9.10457 14 8 14C6.89543 14 6 13.1046 6 12C6 10.8954 6.89543 10 8 10C9.10457 10 10 10.8954 10 12Z' fill='#9FADBF' />
                                                    <path d='M18 12C18 13.1046 17.1046 14 16 14C14.8954 14 14 13.1046 14 12C14 10.8954 14.8954 10 16 10C17.1046 10 18 10.8954 18 12Z' fill='#9FADBF' />
                                                    <path d='M10 20C10 21.1046 9.10457 22 8 22C6.89543 22 6 21.1046 6 20C6 18.8954 6.89543 18 8 18C9.10457 18 10 18.8954 10 20Z' fill='#9FADBF' />
                                                    <path d='M18 20C18 21.1046 17.1046 22 16 22C14.8954 22 14 21.1046 14 20C14 18.8954 14.8954 18 16 18C17.1046 18 18 18.8954 18 20Z' fill='#9FADBF' />
                                                </svg>
                                            </button>
                                            <button className='create-module__link'>
                                                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                    <path d='M10 7H6.5C5.33333 7.16667 2 8 2 12C2 16 5.33333 16.8333 6.5 17H10' stroke='#8B9EE6' strokeWidth='1.5' strokeLinecap='round' />
                                                    <path d='M14 7H17.5C18.6667 7.16667 22 8 22 12C22 16 18.6667 16.8333 17.5 17H14' stroke='#8B9EE6' strokeWidth='1.5' strokeLinecap='round' />
                                                    <path d='M8 12H16' stroke='#8B9EE6' strokeWidth='1.5' strokeLinecap='round' />
                                                </svg>
                                            </button>
                                            <input type='text' placeholder='Название урока' />
                                            <button className='create-module__delete'>
                                                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                    <path
                                                        d='M19.325 9.46826C19.325 9.46826 18.782 16.2033 18.467 19.0403C18.317 20.3953 17.48 21.1893 16.109 21.2143C13.5 21.2613 10.888 21.2643 8.28003 21.2093C6.96103 21.1823 6.13803 20.3783 5.99103 19.0473C5.67403 16.1853 5.13403 9.46826 5.13403 9.46826'
                                                        stroke='#EC9898'
                                                        strokeWidth='1.5'
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                    />
                                                    <path d='M20.7082 6.23975H3.75024' stroke='#EC9898' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                                    <path
                                                        d='M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973'
                                                        stroke='#EC9898'
                                                        strokeWidth='1.5'
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='create-module__item form-group'>
                                        <div className='create-module__input'>
                                            <button className='create-module__drag'>
                                                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                    <path d='M10 4C10 5.10457 9.10457 6 8 6C6.89543 6 6 5.10457 6 4C6 2.89543 6.89543 2 8 2C9.10457 2 10 2.89543 10 4Z' fill='#9FADBF' />
                                                    <path d='M18 4C18 5.10457 17.1046 6 16 6C14.8954 6 14 5.10457 14 4C14 2.89543 14.8954 2 16 2C17.1046 2 18 2.89543 18 4Z' fill='#9FADBF' />
                                                    <path d='M10 12C10 13.1046 9.10457 14 8 14C6.89543 14 6 13.1046 6 12C6 10.8954 6.89543 10 8 10C9.10457 10 10 10.8954 10 12Z' fill='#9FADBF' />
                                                    <path d='M18 12C18 13.1046 17.1046 14 16 14C14.8954 14 14 13.1046 14 12C14 10.8954 14.8954 10 16 10C17.1046 10 18 10.8954 18 12Z' fill='#9FADBF' />
                                                    <path d='M10 20C10 21.1046 9.10457 22 8 22C6.89543 22 6 21.1046 6 20C6 18.8954 6.89543 18 8 18C9.10457 18 10 18.8954 10 20Z' fill='#9FADBF' />
                                                    <path d='M18 20C18 21.1046 17.1046 22 16 22C14.8954 22 14 21.1046 14 20C14 18.8954 14.8954 18 16 18C17.1046 18 18 18.8954 18 20Z' fill='#9FADBF' />
                                                </svg>
                                            </button>
                                            <button className='create-module__link'>
                                                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                    <path d='M10 7H6.5C5.33333 7.16667 2 8 2 12C2 16 5.33333 16.8333 6.5 17H10' stroke='#8B9EE6' strokeWidth='1.5' strokeLinecap='round' />
                                                    <path d='M14 7H17.5C18.6667 7.16667 22 8 22 12C22 16 18.6667 16.8333 17.5 17H14' stroke='#8B9EE6' strokeWidth='1.5' strokeLinecap='round' />
                                                    <path d='M8 12H16' stroke='#8B9EE6' strokeWidth='1.5' strokeLinecap='round' />
                                                </svg>
                                            </button>
                                            <input type='text' placeholder='Название урока' />
                                            <button className='create-module__delete'>
                                                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                    <path
                                                        d='M19.325 9.46826C19.325 9.46826 18.782 16.2033 18.467 19.0403C18.317 20.3953 17.48 21.1893 16.109 21.2143C13.5 21.2613 10.888 21.2643 8.28003 21.2093C6.96103 21.1823 6.13803 20.3783 5.99103 19.0473C5.67403 16.1853 5.13403 9.46826 5.13403 9.46826'
                                                        stroke='#EC9898'
                                                        strokeWidth='1.5'
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                    />
                                                    <path d='M20.7082 6.23975H3.75024' stroke='#EC9898' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                                    <path
                                                        d='M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973'
                                                        stroke='#EC9898'
                                                        strokeWidth='1.5'
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='create-module__item form-group'>
                                        <div className='create-module__input'>
                                            <button className='create-module__drag'>
                                                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                    <path d='M10 4C10 5.10457 9.10457 6 8 6C6.89543 6 6 5.10457 6 4C6 2.89543 6.89543 2 8 2C9.10457 2 10 2.89543 10 4Z' fill='#9FADBF' />
                                                    <path d='M18 4C18 5.10457 17.1046 6 16 6C14.8954 6 14 5.10457 14 4C14 2.89543 14.8954 2 16 2C17.1046 2 18 2.89543 18 4Z' fill='#9FADBF' />
                                                    <path d='M10 12C10 13.1046 9.10457 14 8 14C6.89543 14 6 13.1046 6 12C6 10.8954 6.89543 10 8 10C9.10457 10 10 10.8954 10 12Z' fill='#9FADBF' />
                                                    <path d='M18 12C18 13.1046 17.1046 14 16 14C14.8954 14 14 13.1046 14 12C14 10.8954 14.8954 10 16 10C17.1046 10 18 10.8954 18 12Z' fill='#9FADBF' />
                                                    <path d='M10 20C10 21.1046 9.10457 22 8 22C6.89543 22 6 21.1046 6 20C6 18.8954 6.89543 18 8 18C9.10457 18 10 18.8954 10 20Z' fill='#9FADBF' />
                                                    <path d='M18 20C18 21.1046 17.1046 22 16 22C14.8954 22 14 21.1046 14 20C14 18.8954 14.8954 18 16 18C17.1046 18 18 18.8954 18 20Z' fill='#9FADBF' />
                                                </svg>
                                            </button>
                                            <button className='create-module__link'>
                                                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                    <path d='M10 7H6.5C5.33333 7.16667 2 8 2 12C2 16 5.33333 16.8333 6.5 17H10' stroke='#8B9EE6' strokeWidth='1.5' strokeLinecap='round' />
                                                    <path d='M14 7H17.5C18.6667 7.16667 22 8 22 12C22 16 18.6667 16.8333 17.5 17H14' stroke='#8B9EE6' strokeWidth='1.5' strokeLinecap='round' />
                                                    <path d='M8 12H16' stroke='#8B9EE6' strokeWidth='1.5' strokeLinecap='round' />
                                                </svg>
                                            </button>
                                            <input type='text' placeholder='Название урока' />
                                            <button className='create-module__delete'>
                                                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                    <path
                                                        d='M19.325 9.46826C19.325 9.46826 18.782 16.2033 18.467 19.0403C18.317 20.3953 17.48 21.1893 16.109 21.2143C13.5 21.2613 10.888 21.2643 8.28003 21.2093C6.96103 21.1823 6.13803 20.3783 5.99103 19.0473C5.67403 16.1853 5.13403 9.46826 5.13403 9.46826'
                                                        stroke='#EC9898'
                                                        strokeWidth='1.5'
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                    />
                                                    <path d='M20.7082 6.23975H3.75024' stroke='#EC9898' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                                    <path
                                                        d='M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973'
                                                        stroke='#EC9898'
                                                        strokeWidth='1.5'
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <button className='create-module__add btn btn-outline'>
                                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                        <path d='M12.039 4V20' stroke='#1B2C3E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                        <path d='M20 12.038H4' stroke='#1B2C3E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                    </svg>
                                    <span>Добавить урок</span>
                                </button>
                            </div>
                            <div className='create-module card-bg'>
                                <div className='create-module__top'>
                                    <h3 className='create-module__title display-4'>Модуль 3</h3>
                                </div>
                                <div className='create-module__items'>
                                    <div className='create-module__item form-group'>
                                        <div className='create-module__input'>
                                            <input type='text' placeholder='Название урока' />
                                        </div>
                                    </div>
                                </div>
                                <button className='create-module__add btn btn-outline'>
                                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                        <path d='M12.039 4V20' stroke='#1B2C3E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                        <path d='M20 12.038H4' stroke='#1B2C3E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                    </svg>
                                    <span>Добавить урок</span>
                                </button>
                            </div>
                            <div className='create-module card-bg'>
                                <div className='create-module__top'>
                                    <h3 className='create-module__title display-4'>Тестовый урок</h3>
                                </div>
                                <div className='create-module__items'>
                                    <div className='create-module__item form-group'>
                                        <label htmlFor=''>Выберите тестовый урок</label>
                                        <select>
                                            <option selected hidden>
                                                Выберите тестовый урок
                                            </option>
                                            <option>Без тестового урока</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-tab-path='3' className='course-edit__content'>
                            <div className='create-about card-bg'>
                                <h3 className='create-about__title display-4'>О курсе</h3>
                                <div className='create-about__editor'>
                                    <textarea></textarea>
                                </div>
                            </div>

                            <div className='create-whom card-bg'>
                                <h3 className='create-whom__title display-4'>О курсе</h3>
                                <div className='create-whom__group'>
                                    <div className='create-whom__group-top'>
                                        <div className='create-whom__subtitle'>Описание 1</div>
                                        <button className='create-whom__delete'>
                                            <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                <path
                                                    d='M19.3249 9.46826C19.3249 9.46826 18.7819 16.2033 18.4669 19.0403C18.3169 20.3953 17.4799 21.1893 16.1089 21.2143C13.4999 21.2613 10.8879 21.2643 8.27991 21.2093C6.96091 21.1823 6.13791 20.3783 5.99091 19.0473C5.67391 16.1853 5.13391 9.46826 5.13391 9.46826'
                                                    stroke='#EC9898'
                                                    strokeWidth='1.5'
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                />
                                                <path d='M20.7082 6.23975H3.75024' stroke='#EC9898' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                                <path
                                                    d='M17.4407 6.23973C16.6557 6.23973 15.9797 5.68473 15.8257 4.91573L15.5827 3.69973C15.4327 3.13873 14.9247 2.75073 14.3457 2.75073H10.1127C9.5337 2.75073 9.0257 3.13873 8.8757 3.69973L8.6327 4.91573C8.4787 5.68473 7.8027 6.23973 7.0177 6.23973'
                                                    stroke='#EC9898'
                                                    strokeWidth='1.5'
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className='create-whom__uploaded'>
                                        <div className='create-whom__img'>
                                            <img src='./assets/img/upload1.jpg' alt='' />
                                        </div>
                                        <div className='create-whom__uploaded-right'>
                                            <div className='create-whom__hint'>
                                                Соотношение сторон: 1:1 (рекомендуемое разрешение: 248x248) <br />
                                                PNG, JPG до 1 MБ
                                            </div>
                                            <div className='create-whom__buttons'>
                                                <button className='create-whom__new btn btn-blue'>Загрузить новое</button>
                                                <button className='create-whom__remove-img btn btn-outline'>Удалить</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='create-whom__form-group form-group'>
                                        <label>Заголовок</label>
                                        <input type='text' />
                                    </div>
                                    <div className='create-whom__form-group form-group'>
                                        <label>
                                            <span>Описание</span>
                                            <span>335/600</span>
                                        </label>
                                        <textarea></textarea>
                                    </div>
                                </div>
                                <div className='create-whom__group'>
                                    <div className='create-whom__group-top'>
                                        <div className='create-whom__subtitle'>Описание 2</div>
                                        <button className='create-whom__delete'>
                                            <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                <path
                                                    d='M19.3249 9.46826C19.3249 9.46826 18.7819 16.2033 18.4669 19.0403C18.3169 20.3953 17.4799 21.1893 16.1089 21.2143C13.4999 21.2613 10.8879 21.2643 8.27991 21.2093C6.96091 21.1823 6.13791 20.3783 5.99091 19.0473C5.67391 16.1853 5.13391 9.46826 5.13391 9.46826'
                                                    stroke='#EC9898'
                                                    strokeWidth='1.5'
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                />
                                                <path d='M20.7082 6.23975H3.75024' stroke='#EC9898' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                                <path
                                                    d='M17.4407 6.23973C16.6557 6.23973 15.9797 5.68473 15.8257 4.91573L15.5827 3.69973C15.4327 3.13873 14.9247 2.75073 14.3457 2.75073H10.1127C9.5337 2.75073 9.0257 3.13873 8.8757 3.69973L8.6327 4.91573C8.4787 5.68473 7.8027 6.23973 7.0177 6.23973'
                                                    stroke='#EC9898'
                                                    strokeWidth='1.5'
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className='create-whom__uploaded'>
                                        <div className='create-whom__img'>
                                            <img src='./assets/img/upload2.jpg' alt='' />
                                        </div>
                                        <div className='create-whom__uploaded-right'>
                                            <div className='create-whom__hint'>
                                                Соотношение сторон: 1:1 (рекомендуемое разрешение: 248x248) <br />
                                                PNG, JPG до 1 MБ
                                            </div>
                                            <div className='create-whom__buttons'>
                                                <button className='create-whom__new btn btn-blue'>Загрузить новое</button>
                                                <button className='create-whom__remove-img btn btn-outline'>Удалить</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='create-whom__form-group form-group'>
                                        <label>Заголовок</label>
                                        <input type='text' />
                                    </div>
                                    <div className='create-whom__form-group form-group'>
                                        <label>
                                            <span>Описание</span>
                                            <span>335/600</span>
                                        </label>
                                        <textarea></textarea>
                                    </div>
                                </div>
                                <div className='create-whom__group'>
                                    <div className='create-whom__group-top'>
                                        <div className='create-whom__subtitle'>Описание 3</div>
                                        <button className='create-whom__delete'>
                                            <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                <path
                                                    d='M19.3249 9.46826C19.3249 9.46826 18.7819 16.2033 18.4669 19.0403C18.3169 20.3953 17.4799 21.1893 16.1089 21.2143C13.4999 21.2613 10.8879 21.2643 8.27991 21.2093C6.96091 21.1823 6.13791 20.3783 5.99091 19.0473C5.67391 16.1853 5.13391 9.46826 5.13391 9.46826'
                                                    stroke='#EC9898'
                                                    strokeWidth='1.5'
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                />
                                                <path d='M20.7082 6.23975H3.75024' stroke='#EC9898' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                                <path
                                                    d='M17.4407 6.23973C16.6557 6.23973 15.9797 5.68473 15.8257 4.91573L15.5827 3.69973C15.4327 3.13873 14.9247 2.75073 14.3457 2.75073H10.1127C9.5337 2.75073 9.0257 3.13873 8.8757 3.69973L8.6327 4.91573C8.4787 5.68473 7.8027 6.23973 7.0177 6.23973'
                                                    stroke='#EC9898'
                                                    strokeWidth='1.5'
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className='create-whom__upload'>
                                        <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path
                                                d='M5.33325 21.3333L11.4479 15.2186C11.948 14.7187 12.6261 14.4378 13.3333 14.4378C14.0404 14.4378 14.7185 14.7187 15.2186 15.2186L21.3333 21.3333M18.6666 18.6666L20.7813 16.5519C21.2813 16.052 21.9595 15.7712 22.6666 15.7712C23.3737 15.7712 24.0518 16.052 24.5519 16.5519L26.6666 18.6666M18.6666 10.6666H18.6799M7.99992 26.6666H23.9999C24.7072 26.6666 25.3854 26.3856 25.8855 25.8855C26.3856 25.3854 26.6666 24.7072 26.6666 23.9999V7.99992C26.6666 7.29267 26.3856 6.6144 25.8855 6.1143C25.3854 5.6142 24.7072 5.33325 23.9999 5.33325H7.99992C7.29267 5.33325 6.6144 5.6142 6.1143 6.1143C5.6142 6.6144 5.33325 7.29267 5.33325 7.99992V23.9999C5.33325 24.7072 5.6142 25.3854 6.1143 25.8855C6.6144 26.3856 7.29267 26.6666 7.99992 26.6666Z'
                                                stroke='#C5D6F1'
                                                strokeWidth='2'
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                            />
                                        </svg>
                                        <div className='create-whom__upload-title'>
                                            <strong>Загрузите файл</strong>
                                            <span>или перетащите его сюда</span>
                                        </div>
                                        <div className='create-whom__upload-hint'>
                                            Соотношение сторон: 1:1 (рекомендуемое разрешение: 248x248) <br />
                                            PNG, JPG до 1 MБ
                                        </div>
                                        <input type='file' className='create-whom__upload-input' />
                                    </div>
                                    <div className='create-whom__form-group form-group'>
                                        <label>Заголовок</label>
                                        <input type='text' />
                                    </div>
                                    <div className='create-whom__form-group form-group'>
                                        <label>
                                            <span>Описание</span>
                                            <span>335/600</span>
                                        </label>
                                        <textarea></textarea>
                                    </div>
                                </div>
                                <button className='create-whom__add btn btn-outline'>
                                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                        <path d='M12.039 4V20' stroke='#1B2C3E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                        <path d='M20 12.038H4' stroke='#1B2C3E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                    </svg>
                                    <span>Добавить описание</span>
                                </button>
                            </div>

                            <div className='create-price card-bg'>
                                <h3 className='create-price__title display-4'>Стоимость</h3>
                                <div className='create-price__group'>
                                    <div className='create-price__group-top'>
                                        <div className='create-price__subtitle'>Вариант участия 1</div>
                                        <button className='create-price__delete'>
                                            <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                <path
                                                    d='M19.3249 9.46826C19.3249 9.46826 18.7819 16.2033 18.4669 19.0403C18.3169 20.3953 17.4799 21.1893 16.1089 21.2143C13.4999 21.2613 10.8879 21.2643 8.27991 21.2093C6.96091 21.1823 6.13791 20.3783 5.99091 19.0473C5.67391 16.1853 5.13391 9.46826 5.13391 9.46826'
                                                    stroke='#EC9898'
                                                    strokeWidth='1.5'
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                />
                                                <path d='M20.7082 6.23975H3.75024' stroke='#EC9898' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                                <path
                                                    d='M17.4407 6.23973C16.6557 6.23973 15.9797 5.68473 15.8257 4.91573L15.5827 3.69973C15.4327 3.13873 14.9247 2.75073 14.3457 2.75073H10.1127C9.5337 2.75073 9.0257 3.13873 8.8757 3.69973L8.6327 4.91573C8.4787 5.68473 7.8027 6.23973 7.0177 6.23973'
                                                    stroke='#EC9898'
                                                    strokeWidth='1.5'
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className='create-price__grid'>
                                        <div className='create-price__form-group form-group'>
                                            <label>Название</label>
                                            <input type='text' />
                                        </div>
                                        <div className='create-price__form-group form-group'>
                                            <label>Длительность обучения</label>
                                            <input type='text' />
                                        </div>
                                        <div className='create-price__form-group form-group'>
                                            <label>Стоимость без скидки (в рублях)</label>
                                            <input type='number' />
                                        </div>
                                        <div className='create-price__form-group form-group'>
                                            <label>Стоимость со скидкой (в рублях)</label>
                                            <input type='number' />
                                        </div>
                                    </div>
                                    <div className='create-price__checks'>
                                        <div className='create-price__check checkbox'>
                                            <input checked type='checkbox' className='checkbox' id='module1' />
                                            <label htmlFor='module1'>Модуль 1</label>
                                        </div>
                                        <div className='create-price__check checkbox'>
                                            <input type='checkbox' className='checkbox' id='module2' />
                                            <label htmlFor='module2'>Модуль 2</label>
                                        </div>
                                        <div className='create-price__check checkbox'>
                                            <input type='checkbox' className='checkbox' id='module3' />
                                            <label htmlFor='module3'>Модуль 3</label>
                                        </div>
                                    </div>
                                    <div className='create-price__text form-group'>
                                        <label>
                                            <span>Описание (новый пункт через Enter)</span>
                                            <span>335/600</span>
                                        </label>
                                        <textarea></textarea>
                                    </div>
                                </div>
                                <div className='create-price__group'>
                                    <div className='create-price__group-top'>
                                        <div className='create-price__subtitle'>Вариант участия 2</div>
                                        <button className='create-price__delete'>
                                            <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                <path
                                                    d='M19.3249 9.46826C19.3249 9.46826 18.7819 16.2033 18.4669 19.0403C18.3169 20.3953 17.4799 21.1893 16.1089 21.2143C13.4999 21.2613 10.8879 21.2643 8.27991 21.2093C6.96091 21.1823 6.13791 20.3783 5.99091 19.0473C5.67391 16.1853 5.13391 9.46826 5.13391 9.46826'
                                                    stroke='#EC9898'
                                                    strokeWidth='1.5'
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                />
                                                <path d='M20.7082 6.23975H3.75024' stroke='#EC9898' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                                <path
                                                    d='M17.4407 6.23973C16.6557 6.23973 15.9797 5.68473 15.8257 4.91573L15.5827 3.69973C15.4327 3.13873 14.9247 2.75073 14.3457 2.75073H10.1127C9.5337 2.75073 9.0257 3.13873 8.8757 3.69973L8.6327 4.91573C8.4787 5.68473 7.8027 6.23973 7.0177 6.23973'
                                                    stroke='#EC9898'
                                                    strokeWidth='1.5'
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className='create-price__grid'>
                                        <div className='create-price__form-group form-group'>
                                            <label>Название</label>
                                            <input type='text' />
                                        </div>
                                        <div className='create-price__form-group form-group'>
                                            <label>Длительность обучения</label>
                                            <input type='text' />
                                        </div>
                                        <div className='create-price__form-group form-group'>
                                            <label>Стоимость без скидки (в рублях)</label>
                                            <input type='number' />
                                        </div>
                                        <div className='create-price__form-group form-group'>
                                            <label>Стоимость со скидкой (в рублях)</label>
                                            <input type='number' />
                                        </div>
                                    </div>
                                    <div className='create-price__checks'>
                                        <div className='create-price__check checkbox'>
                                            <input checked type='checkbox' className='checkbox' id='module4' />
                                            <label htmlFor='module4'>Модуль 1</label>
                                        </div>
                                        <div className='create-price__check checkbox'>
                                            <input checked type='checkbox' className='checkbox' id='module5' />
                                            <label htmlFor='module5'>Модуль 2</label>
                                        </div>
                                        <div className='create-price__check checkbox'>
                                            <input type='checkbox' className='checkbox' id='module6' />
                                            <label htmlFor='module6'>Модуль 3</label>
                                        </div>
                                    </div>
                                    <div className='create-price__text form-group'>
                                        <label>
                                            <span>Описание (новый пункт через Enter)</span>
                                            <span>335/600</span>
                                        </label>
                                        <textarea></textarea>
                                    </div>
                                </div>
                                <div className='create-price__group'>
                                    <div className='create-price__group-top'>
                                        <div className='create-price__subtitle'>Вариант участия 3</div>
                                        <button className='create-price__delete'>
                                            <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                <path
                                                    d='M19.3249 9.46826C19.3249 9.46826 18.7819 16.2033 18.4669 19.0403C18.3169 20.3953 17.4799 21.1893 16.1089 21.2143C13.4999 21.2613 10.8879 21.2643 8.27991 21.2093C6.96091 21.1823 6.13791 20.3783 5.99091 19.0473C5.67391 16.1853 5.13391 9.46826 5.13391 9.46826'
                                                    stroke='#EC9898'
                                                    strokeWidth='1.5'
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                />
                                                <path d='M20.7082 6.23975H3.75024' stroke='#EC9898' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                                <path
                                                    d='M17.4407 6.23973C16.6557 6.23973 15.9797 5.68473 15.8257 4.91573L15.5827 3.69973C15.4327 3.13873 14.9247 2.75073 14.3457 2.75073H10.1127C9.5337 2.75073 9.0257 3.13873 8.8757 3.69973L8.6327 4.91573C8.4787 5.68473 7.8027 6.23973 7.0177 6.23973'
                                                    stroke='#EC9898'
                                                    strokeWidth='1.5'
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className='create-price__grid'>
                                        <div className='create-price__form-group form-group'>
                                            <label>Название</label>
                                            <input type='text' />
                                        </div>
                                        <div className='create-price__form-group form-group'>
                                            <label>Длительность обучения</label>
                                            <input type='text' />
                                        </div>
                                        <div className='create-price__form-group form-group'>
                                            <label>Стоимость без скидки (в рублях)</label>
                                            <input type='number' />
                                        </div>
                                        <div className='create-price__form-group form-group'>
                                            <label>Стоимость со скидкой (в рублях)</label>
                                            <input type='number' />
                                        </div>
                                    </div>
                                    <div className='create-price__checks'>
                                        <div className='create-price__check checkbox'>
                                            <input checked type='checkbox' className='checkbox' id='module7' />
                                            <label htmlFor='module7'>Модуль 1</label>
                                        </div>
                                        <div className='create-price__check checkbox'>
                                            <input checked type='checkbox' className='checkbox' id='module8' />
                                            <label htmlFor='module8'>Модуль 2</label>
                                        </div>
                                        <div className='create-price__check checkbox'>
                                            <input checked type='checkbox' className='checkbox' id='module9' />
                                            <label htmlFor='module9'>Модуль 3</label>
                                        </div>
                                    </div>
                                    <div className='create-price__text form-group'>
                                        <label>
                                            <span>Описание (новый пункт через Enter)</span>
                                            <span>335/600</span>
                                        </label>
                                        <textarea></textarea>
                                    </div>
                                </div>
                                <button className='create-price__add btn btn-outline'>
                                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                        <path d='M12.039 4V20' stroke='#1B2C3E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                        <path d='M20 12.038H4' stroke='#1B2C3E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                    </svg>
                                    <span>Добавить вариант участия</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='course-edit__right'>
                        <div className='course-edit__right'>
                            <div className='course-edit__hint'>
                                <Button className='course-edit__hint-btn' onClick={() => {}} color={'blue'}>
                                    Сохранить
                                </Button>
                                <Button className='course-edit__hint-cancel' onClick={() => {}} outline>
                                    <span>Отменить</span>
                                </Button>
                                <div className='course-edit__hint-desc'>Ваши изменения будут отправлены на модерацию.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AddCourse
