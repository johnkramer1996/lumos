import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { CoursesEmpty, EventsItem, EventsItem2 } from 'components'
import CoursesItem from './CoursesItem'
import CoursesItem2 from './CoursesItem2'
import CoursesItem3 from './CoursesItem3'
import CoursesItemLoader from './CoursesItemLoader'
import { useSelector } from 'react-redux'
import { authSelectors } from 'store/selectors'

const CoursesItemWrapper = ({ items = [], amount = items.length, isLoading = false, className = '', numberComponent = 0, type = 'course', rolesId, isToCabinet }) => {
   const ActiveComponent = useMemo(
      () =>
         ({
            course: [CoursesItem, CoursesItem2, CoursesItem3],
            events: [EventsItem, EventsItem2],
         }[type][numberComponent]),
      [numberComponent],
   )

   return (
      <>
         {isLoading ? (
            <div className={`${className}`}>
               {Array(3)
                  .fill(0)
                  .map((_, index) => (
                     <CoursesItemLoader key={index} />
                  ))}
            </div>
         ) : items.length ? (
            <div className={`${className}`}>
               {items.slice(0, amount).map(({ ...props }) => React.createElement(ActiveComponent || EventsItem2, { key: props.id, rolesId, isToCabinet, ...props }, null))}
            </div>
         ) : (
            <CoursesEmpty />
         )}
      </>
   )
}

CoursesItemWrapper.propTypes = {
   items: PropTypes.array.isRequired,
}

export default CoursesItemWrapper
