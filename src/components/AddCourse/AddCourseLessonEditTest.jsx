import React from 'react'
import { ReactComponent as DeleteSvg } from 'svg/delete.svg'
import { ReactComponent as AddSvg } from 'svg/add-sm.svg'

const AddCourseLessonEditTest = () => {
    return (
        <div className='lesson-test card-bg'>
            <div className='lesson-test__top'>
                <h3 className='lesson-test__title display-4'>Тест</h3>
                <div className='lesson-test__num'>2 вопроса</div>
            </div>
            <div className='lesson-test__group'>
                <div className='lesson-test__group-top'>
                    <div className='lesson-test__subtitle'>Вопрос 1</div>
                    <button className='lesson-test__delete'>
                        <DeleteSvg />
                    </button>
                </div>
                <div className='lesson-test__form-group form-group'>
                    <label>
                        <span>Вопрос</span>
                        <span>335/600</span>
                    </label>
                    <textarea></textarea>
                </div>
                <div className='lesson-test__form-group form-group'>
                    <select>
                        <option defaultValue>Сколько правильных ответов</option>
                        <option>Один правильный вариант</option>
                    </select>
                </div>

                <div className='lesson-test__variants'>
                    <div className='lesson-test__variants-title'>Введите варианты ответов и выберите правильный</div>
                    <div className='lesson-test__variants-items'>
                        <div className='lesson-test__variants-item form-group'>
                            <div className='radio'>
                                <input type='radio' className='radio' id='variant6' name='variant' />
                                <label htmlFor='variant6'></label>
                            </div>
                            <input type='text' placeholder='Вариант ответа' />
                            <button className='lesson-test__variants-delete' type='button'>
                                <DeleteSvg />
                            </button>
                        </div>
                        <div className='lesson-test__variants-item form-group'>
                            <div className='radio'>
                                <input type='radio' defaultChecked={true} className='radio' id='variant7' name='variant' />
                                <label htmlFor='variant7'></label>
                            </div>
                            <input type='text' placeholder='Вариант ответа' />
                            <button className='lesson-test__variants-delete' type='button'>
                                <DeleteSvg />
                            </button>
                        </div>
                        <div className='lesson-test__variants-item form-group'>
                            <div className='radio'>
                                <input type='radio' defaultChecked={true} className='radio' id='variant8' name='variant' />
                                <label htmlFor='variant8'></label>
                            </div>
                            <input type='text' placeholder='Вариант ответа' />
                            <button className='lesson-test__variants-delete' type='button'>
                                <DeleteSvg />
                            </button>
                        </div>
                        <div className='lesson-test__variants-item form-group'>
                            <div className='radio'>
                                <input type='radio' className='radio' id='variant9' name='variant' />
                                <label htmlFor='variant9'></label>
                            </div>
                            <input type='text' placeholder='Вариант ответа' />
                            <button className='lesson-test__variants-delete' type='button'>
                                <DeleteSvg />
                            </button>
                        </div>
                    </div>
                    <button className='lesson-test__variants-add btn btn-light-blue'>
                        <AddSvg />
                        <span>Добавить вариант</span>
                    </button>
                </div>
            </div>
            <div className='lesson-test__group'>
                <div className='lesson-test__group-top'>
                    <div className='lesson-test__subtitle'>Вопрос 2</div>
                    <button className='lesson-test__delete'>
                        <DeleteSvg />
                    </button>
                </div>
                <div className='lesson-test__form-group form-group'>
                    <label>
                        <span>Вопрос</span>
                        <span>335/600</span>
                    </label>
                    <textarea></textarea>
                </div>
                <div className='lesson-test__form-group form-group'>
                    <select>
                        <option defaultValue>Сколько правильных ответов</option>
                        <option>Один правильный вариант</option>
                    </select>
                </div>

                <div className='lesson-test__variants'>
                    <div className='lesson-test__variants-title'>Введите варианты ответов и выберите правильный</div>
                    <div className='lesson-test__variants-items'>
                        <div className='lesson-test__variants-item form-group'>
                            <div className='checkbox'>
                                <input type='checkbox' className='checkbox' id='variant1' />
                                <label htmlFor='variant1'></label>
                            </div>
                            <input type='text' placeholder='Вариант ответа' />
                            <button className='lesson-test__variants-delete' type='button'>
                                <DeleteSvg />
                            </button>
                        </div>
                    </div>
                    <button className='lesson-test__variants-add btn btn-light-blue'>
                        <AddSvg />
                        <span>Добавить вариант</span>
                    </button>
                </div>
            </div>
            <button className='lesson-test__add btn btn-outline'>
                <AddSvg />
                <span>Добавить вопрос</span>
            </button>
            <div className='lesson-test__bottom'>
                <div className='lesson-test__subtitle'>Условие прохождения</div>
                <div className='lesson-test__form-group form-group'>
                    <label>Количество правильных ответов для успешного прохождения</label>
                    <select>
                        <option defaultValue>2</option>
                        <option>3</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default AddCourseLessonEditTest
