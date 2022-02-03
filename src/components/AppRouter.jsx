import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes, RouteNames } from 'routes'
import { useDispatch, useRequest } from 'hooks'
import { Loader } from './ui'

const AppRouter = () => {
    const { auth } = useDispatch()
    const isAuth = useSelector((state) => state.auth.isAuth)

    const authRequest = useRequest({ request: auth, isLoadingDefault: true })

    useEffect(() => {
        localStorage.getItem('token') && authRequest.call()
    }, [])

    return (
        <div className='content'>
            {authRequest.isLoading ? (
                <Loader />
            ) : isAuth ? (
                <>
                    <Routes>
                        {privateRoutes.map((route) => (
                            <Route key={route.path} path={route.path} element={route.element} />
                        ))}
                        <Route path='*' element={<Navigate to={RouteNames.ERROR} />} />
                    </Routes>
                </>
            ) : (
                <>
                    <Routes>
                        {publicRoutes.map((route) => (
                            <Route key={route.path} path={route.path} element={route.element} />
                        ))}
                        <Route path='*' element={<Navigate to={RouteNames.ERROR} />} />
                    </Routes>
                    {/* <ModalLogin /> */}
                </>
            )}
        </div>
    )
}

export default AppRouter
