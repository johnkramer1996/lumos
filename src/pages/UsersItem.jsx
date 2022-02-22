import React, { useEffect } from 'react'
import CabinetSidebarUser from 'components/Cabinet/CabinetSidebarUser'
import { Cabinet as CabinetComponent, CabinetUser } from 'components'
import { useParams } from 'react-router-dom'
import { useDispatch, useRequest } from 'hooks'

const UsersItem = () => {
   const { userId } = useParams()
   const { fetchFrontUser } = useDispatch()

   const fetchFrontUserRequest = useRequest({ request: fetchFrontUser, loading: true })

   useEffect(() => {
      fetchFrontUserRequest.call({ userId })
   }, [])

   const isLoading = fetchFrontUserRequest.isLoading

   return <CabinetComponent sidebar={<CabinetSidebarUser isLoading={isLoading} />} page={<CabinetUser isLoading={isLoading} />} />
}

export default UsersItem
