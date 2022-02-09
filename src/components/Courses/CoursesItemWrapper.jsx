import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { CoursesEmpty } from 'components'
import CoursesItem from './CoursesItem'
import CoursesItem2 from './CoursesItem2'
import CoursesItem3 from './CoursesItem3'
import CoursesItemLoader from './CoursesItemLoader'

const CoursesItemWrapper = ({ items = [], isLoading = false, className = '', numberComponent = 0 }) => {
   const ActiveComponent = useMemo(() => [CoursesItem, CoursesItem2, CoursesItem3][numberComponent], [numberComponent])

   return (
      <div>
         {isLoading ? (
            <div className={`${className}`}>
               {Array(8)
                  .fill(0)
                  .map((_, index) => (
                     <CoursesItemLoader key={index} />
                  ))}
            </div>
         ) : items.length ? (
            <div className={`${className}`}>{items.map(({ ...props }) => React.createElement(ActiveComponent, { key: props.id, ...props }, null))}</div>
         ) : (
            <CoursesEmpty />
         )}
      </div>
   )
}

CoursesItemWrapper.propTypes = {
   items: PropTypes.array.isRequired,
}

export default CoursesItemWrapper
