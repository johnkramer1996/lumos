import { useEffect, useState } from 'react'

const useRequest = ({ request = () => {}, success = () => {}, error = () => {}, isLoadingDefault = false } = {}) => {
    let isMounted = true
    const [state, setState] = useState({})
    const [isLoading, setIsLoading] = useState(isLoadingDefault)
    const [errorText, setErrorText] = useState('')

    const call = (data) => {
        request({
            data,
            callbackHandler: (type, data) => {
                if (!isMounted) return
                switch (type) {
                    case 'before':
                        isLoadingDefault && setIsLoading(true)
                        break
                    case 'success':
                        success(data)
                        setState(data.data)
                        break
                    case 'error':
                        error(data)
                        setErrorText(data.data)
                        break
                    case 'finnally':
                        setIsLoading(false)
                        break

                    default:
                        break
                }
            },
        })
    }

    useEffect(() => () => (isMounted = false), [])

    return { call, state, isLoading, errorText }
}

export default useRequest
