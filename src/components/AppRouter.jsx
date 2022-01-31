import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes, RouteNames } from 'routes'
import { useDispatch } from 'hooks'
import { Loader } from './ui'
import ModalLogin from './Modal/ModalLogin'

const AppRouter = () => {
    const { auth, setIsLoading } = useDispatch()
    const isAuth = useSelector((state) => state.auth.isAuth)
    const isLoading = useSelector((state) => state.auth.isLoading)

    useEffect(() => {
        localStorage.getItem('token') ? auth() : setIsLoading(false)
    }, [])

    return (
        <div className='content'>
            {isLoading ? (
                <Loader />
            ) : isAuth ? (
                <>
                    <Routes>
                        {privateRoutes.map((route) => (
                            <Route key={route.path} path={route.path} element={route.element} />
                        ))}
                        <Route path='*' element={<Navigate to={RouteNames.HOME} />} />
                    </Routes>
                </>
            ) : (
                <>
                    <Routes>
                        {publicRoutes.map((route) => (
                            <Route key={route.path} path={route.path} element={route.element} />
                        ))}
                        <Route path='*' element={<Navigate to={RouteNames.HOME} />} />
                    </Routes>
                    <ModalLogin />
                </>
            )}
        </div>
    )
}

export default AppRouter
