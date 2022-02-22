import { useEffect, useState } from 'react'
import { isFunction } from 'utils'

const useRequest = ({ request, success, error, loading } = {}) => {
   const [isLoading, setIsLoading] = useState(loading)
   //  const [state, setState] = useState({})
   //  const [errorText, setErrorText] = useState('')

   const call = (data) => {
      const args = {
         data,
         callbackHandler: (type, data) => {
            if (!isMounted) return
            switch (type) {
               case 'before':
                  loading && setIsLoading(true)
                  break
               case 'success':
                  isFunction(success) && success(data)
                  // setState(data.data)
                  break
               case 'error':
                  isFunction(error) && error(data)
                  // setErrorText(data.data)
                  break
               case 'finnally':
                  loading && setIsLoading(false)
                  break

               default:
                  break
            }
         },
      }
      request(args)
   }

   let isMounted = true
   useEffect(() => () => (isMounted = false), [])

   return { call, isLoading }
}

export default useRequest
