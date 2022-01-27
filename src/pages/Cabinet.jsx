import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CabinetEmployee, CabinetEvents, CabinetSettings, CabinetSidebar, CabinetStatistics, CabinetSupport, CabinetTrainer, CabinetUser } from 'components/'
import { useDispatch, useSelector } from 'hooks/'
import { RouteNames } from 'routes'

const Cabinet = () => {
    const { item } = useParams()
    const { fetchCourses } = useDispatch()
    const {
        user: { roles = [] },
        courses,
    } = useSelector()
    useEffect(() => fetchCourses({ page: 1, limit: 3 }), [])

    const total = courses.length
    const activeRole = roles[0]?.pivot?.role_id - 1 || 0
    // const activeRole = 2
    const activeCabinet = [<CabinetUser items={courses} total={total} />, <CabinetTrainer items={courses} total={total} />, <CabinetEmployee items={courses} total={total} />][activeRole]

    const getActiveItem = (item) => {
        switch (RouteNames.CABINET + '/' + item) {
            case RouteNames.CABINET_COURSES:
                return activeCabinet
            case RouteNames.CABINET_EVENTS:
                return <CabinetEvents />
            case RouteNames.CABINET_STATISTICS:
                return <CabinetStatistics />
            case RouteNames.CABINET_SUPPORT:
                return <CabinetSupport />
            case RouteNames.CABINET_SETTINGS:
                return <CabinetSettings />
            default:
                return activeCabinet
        }
    }

    return (
        <section className='cabinet-page'>
            <div className='container'>
                <div className='cabinet-page__inner'>
                    <CabinetSidebar />
                    <main className='cabinet-page__main dashboard'>{getActiveItem(item)}</main>
                </div>
            </div>
        </section>
    )
}

export default Cabinet
