import { useEffect, useState } from 'react'

const useRequest = ({ before = () => {}, request = () => {}, success = () => {}, error = () => {}, after = () => {}, getData = () => {} } = {}) => {
    let isMounted = true
    const [state, setState] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [errorText, setErrorText] = useState('')

    const call = (args) => {
        request({
            data: { ...args },
            before2: () => isMounted && (before(), setIsLoading(true)),
            success2: (data) => isMounted && (success(data), setState(data.data)),
            error2: (data) => isMounted && (error(data), setErrorText(data.error)),
            after2: () => isMounted && (after(), setIsLoading(false)),
        })
    }

    useEffect(() => () => (isMounted = false), [])

    return { call, state, isLoading, errorText }
}

export default useRequest
