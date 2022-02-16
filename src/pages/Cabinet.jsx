import React from 'react'
import { useLocation } from 'react-router-dom'
import { CabinetEvents, CabinetSettings, CabinetSidebar, CabinetStatistics, CabinetSupport, CabinetCourses } from 'components/'
import { RouteNames } from 'routes'
import { Cabinet as CabinetComponent } from 'components'

const Cabinet = () => {
   const location = useLocation()

   const { pathname } = location

   const getActivePage = () => {
      switch (pathname) {
         case RouteNames.CABINET_COURSES:
            return <CabinetCourses />
         case RouteNames.CABINET_EVENTS:
            return <CabinetEvents />
         case RouteNames.CABINET_STATISTICS:
            return <CabinetStatistics />
         case RouteNames.CABINET_SUPPORT:
            return <CabinetSupport />
         case RouteNames.CABINET_SETTINGS:
            return <CabinetSettings />
         default:
            return <CabinetCourses />
      }
   }

   const activePage = getActivePage()

   return <CabinetComponent sidebar={<CabinetSidebar />} page={activePage} />
}

export default Cabinet
