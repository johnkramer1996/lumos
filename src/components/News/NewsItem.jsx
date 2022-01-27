import React from 'react'
import { RouteNames } from 'routes'

const NewsItem = ({ img, category, title, descr, author, numberComments }) => {
    return (
        <div className='blog__item'>
            <div className='blog-card'>
                <div className='blog-card__img'>
                    <img src={img} alt='' />
                </div>
                <div className='blog-card__content'>
                    <div className='blog-card__category'>{category}</div>
                    <a href={RouteNames.NEWS + '/1'} className='blog-card__title'>
                        {title}
                    </a>
                    <div className='blog-card__desc'>{descr}</div>
                    <div className='blog-card__bottom'>
                        <div className='blog-card__name'>
                            <img src='/assets/img/avatar5.jpg' alt='' />
                            <span>{author}</span>
                        </div>
                        <div className='blog-card__comments'>
                            <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    fillRule='evenodd'
                                    clipRule='evenodd'
                                    d='M10.0167 1.66602C5.175 1.66602 1.66667 5.62111 1.66667 10.0119C1.66667 11.414 2.075 12.857 2.79167 14.1756C2.925 14.3934 2.94167 14.668 2.85 14.9276L2.29167 16.797C2.16667 17.2477 2.55 17.5807 2.975 17.4472L4.65833 16.9473C5.11667 16.797 5.475 16.9882 5.9 17.2477C7.11667 17.9646 8.63333 18.3327 10 18.3327C14.1333 18.3327 18.3333 15.1362 18.3333 9.98683C18.3333 5.546 14.75 1.66602 10.0167 1.66602Z'
                                    stroke='#9FADBF'
                                    strokeWidth='1.5'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                            </svg>
                            <span>{numberComments}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
