import React, { useEffect } from 'react'
import AppRouter from './components/AppRouter'
import { Header, Footer, Modal } from 'components/'
import { useDispatch, useRequest } from 'hooks'

const App = () => {
    const { fetchReferences, fetchSocUrls } = useDispatch()

    const fetchReferencesRequest = useRequest({ request: fetchReferences })
    const fetchSocUrlsRequest = useRequest({ request: fetchSocUrls })

    useEffect(() => {
        fetchReferencesRequest.call()
        fetchSocUrlsRequest.call()
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
