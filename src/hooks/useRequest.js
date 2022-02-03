import { useEffect, useState } from 'react'

const useRequest = ({ before = () => {}, request = () => {}, success = () => {}, error = () => {}, after = () => {}, isLoadingDefault = false } = {}) => {
    let isMounted = true
    const [state, setState] = useState({})
    const [isLoading, setIsLoading] = useState(isLoadingDefault)
    const [errorText, setErrorText] = useState('')

    const call = (args) => {
        request({
            data: { ...args },
            beforeTwo: () => isMounted && (before(), setIsLoading(true)),
            successTwo: (data) => isMounted && (success(data), setState(data.data)),
            errorTwo: (data) => isMounted && (error(data), setErrorText(data.error)),
            afterTwo: () => isMounted && (after(), setIsLoading(false)),
        })
    }

    useEffect(() => () => (isMounted = false), [])

    return { call, state, isLoading, errorText }
}

export default useRequest
