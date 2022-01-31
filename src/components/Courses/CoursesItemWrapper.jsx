import { CoursesEmpty } from 'components'
import React from 'react'
import CoursesItem3 from './CoursesItem3'
import ContentLoader from 'react-content-loader'

const CoursesItemWrapper = ({ items = [], isLoading }) => {
    return (
        <div>
            {JSON.stringify(isLoading)}
            {isLoading ? (
                <div className='cabinet-page__items'>
                    {Array(8)
                        .fill(0)
                        .map((_, index) => (
                            <CourseItemLoader key={index} />
                        ))}
                </div>
            ) : items.length ? (
                <div className='cabinet-page__items'>
                    {items.map(({ ...props }) => (
                        <CoursesItem3 key={props.id} {...props} />
                    ))}
                </div>
            ) : (
                <CoursesEmpty />
            )}
        </div>
    )
}

function CourseItemLoader() {
    return (
        <ContentLoader speed={2} width={290} height={270} viewBox='0 0 290 270' backgroundColor='#f3f3f3' foregroundColor='#ecebeb'>
            <circle cx='20' cy='20' r='20' />
            <rect x='0' y='0' rx='16' ry='16' width='290' height='180' />
            <rect x='0' y='190' rx='0' ry='0' width='290' height='10' />
            <rect x='0' y='210' rx='0' ry='0' width='290' height='10' />
            <rect x='0' y='230' rx='0' ry='0' width='290' height='10' />
        </ContentLoader>
    )
}

export default CoursesItemWrapper
