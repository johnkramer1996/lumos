import React, { useEffect } from 'react'
import AppRouter from './components/AppRouter'
import { Header, Footer } from 'components/'
import { useDispatch, useSelector } from 'hooks'
import { LoginModal } from 'components/modals'

const App = () => {
    const { isLoading } = useSelector()
    const { auth, fetchReferences, setIsLoading, fetchSocUrls } = useDispatch()

    useEffect(() => {
        fetchReferences()
        localStorage.getItem('token') ? auth() : setIsLoading(false)
        fetchSocUrls()
    }, [])

    return (
        <>
            <div className='content'>
                <Header />
                {isLoading ? (
                    <>
                        <h1 style={{ textAlign: 'center' }}>Loading...</h1>
                    </>
                ) : (
                    <>
                        <AppRouter />
                    </>
                )}
            </div>
            <Footer />
            <LoginModal />
        </>
    )
}

export default App
