import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { frontStaticSelectors } from 'store/selectors'
import { useDispatch, useRequest } from 'hooks'
import { useParams } from 'react-router-dom'
import { BlogItem as BlogItemComponent } from 'components'

const PagesItem = () => {
   const { pageId } = useParams()
   const { fetchFrontPage } = useDispatch()
   const page = useSelector(frontStaticSelectors.getPage)

   const fetchFrontPageRequest = useRequest({ request: fetchFrontPage })

   useEffect(() => {
      console.log(pageId)
      fetchFrontPageRequest.call({ pageId })
   }, [pageId])

   return <BlogItemComponent isLoading={fetchFrontPageRequest.isLoading} {...page} />
}

export default PagesItem
