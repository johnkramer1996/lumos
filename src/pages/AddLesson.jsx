import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { RouteNames } from '../routes'
import { allActionCreators } from '../store/reducers/action-creators'

const AddLesson = () => {
    const [name, setName] = useState('name')
    const [category_id, setCategoryId] = useState('2')
    const [type_study, setStudy] = useState('3')
    const [format_study, setFormatStudy] = useState('1')
    const [sale_subscribe, setSubscribe] = useState('1')
    const [width, setWidth] = useState('1')

    const dispatch = useDispatch()
    const { addLesson } = allActionCreators

    const onSubmit = (e) => {
        e.preventDefault()

        const body = new FormData()
        body.append('name', name)
        body.append('category_id', category_id)
        body.append('type_study', type_study)
        body.append('format_study', format_study)
        body.append('sale_subscribe', sale_subscribe)
        body.append('width', width)
        body.append('image', document.querySelector('input[name="image"]')?.files[0])

        dispatch(addLesson(body))
    }
    return (
        <div className='blog'>
            <Link to={RouteNames.LESSONS} className='modal-target btn btn-blue'>
                Вернуть к урокам
            </Link>

            <h1>Создать урок</h1>

            <div className='modal-dialog'>
                <div className='modal__content'>
                    <form className='modal__form' onSubmit={onSubmit}>
                        <div className='modal__form-group form-group'>
                            <label>Name</label>
                            <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className='modal__form-group form-group'>
                            <label>Category id</label>
                            <input type='text' placeholder='Category id' value={category_id} onChange={(e) => setCategoryId(e.target.value)} />
                        </div>
                        <div className='modal__form-group form-group'>
                            <label>Type study</label>
                            <input type='text' placeholder='Type study' value={type_study} onChange={(e) => setStudy(e.target.value)} />
                        </div>
                        <div className='modal__form-group form-group'>
                            <label>Format study</label>
                            <input type='text' placeholder='Format study' value={format_study} onChange={(e) => setFormatStudy(e.target.value)} />
                        </div>
                        <div className='modal__form-group form-group'>
                            <label>Sale subscribe</label>
                            <input type='text' placeholder='Sale subscribe' value={sale_subscribe} onChange={(e) => setSubscribe(e.target.value)} />
                        </div>
                        <div className='modal__form-group form-group'>
                            <label>Width</label>
                            <input type='text' placeholder='Width' value={name} onChange={(e) => setWidth(e.target.value)} />
                        </div>
                        <div className='modal__form-group form-group'>
                            <label>E-mail</label>
                            <input type='file' name='image' />
                        </div>
                        <button className='modal__form-btn btn btn-blue'>Создать</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddLesson
