import React from 'react'

const AddCourseTab3Price = () => {
    return (
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
                    <input type='checkbox' className='checkbox' id='module1' />
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
    )
}

export default AddCourseTab3Price