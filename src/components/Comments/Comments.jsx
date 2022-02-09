import React from 'react'
import { ReactComponent as ArrowDownSvg } from 'svg/edit.svg'
import CommentsItem from './CommentsItem'

const Comments = () => {
    return (
        <div className='blog-comments'>
            <h2 className='blog-comments__title'>10 комментариев</h2>
            <div className='blog-comments__inner'>
                <div className='blog-comments__top'>
                    <div className='blog-comments__avatar'>
                        <img src='/assets/img/avatar2.jpg' alt='' />
                    </div>
                    <textarea placeholder='Написать комментарий или задать вопрос...'></textarea>
                </div>
                <div className='blog-comments__group'>
                    <div className='blog-comments__main'>
                        <CommentsItem />
                    </div>
                    <div className='blog-comments__sub'>
                        <CommentsItem />
                        <CommentsItem />
                        <CommentsItem />
                        <button className='blog-comments__more'>
                            <ArrowDownSvg />
                            <span>Показать еще 4 комментария</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comments
