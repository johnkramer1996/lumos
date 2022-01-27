import { SITE_URL } from 'api/URLS'
import { useSelector } from 'hooks'
import React from 'react'

const CabinetGreet = () => {
    const { user } = useSelector()

    return (
        <div className='dashboard__greet card-bg'>
            <div className='dashboard__greet-img'>
                <img src={SITE_URL + user.avatar} alt='' />
            </div>
            <div className='dashboard__greet-content'>
                <div className='dashboard__greet-name'>Привет, {user.name}!</div>
                <div className='dashboard__greet-bottom'>
                    <div className='dashboard__greet-balls'>
                        <i></i>
                        <span>340 баллов</span>
                    </div>
                    <div className='dashboard__greet-hint'>Как получать баллы?</div>
                </div>
            </div>
        </div>
    )
}

export default CabinetGreet
