import React from 'react'
import { News as NewsComponent } from 'components/'

const News = () => {
    const popularItems = [
        {
            id: 1,
            img: '/assets/img/blog2.jpg',
            category: 'Раздел статьи',
            title: 'Название статьи в блоге в несколько',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra, eget nunc hendrerit mauris sit magnis cursus facilisis. Tellus non pharetra, quam quam enim libero, in. Eget venenatis rhoncus a metus, trop..',
            author: 'Ольга Олеговна',
            numberComments: 4,
        },
        {
            id: 2,
            img: '/assets/img/blog3.jpg',
            category: 'Раздел статьи',
            title: 'Название статьи в блоге в несколько',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra, eget nunc hendrerit mauris sit magnis cursus facilisis. Tellus non pharetra, quam quam enim libero, in. Eget venenatis rhoncus a metus, trop..',
            author: 'Ольга Олеговна',
            numberComments: 4,
        },
    ]
    const newItems = popularItems
    return <NewsComponent title={'Новости'} popularItems={popularItems} newItems={newItems} />
}

export default News
