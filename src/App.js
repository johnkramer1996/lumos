import React, { useState, useEffect } from 'react'
import AppRouter from './components/AppRouter'
import { useDispatch } from 'react-redux'
import { allActionCreators } from './store/reducers/action-creators'
import { Header, Footer } from 'components/'

const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        // if (localStorage.getItem('token')) {
        dispatch(allActionCreators.auth())
        // }
    }, [])

    return (
        <>
            <div className='wrapper'>
                <div className='content'>
                    <Header />
                    <AppRouter />
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default App
