import React, { useEffect } from 'react'
import AppRouter from './components/AppRouter'
import { Header, Footer, Modal } from 'components/'
import { useDispatch, useRequest } from 'hooks'
import { useLocation } from 'react-router-dom'
import { frontStaticSelectors } from 'store/selectors'
import { useSelector } from 'react-redux'

const App = () => {
   const { pathname } = useLocation()
   const { fetchReferences, fetchSocUrls, fetchFrontContacts } = useDispatch()

   const fetchReferencesRequest = useRequest({ request: fetchReferences })
   const fetchSocUrlsRequest = useRequest({ request: fetchSocUrls })

   useEffect(() => {
      fetchReferencesRequest.call()
      fetchSocUrlsRequest.call()
   }, [])

   useEffect(() => window.scrollTo(0, 0), [pathname])

   const fetchFrontContactsRequest = useRequest({
      request: fetchFrontContacts,
   })

   useEffect(() => {
      fetchFrontContactsRequest.call()
   }, [])

   return (
      <>
         <Header />
         <AppRouter />
         <Footer />
         <Modal />
      </>
   )
}

export default App
