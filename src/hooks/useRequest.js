import { useEffect, useState } from 'react'
import { isFunction } from 'utils'

const useRequest = ({ request, success, error, loading = false } = {}) => {
   const [isLoading, setIsLoading] = useState(loading)

   const call = (data) => {
      const args = {
         data,
         callbackHandler: (type, data) => {
            if (!isMounted) return
            switch (type) {
               case 'before':
                  loading && !isLoading && setIsLoading(true)
                  break
               case 'success':
                  isFunction(success) && success(data)
                  break
               case 'error':
                  isFunction(error) && error(data)
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
