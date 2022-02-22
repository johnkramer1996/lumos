import React, { useEffect } from 'react'
import AppRouter from './components/AppRouter'
import { Header, Footer, Modal } from 'components/'
import { useDispatch, useRequest } from 'hooks'
import { useLocation } from 'react-router-dom'
import { frontStaticSelectors } from 'store/selectors'
import { useSelector } from 'react-redux'

const App = () => {
   const location = useLocation()
   const { pathname } = location
   const { fetchReferences, fetchSocUrls, fetchFrontContacts, fetchFrontPages } = useDispatch()

   const fetchReferencesRequest = useRequest({ request: fetchReferences })
   const fetchSocUrlsRequest = useRequest({ request: fetchSocUrls })
   const fetchFrontContactsRequest = useRequest({ request: fetchFrontContacts })
   const fetchFrontPagesRequest = useRequest({ request: fetchFrontPages })

   useEffect(() => {
      fetchReferencesRequest.call()
      fetchSocUrlsRequest.call()
      fetchFrontContactsRequest.call()
      fetchFrontPagesRequest.call()
   }, [])

   useEffect(() => window.scrollTo(0, 0), [pathname])

   console.log('update App', location)

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
