import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes, RouteNames } from 'routes'
import { useDispatch, useRequest } from 'hooks'
import { Loader, LoaderWrapper } from './ui'
import { authSelectors } from 'store/selectors'

const AppRouter = () => {
   const { auth } = useDispatch()
   const isAuth = useSelector(authSelectors.getIsAuth)

   const authRequest = useRequest({ request: auth, loading: localStorage.getItem('token') })

   useEffect(() => localStorage.getItem('token') && authRequest.call(), [])

   return (
      <div className='content'>
         <LoaderWrapper isLoading={localStorage.getItem('token') && authRequest.isLoading}>
            {isAuth ? (
               <>
                  <Routes>
                     {privateRoutes.map((route) => (
                        <Route key={route.path} path={route.path} element={route.element} />
                     ))}
                     {/* <Route path='*' element={<Navigate to={RouteNames.ERROR} />} /> */}
                  </Routes>
               </>
            ) : (
               <>
                  <Routes>
                     {publicRoutes.map((route) => (
                        <Route key={route.path} path={route.path} element={route.element} />
                     ))}
                     <Route path='*' element={<Navigate to={RouteNames.LOGOUT} />} />
                  </Routes>
               </>
            )}
         </LoaderWrapper>
      </div>
   )
}

export default AppRouter
