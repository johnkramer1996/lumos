import React, { useEffect } from 'react'
import AppRouter from './components/AppRouter'
import { Header, Footer, Modal } from 'components/'
import { useDispatch, useRequest } from 'hooks'
import { useLocation } from 'react-router-dom'

const App = () => {
   const { pathname } = useLocation()
   const { fetchReferences, fetchSocUrls } = useDispatch()

   const fetchReferencesRequest = useRequest({ request: fetchReferences })
   const fetchSocUrlsRequest = useRequest({ request: fetchSocUrls })

   useEffect(() => {
      fetchReferencesRequest.call()
      fetchSocUrlsRequest.call()
   }, [])

   useEffect(() => window.scrollTo(0, 0), [pathname])

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
