import React from 'react'
import { CabinetEmployee, CabinetSidebar, CabinetTrainer, CabinetUser } from 'components/'
import { Settings } from 'components/'
import { useParams } from 'react-router-dom'
import { useSelector } from 'hooks/'
import { RouteNames } from 'routes'

const Cabinet = () => {
    const {
        user: { roles = [] },
    } = useSelector()

    const activeCabinet = [<CabinetUser />, <CabinetTrainer />, <CabinetEmployee />][roles[0]?.pivot?.role_id - 1 || 0]

    console.log(undefined || 0)

    const { menu } = useParams()

    const getActiveItem = (menu) => {
        switch (RouteNames.CABINET + '/' + menu) {
            case RouteNames.CABINET_COURSES:
                return activeCabinet
            case RouteNames.CABINET_EVENTS:
                return 'events'
            case RouteNames.CABINET_STATISTICS:
                return 'statistics'
            case RouteNames.CABINET_SUPPORT:
                return 'Support'
            case RouteNames.CABINET_SETTINGS:
                return <Settings />

            default:
                return activeCabinet
        }
    }

    return (
        <section className='cabinet-page'>
            <div className='container'>
                <div className='cabinet-page__inner'>
                    <CabinetSidebar />
                    <main className='cabinet-page__main dashboard'>{getActiveItem(menu)}</main>
                </div>
            </div>
        </section>
    )
}

export default Cabinet
