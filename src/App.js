import React, { useEffect } from 'react'
import AppRouter from './components/AppRouter'
import { Header, Footer } from 'components/'
import { useDispatch, useSelector } from 'hooks'
import { LoginModal } from 'components/modals'
import { useLocation } from 'react-router-dom'

const App = () => {
    const location = useLocation()
    const { isLoading } = useSelector()
    const { auth, fetchReferences, setIsLoading, fetchSocUrls, restore } = useDispatch()

    console.log(useSelector())
    useEffect(() => {
        fetchReferences()
        localStorage.getItem('token') ? auth() : setIsLoading(false)
        fetchSocUrls()
        // restore({ email: 'vitaliczinoviev@gmail.com' })
    }, [])

    useEffect(() => document.body.click(), [location])

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
