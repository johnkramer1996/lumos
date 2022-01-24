import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allActionCreators } from '../store/reducers/action-creators'
import { Link } from 'react-router-dom'
import { RouteNames } from 'routes'

const Lessons = () => {
    const dispatch = useDispatch()
    const { fetchLessons } = allActionCreators
    const { lessons } = useSelector((state) => state.lessons)

    useEffect(() => {
        dispatch(fetchLessons())
    }, [])

    return (
        <>
            <div className='blog'>
                <Link to={RouteNames.ADD_LESSON} className='modal-target btn btn-blue'>
                    Создать урок
                </Link>

                <h1>Курсы</h1>

                <div className='blog__items'>
                    {lessons.reverse().map(({ id, image, name, created_at }) => (
                        <div className='blog-page__text' key={id}>
                            {`https://lumus.wistis.ru/api/v1/cabinet/courses/${image}`}
                            {/* <img src={`https://lumus.wistis.ru/api/v1/cabinet/courses/${image}`} alt='' className='blog-page__img' /> */}
                            <h4 className='blog-page__text-title'>{name}</h4>
                            <div>{created_at}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Lessons
