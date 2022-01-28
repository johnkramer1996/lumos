import { useState } from 'react'

const useFetching = (fetchCB, successCB, errorCB, isL = false) => {
    const [isLoading, setIsLoading] = useState(isL)
    const [error, setError] = useState('')

    const fetching = async (...args) => {
        try {
            setIsLoading(true)
            const response = await fetchCB(...args)
            if (response.status === 200) successCB(response)
        } catch (e) {
            errorCB(e.response || e.message)
            setError(e.response || e.message)
        } finally {
            setIsLoading(false)
        }
    }

    return [fetching, isLoading, error]
}

export default useFetching
