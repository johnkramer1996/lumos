import React from 'react'
import BreadCrumbsItem from './BreadCrumbsItem'

const Breadcrumbs = ({ items = [] }) => {
   return (
      <>
         <div className='breadcrumbs'>
            {items.map((props, index) => (
               <BreadCrumbsItem key={props.id || index} {...props} />
            ))}
         </div>
      </>
   )
}

export default Breadcrumbs
