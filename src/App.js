import React, { useState, useEffect } from 'react'
import AppRouter from './components/AppRouter'
import { useDispatch } from 'react-redux'
import { allActionCreators } from './store/reducers/action-creators'
import Header from './components/Header'

const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        // if (localStorage.getItem('token')) {
        dispatch(allActionCreators.auth())
        // }
    }, [])

    return (
        <>
            <Header />
            <AppRouter />
        </>
    )
}

export default App
