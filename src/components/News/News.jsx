import React from 'react'
import NewsItem from './NewsItem'

const News = ({ title, popularItems = [], newItems = [] }) => {
    return (
        <section className='blog'>
            <div className='container'>
                <h1 className='blog__title display-2'>{title}</h1>
                <div className='blog__tabs'>
                    <div className='blog__tab blog__tab--active'>Все</div>
                    <div className='blog__tab'>Раздел блога</div>
                    <div className='blog__tab'>Название раздела</div>
                    <div className='blog__tab'>Раздел</div>
                    <div className='blog__tab'>Раздел блога</div>
                    <div className='blog__tab'>Название раздела</div>
                    <div className='blog__tab'>Раздела</div>
                </div>
                <div className='blog__group'>
                    <div className='blog__group-top'>
                        <h2 className='blog__title display-3'>Популярные статьи</h2>
                        <button className='blog__all btn btn-outline'>Показать все</button>
                    </div>
                    <div className='blog__items'>
                        {popularItems.map(({ id, ...rest }) => (
                            <NewsItem key={id} {...rest} />
                        ))}
                    </div>
                    <div className='blog__group'>
                        <div className='blog__group-top'>
                            <h2 className='blog__title display-3'>Новые статьи</h2>
                            <button className='blog__all btn btn-outline'>Показать все</button>
                        </div>
                        <div className='blog__items'>
                            {newItems.map(({ id, ...rest }) => (
                                <NewsItem key={id} {...rest} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default News
