import React, { useState, useEffect } from 'react'
import AppRouter from './components/AppRouter'
import { useDispatch, useSelector } from 'react-redux'
import { allActionCreators } from 'store/reducers/action-creators'
import { Header, Footer } from 'components/'
import { LoginModal } from 'components/modals'

const App = () => {
    const dispatch = useDispatch()
    const { auth, fetchReferences, setIsLoading, fetchSocUrls } = allActionCreators
    const {
        auth: { isLoading },
        system: { references } = {},
    } = useSelector((state) => state)

    useEffect(() => {
        dispatch(fetchReferences())
        localStorage.getItem('token') ? dispatch(auth()) : dispatch(setIsLoading(false))

        dispatch(fetchSocUrls())
    }, [])

    console.log(useSelector((state) => state))

    return (
        <>
            <div className='wrapper'>
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
                    <Footer />
                    <LoginModal />
                </div>
            </div>
        </>
    )
}

export default App
