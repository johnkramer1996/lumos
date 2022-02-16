import CoursesItemWrapper from 'components/Courses/CoursesItemWrapper'
import React from 'react'
import { useSelector } from 'react-redux'
import { frontStaticSelectors } from 'store/selectors'
import CabinetTitle from './CabinetTitle'

const CabinetUser = ({ isLoading }) => {
   const { courses, events } = useSelector(frontStaticSelectors.getUser)

   return (
      <div className='cabinet-student'>
         <div className='cabinet-page__group'>
            <CabinetTitle title={'Курсы'} isVisibleBtn={false} total={courses.length} />
            <CoursesItemWrapper items={courses} isLoading={isLoading} className={`cabinet-page__items`} numberComponent={2} />
         </div>
         <div className='cabinet-page__group'>
            <CabinetTitle title={'Мероприятия'} type='events' isVisibleBtn={false} total={events.length} />
            <CoursesItemWrapper items={events} type='events' isLoading={isLoading} className={`cabinet-page__items`} numberComponent={1} />
         </div>
      </div>
   )
}

export default CabinetUser
