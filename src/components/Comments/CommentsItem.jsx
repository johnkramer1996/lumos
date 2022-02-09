import React from 'react'

const CommentsItem = () => {
    return (
        <div className='blog-comments__item'>
            <div className='blog-comments__avatar'>
                <img src='/assets/img/avatar3.jpg' alt='' />
            </div>
            <div className='blog-comments__item-content'>
                <div className='blog-comments__item-top'>
                    <div className='blog-comments__item-name'>Мария Мариева</div>
                </div>
                <div className='blog-comments__item-text'>
                    Accumsan tortor augue velit est amet lobortis. Sit pretium, urna, lobortis eget vitae sit aliquet id. Enim vitae aenean est, pharetra quis volutpat etiam lorem turpis?
                </div>
                <div className='blog-comments__item-bottom'>
                    <div className='blog-comments__item-date'>10 сен 2020</div>
                    <button className='blog-comments__item-btn'>Ответить</button>
                </div>
            </div>
        </div>
    )
}

export default CommentsItem
