import React, { useEffect } from 'react'
import CabinetSidebarUser from 'components/Cabinet/CabinetSidebarUser'
import { Cabinet as CabinetComponent, CabinetUser } from 'components'
import { useParams } from 'react-router-dom'
import { useDispatch, useRequest } from 'hooks'

const UsersItem = () => {
   const { userId } = useParams()
   const { fetchFrontUser } = useDispatch()

   const fetchFrontUserRequest = useRequest({ request: fetchFrontUser })

   useEffect(() => {
      fetchFrontUserRequest.call({ userId })
   }, [])

   return (
      <>
         <CabinetComponent sidebar={<CabinetSidebarUser isLoading={fetchFrontUserRequest.isLoading} />} page={<CabinetUser isLoading={fetchFrontUserRequest.isLoading} />} />
      </>
   )
}

export default UsersItem
