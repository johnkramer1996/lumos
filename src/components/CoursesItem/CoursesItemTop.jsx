import React from 'react'
import { useSelector } from 'react-redux'
import { declOfNum, getDeclOfArray, getImgUrl } from 'utils'
import { ReactComponent as LikeSvg } from 'svg/like.svg'
import { ReactComponent as ShareSvg } from 'svg/share.svg'
import { ReactComponent as FavoriteSvg } from 'svg/favorite.svg'

const CoursesItemTop = () => {
    const { name, category_id, trainer: { avatar, last_name, name: trainerName, first_name, all_users = 0, count_likes = 0 } = {} } = useSelector(({ frontCourses }) => frontCourses.course)
    const { themes = [] } = useSelector(({ system }) => system.references)
    const { name: categoryName } = themes[category_id] || {}

    return (
        <section className='course-top'>
            <div className='container'>
                <div className='course-top__title display-3'>{name}</div>
                <div className='course-top__bottom'>
                    <div className='course-top__left'>
                        <div className='course-top__user'>
                            <img src={getImgUrl(avatar)} alt='' />
                            <span>
                                {first_name || trainerName} {last_name}
                            </span>
                        </div>
                        <div className='course-top__category'>{categoryName}</div>
                        <div className='course-top__student'>
                            {all_users} {declOfNum(all_users, getDeclOfArray['users'])}
                        </div>
                    </div>
                    <div className='course-top__right'>
                        <div className='course-top__nav'>
                            <button className='course-top__nav-item course-top__like'>
                                <LikeSvg />
                                <span>{count_likes}</span>
                            </button>
                            <button className='course-top__nav-item'>
                                <ShareSvg />
                                <span>Поделиться</span>
                            </button>
                            <button className='course-top__nav-item'>
                                <FavoriteSvg />
                                <span>В избранное</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CoursesItemTop
