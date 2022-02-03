import React from 'react'
import { useSelector } from 'react-redux'
import { getImgUrl } from 'utils'

const CabinetGreet = () => {
    const user = useSelector(({ auth }) => auth.user)

    return (
        <div className='dashboard__greet card-bg'>
            <div className='dashboard__greet-img'>
                <img src={getImgUrl(user?.avatar)} alt='' />
            </div>
            <div className='dashboard__greet-content'>
                <div className='dashboard__greet-name'>Привет, {user.first_name || user.name}!</div>
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
