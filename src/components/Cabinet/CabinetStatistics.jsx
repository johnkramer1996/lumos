import { Tabs } from 'components'
import React, { useMemo, useState } from 'react'
import CabinetStatisticsTab1 from './CabinetStatisticsTab1'
import CabinetStatisticsTab2 from './CabinetStatisticsTab2'
import CabinetStatisticsTab3 from './CabinetStatisticsTab3'

const CabinetStatistics = () => {
    const tabItems = useMemo(
        () => [
            { title: 'Отчет по тренеру', isAvaible: true, component: <CabinetStatisticsTab1 /> },
            { title: 'Выплаты', isAvaible: true, component: <CabinetStatisticsTab2 /> },
            { title: 'Транзакции', isAvaible: true, component: <CabinetStatisticsTab3 /> },
        ],
        [],
    )

    return (
        <>
            <div className='course-report'>
                <h1 className='course-report__title display-3'>Отчет по тренеру</h1>
                <Tabs items={tabItems} classPrefix='course-report' />
            </div>
        </>
    )
}

export default CabinetStatistics
