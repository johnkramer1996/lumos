import { ROLES } from 'constants'
import { useQuery } from 'hooks'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { cabinetLinks, RouteNames } from 'routes'
import { authSelectors } from 'store/selectors'
import { hasAccess, isActiveClass } from 'utils'
import CabinetSidebarItem from './CabinetSidebarItem'

const CabinetSidebar = () => {
   const rolesId = useSelector(authSelectors.getRolesId)
   const filter = useSelector(({ settings }) => settings.filter)

   return (
      <>
         <div className='sidebar'>
            {cabinetLinks
               .map((link, index) => {
                  // TODO REMAKE IT
                  return {
                     ...link,
                     dropdown: hasAccess(rolesId, [ROLES.TRAINER, ROLES.EMPLOYEE]) && (index === 0 || index === 1),
                  }
               })
               .map((props, index) => (
                  <CabinetSidebarItem key={index} {...props} index={index} filter={filter} />
               ))}
         </div>
      </>
   )
}

export default React.memo(CabinetSidebar)
