import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CabinetEvents, CabinetSettings, CabinetSidebar, CabinetStatistics, CabinetSupport, CabinetCourses } from 'components/'
import { RouteNames } from 'routes'
import CabinetTrainers from 'components/Cabinet/CabinetTrainers'
import CabinetSidebarUser from 'components/Cabinet/CabinetSidebarUser'

const Cabinet = () => {
   const { cabinetItem } = useParams()

   console.log(useParams())

   const getActivePage = (cabinetItem) => {
      switch (`${RouteNames.CABINET}/${cabinetItem}`) {
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
         case RouteNames.CABINET_TRAINERS:
            return <CabinetTrainers />
         case RouteNames.CABINET_TRAINERS_ITEM:
            return <CabinetTrainers />
         default:
            return <CabinetCourses />
      }
   }

   const getActiveSidebar = (cabinetItem) => {
      switch (`${RouteNames.CABINET}/${cabinetItem}`) {
         case RouteNames.CABINET_TRAINERS:
            return <CabinetSidebarUser />
         default:
            return <CabinetSidebar />
      }
   }

   const activeSidebar = getActiveSidebar(cabinetItem)
   const activePage = getActivePage(cabinetItem)

   return (
      <section className='cabinet-page'>
         <div className='container'>
            <div className='cabinet-page__inner'>
               <aside className='cabinet-page__sidebar cabinet-student__sidebar'>{activeSidebar}</aside>
               <main className='cabinet-page__main dashboard'>{activePage}</main>
            </div>
         </div>
      </section>
   )
}

export default Cabinet
