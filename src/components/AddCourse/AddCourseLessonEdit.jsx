import React, { useEffect } from 'react'
import { ReactComponent as DeleteSvg } from 'svg/delete.svg'
import { ReactComponent as DocumentSvg } from 'svg/document.svg'
import { ReactComponent as AddSvg } from 'svg/add-sm.svg'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch, useInput, useRequest } from 'hooks'
import { coursesSelectors } from 'store/selectors'
import { Input } from 'components/ui'

const AddCourseLessonEdit = () => {
    const { courseId, lessonId } = useParams()
    const { fetchLesson, setLesson } = useDispatch()
    const lesson = useSelector(coursesSelectors.getLesson)

    const name = useInput({ bind: { name: 'name' }, is: { isRequired: true, isName: true } })
    const description = useInput({ bind: { name: 'description' }, is: { isRequired: true, isTextarea: true } })

    useEffect(() => {
        name.setValue(lesson.name || '')
        description.setValue(lesson.description || '')
    }, [lesson])

    const fetchLessonRequest = useRequest({
        request: fetchLesson,
        // error: ({ error }) => error.status === 404 && toError(),
    })
    useEffect(() => {
        fetchLessonRequest.call({ courseId, lessonId })
        return () => {
            setLesson({})
        }
    }, [])

    console.log(lesson)

    return (
        <>
            <div className='lesson-edit__info card-bg'>
                <h3 className='lesson-edit__info-title display-4'>Основная информация</h3>
                <Input input={name} label={'Название'} />
                <div className='lesson-edit__switch switch'>
                    <input type='checkbox' id='switch1' />
                    <label htmlFor='switch1'>Комментарии</label>
                </div>
                <div className='lesson-edit__switch switch'>
                    <input defaultChecked={true} type='checkbox' id='switch2' />
                    <label htmlFor='switch2'>Тест</label>
                </div>
            </div>
            <div className='create-about card-bg'>
                <h3 className='create-about__title display-4'>Урок</h3>
                <div className='create-about__editor'>
                    <Input input={description} />
                </div>
            </div>
            <div className='lesson-edit__files card-bg'>
                <div className='lesson-edit__files-top'>
                    <h3 className='lesson-edit__files-title display-4'>Файлы</h3>
                    <div className='lesson-edit__files-num'>4 урока</div>
                </div>
                <div className='lesson-edit__files-items'>
                    <div className='lesson-edit__files-item'>
                        <i className='lesson-edit__files-item-icon'>
                            <DocumentSvg />
                        </i>
                        <div className='lesson-edit__files-item-info'>
                            <div className='lesson-edit__files-item-name'>file_name.pdf</div>
                            <div className='lesson-edit__files-item-weight'>1.2 Мб</div>
                        </div>
                        <button className='lesson-edit__files-item-delete'>
                            <DeleteSvg />
                        </button>
                    </div>
                </div>
                <div className='lesson-edit__files-upload'>
                    <div className='lesson-edit__files-upload-title'>
                        <strong>Загрузите файл</strong>
                        <span>или перетащите его сюда</span>
                    </div>
                    <div className='lesson-edit__files-upload-hint'>до 10 MБ</div>
                    <input type='file' className='lesson-edit__files-upload-input' />
                </div>
            </div>
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
        </>
    )
}

export default AddCourseLessonEdit
