import React from 'react'
import { Button } from 'components/ui'
import { useNavigate } from 'hooks'
import { CoursesItem3 } from 'components'

const CabinetTrainer = ({ items = [] }) => {
    const { toAddCourse } = useNavigate()

    return (
        <div className='lkt-courses'>
            <div className='cabinet-page__top'>
                <h1 className='lkt-courses__title display-3'>Мои курсы</h1>
                <Button className='lkt-courses__add' onClick={toAddCourse} outline>
                    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M8.02858 2.66675V13.3334' stroke='#1B2C3E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                        <path d='M13.3347 8.02548H2.66797' stroke='#1B2C3E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                    </svg>
                    <span>Добавить</span>
                </Button>
            </div>
            <div className='cabinet-page__nav lkt-courses__nav'>
                <div className='cabinet-page__nav-title'>4 курса</div>
                <div className='cabinet-page__nav-wrap'>
                    <button className='cabinet-page__nav-item cabinet-page__nav-item--col cabinet-page__nav-item--active'>
                        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <rect x='1' y='5' width='6' height='6' rx='2' fill='#C6D0DD' />
                            <rect x='9' y='5' width='6' height='6' rx='2' fill='#C6D0DD' />
                            <rect x='17' y='5' width='6' height='6' rx='2' fill='#C6D0DD' />
                            <rect x='1' y='13' width='6' height='6' rx='2' fill='#C6D0DD' />
                            <rect x='9' y='13' width='6' height='6' rx='2' fill='#C6D0DD' />
                            <rect x='17' y='13' width='6' height='6' rx='2' fill='#C6D0DD' />
                        </svg>
                    </button>
                    <button className='cabinet-page__nav-item cabinet-page__nav-item--row'>
                        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <rect x='1' y='5' width='6' height='6' rx='2' fill='#C6D0DD' />
                            <rect x='9' y='5' width='14' height='6' rx='2' fill='#C6D0DD' />
                            <rect x='1' y='13' width='6' height='6' rx='2' fill='#C6D0DD' />
                            <rect x='9' y='13' width='14' height='6' rx='2' fill='#C6D0DD' />
                        </svg>
                    </button>
                </div>
            </div>
            <div className='cabinet-page__items'>
                {items.map(({ id, ...props }) => (
                    <CoursesItem3 key={id} {...props} />
                ))}
            </div>
        </div>
    )
}

export default CabinetTrainer
