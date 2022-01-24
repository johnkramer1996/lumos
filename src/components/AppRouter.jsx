import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes, RouteNames } from '../routes'

const AppRouter = () => {
    const { isAuth } = useSelector((state) => state.auth)

    return (
        <>
            <div className='main'>
                <div className='main-circle'></div>
                <div className='container'>
                    {isAuth ? (
                        <Routes>
                            {privateRoutes.map((route) => (
                                <Route path={route.path} element={route.element} key={route.path} />
                            ))}
                            <Route path='*' element={<Navigate to={RouteNames.LESSONS} />} />
                        </Routes>
                    ) : (
                        <Routes>
                            {publicRoutes.map((route) => (
                                <Route path={route.path} element={route.element} key={route.path} />
                            ))}
                            <Route path='*' element={<Navigate to={RouteNames.LOGIN} />} />
                        </Routes>
                    )}
                </div>
            </div>
        </>
    )
}

export default AppRouter
