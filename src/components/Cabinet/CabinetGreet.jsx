import React from 'react'
import { useSelector } from 'react-redux'

const CabinetGreet = () => {
    const {
        auth: { user },
    } = useSelector((state) => state)

    return (
        <div className='dashboard__greet card-bg'>
            <div className='dashboard__greet-img'>
                <img src={user.img} alt='' />
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
