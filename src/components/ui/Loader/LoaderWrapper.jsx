import React from 'react'
import Loader from './Loader'

const LoaderWrapper = ({ children, isLoading }) => {
   return isLoading ? <Loader /> : children
}

export default LoaderWrapper
