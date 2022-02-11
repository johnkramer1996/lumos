import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { cabinetLinks, RouteNames } from 'routes'
import { isActiveClass } from 'utils'
import CabinetSidebarItem from './CabinetSidebarItem'

const CabinetSidebar = () => {
   const location = useLocation()
   const state = location.state || {}

   return (
      <>
         <div className='sidebar'>
            {cabinetLinks
               .map((link, index) => {
                  // TODO REMAKE IT
                  return {
                     ...link,
                     dropdown: index === 0 || index === 1,
                  }
               })
               .map((props, index) => (
                  <CabinetSidebarItem {...props} index={index} state={state} />
               ))}
         </div>
      </>
   )
}

export default React.memo(CabinetSidebar)
