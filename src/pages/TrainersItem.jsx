import React from 'react'
import CabinetTrainers from 'components/Cabinet/CabinetTrainers'
import CabinetSidebarUser from 'components/Cabinet/CabinetSidebarUser'
import { Cabinet as CabinetComponent } from 'components'

const TrainersItem = () => {
   return <CabinetComponent sidebar={<CabinetSidebarUser />} page={<CabinetTrainers />} />
}

export default TrainersItem
