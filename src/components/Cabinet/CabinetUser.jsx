import React from 'react'
import { CabinetGreet, CoursesItem3 } from 'components'
import { Button } from 'components/ui'
import { useNavigate } from 'hooks'
import { declOfNum, getDeclOfArray } from 'utils'

const CabinetUser = ({ items = [], total }) => {
    const { toAddCourse } = useNavigate()

    return (
        <>
            <CabinetGreet />
            <div className='cabinet-page__group'>
                <div className='cabinet-page__top'>
                    <div>
                        <h1 className='cabinet-page__group-title'>Мои курсы</h1>
                        <div className='cabinet-page__nav-title'>
                            {total} {declOfNum(total, getDeclOfArray['course'])}
                        </div>
                    </div>
                    <Button className='lkt-courses__add' onClick={toAddCourse} outline>
                        <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M8.02858 2.66675V13.3334' stroke='#1B2C3E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                            <path d='M13.3347 8.02548H2.66797' stroke='#1B2C3E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                        </svg>
                        <span>Добавить</span>
                    </Button>
                </div>
                <div className='cabinet-page__items'>
                    {items.map(({ id, ...props }) => (
                        <CoursesItem3 key={id} {...props} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default CabinetUser
