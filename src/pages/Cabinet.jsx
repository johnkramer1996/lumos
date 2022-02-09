import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CabinetEvents, CabinetSettings, CabinetSidebar, CabinetStatistics, CabinetSupport, CabinetCourses } from 'components/'
import { RouteNames } from 'routes'
import { useNavigate } from 'hooks'

const Cabinet = () => {
   const { cabinetId } = useParams()
   const { toCabinet, toError } = useNavigate()

   const getActivePage = (cabinetId) => {
      switch (`${RouteNames.CABINET}/${cabinetId}`) {
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

   const activePage = getActivePage(cabinetId)

   return (
      <section className='cabinet-page'>
         <div className='container'>
            <div className='cabinet-page__inner'>
               <CabinetSidebar />
               <main className='cabinet-page__main dashboard'>{activePage}</main>
            </div>
         </div>
      </section>
   )
}

export default Cabinet
