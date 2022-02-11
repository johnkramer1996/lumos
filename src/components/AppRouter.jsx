import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes, RouteNames } from 'routes'
import { useDispatch, useRequest } from 'hooks'
import { Loader } from './ui'
import { authSelectors } from 'store/selectors'

const AppRouter = () => {
   const { auth } = useDispatch()
   const isAuth = useSelector(authSelectors.getIsAuth)

   const authRequest = useRequest({ request: auth })

   useEffect(() => localStorage.getItem('token') && authRequest.call(), [])

   return (
      <div className='content'>
         {localStorage.getItem('token') && authRequest.isLoading ? (
            <Loader />
         ) : isAuth ? (
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
      </div>
   )
}

export default AppRouter
