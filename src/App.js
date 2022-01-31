import React, { useCallback, useEffect } from 'react'
import AppRouter from './components/AppRouter'
import { Header, Footer, Modal } from 'components/'
import { useDispatch } from 'hooks'

const App = () => {
    const { fetchReferences, fetchSocUrls } = useDispatch()

    useEffect(() => {
        fetchReferences()
        fetchSocUrls()
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
