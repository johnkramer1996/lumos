import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumbsItem = ({ to, title }) => {
   return (
      <Link to={to} className='breadcrumbs__item'>
         {title}
      </Link>
   )
}

export default BreadCrumbsItem
