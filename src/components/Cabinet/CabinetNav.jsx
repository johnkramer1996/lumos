import React from 'react'
import { useDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { declOfNum, getDeclOfArray } from 'utils'

const CabinetNav = ({ visibleTypeShow = true, type = 'courses', total = 0 }) => {
    const { setTypeShow } = useDispatch()
    const typeShow = useSelector(({ settings }) => settings.typeShow)

    return (
        <div className='cabinet-page__nav lkt-courses__nav'>
            <div className='cabinet-page__nav-title'>
                {total} {declOfNum(total, getDeclOfArray[type])}
            </div>
            {visibleTypeShow && (
                <div className='cabinet-page__nav-wrap'>
                    <button className={`cabinet-page__nav-item cabinet-page__nav-item--col${typeShow === 'col' ? ` cabinet-page__nav-item--active` : ''}`} onClick={() => setTypeShow('col')}>
                        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <rect x='1' y='5' width='6' height='6' rx='2' fill='#C6D0DD' />
                            <rect x='9' y='5' width='6' height='6' rx='2' fill='#C6D0DD' />
                            <rect x='17' y='5' width='6' height='6' rx='2' fill='#C6D0DD' />
                            <rect x='1' y='13' width='6' height='6' rx='2' fill='#C6D0DD' />
                            <rect x='9' y='13' width='6' height='6' rx='2' fill='#C6D0DD' />
                            <rect x='17' y='13' width='6' height='6' rx='2' fill='#C6D0DD' />
                        </svg>
                    </button>
                    <button className={`cabinet-page__nav-item cabinet-page__nav-item--row${typeShow === 'row' ? ` cabinet-page__nav-item--active` : ''}`} onClick={() => setTypeShow('row')}>
                        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <rect x='1' y='5' width='6' height='6' rx='2' fill='#C6D0DD' />
                            <rect x='9' y='5' width='14' height='6' rx='2' fill='#C6D0DD' />
                            <rect x='1' y='13' width='6' height='6' rx='2' fill='#C6D0DD' />
                            <rect x='9' y='13' width='14' height='6' rx='2' fill='#C6D0DD' />
                        </svg>
                    </button>
                </div>
            )}
        </div>
    )
}

export default CabinetNav
