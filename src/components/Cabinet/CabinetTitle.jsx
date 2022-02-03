import React from 'react'
import { Button } from 'components/ui'
import { useNavigate } from 'hooks'

const CabinetTitle = ({ title, type = 'courses', isVisibleBtn = true, isBtnAll = true, btnHref = '' }) => {
    const { toCabinetItemsAdd } = useNavigate()

    return (
        <div className='cabinet-page__top'>
            <h1 className='lkt-courses__title display-3'>{title}</h1>
            {isVisibleBtn && (
                <>
                    {isBtnAll ? (
                        <Button to={btnHref} className='courses__all' outline link>
                            Показать все
                        </Button>
                    ) : (
                        <Button className='lkt-courses__add' onClick={() => toCabinetItemsAdd({ type })} outline>
                            <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path d='M8.02858 2.66675V13.3334' stroke='#1B2C3E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                <path d='M13.3347 8.02548H2.66797' stroke='#1B2C3E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                            </svg>
                            <span>Добавить</span>
                        </Button>
                    )}
                </>
            )}
        </div>
    )
}

export default CabinetTitle
