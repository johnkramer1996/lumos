import React from 'react'
import { useLocation } from 'react-router-dom'
import { CabinetEvents, CabinetSettings, CabinetSidebar, CabinetStatistics, CabinetSupport, CabinetCourses } from 'components/'
import { RouteNames } from 'routes'
import CabinetTrainers from 'components/Cabinet/CabinetTrainers'
import CabinetSidebarUser from 'components/Cabinet/CabinetSidebarUser'
import { Cabinet as CabinetComponent } from 'components'

const Cabinet = () => {
   const location = useLocation()

   const { pathname } = location

   console.log(location)

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
         case RouteNames.COURSES_TRAINER:
            return <CabinetTrainers />
         default:
            return <CabinetCourses />
      }
   }

   const getActiveSidebar = () => {
      switch (pathname) {
         case RouteNames.CABINET_TRAINERS:
            return <CabinetSidebarUser />
         default:
            return <CabinetSidebar />
      }
   }

   const activeSidebar = getActiveSidebar()
   const activePage = getActivePage()

   return <CabinetComponent sidebar={activeSidebar} page={activePage} />
}

export default Cabinet
