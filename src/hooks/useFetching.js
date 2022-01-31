import { useEffect, useState } from 'react'

const useFetching = ({ request = (data) => data, success = (response) => response.data, error = (error) => error.status } = {}) => {
    let isMounted = true
    const [state, setState] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [errorText, setErrorText] = useState('')

    const fetching = async (...args) => {
        try {
            setIsLoading(true)
            const response = await request(...args)
            if (!isMounted) return
            if (response.status === 200) {
                setState(success(response))
            }
        } catch (e) {
            if (!isMounted) return
            setErrorText(error(e.response || e.message) || 'Unknown error')
        } finally {
            if (!isMounted) return
            setIsLoading(false)
        }
    }

    useEffect(
        () => () => {
            isMounted = false
        },
        [],
    )

    return { state, fetching, isLoading, errorText }
}

export default useFetching
