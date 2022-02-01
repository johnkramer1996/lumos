import { CoursesEmpty } from 'components'
import React from 'react'
import CoursesItem3 from './CoursesItem3'
import CoursesItemLoader from './CoursesItemLoader'

const CoursesItemWrapper = ({ items = [], isLoading, className }) => {
    return (
        <div>
            {isLoading ? (
                <div className={`cabinet-page__items ${className}`}>
                    {Array(8)
                        .fill(0)
                        .map((_, index) => (
                            <CoursesItemLoader key={index} />
                        ))}
                </div>
            ) : items.length ? (
                <div className={`cabinet-page__items ${className}`}>
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

export default CoursesItemWrapper
