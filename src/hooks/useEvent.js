import { useEffect } from 'react'

const useEvent = (event = 'click', listener, element = document.body) => {
    useEffect(() => {
        element.addEventListener(event, listener)
        return () => element.removeEventListener(event, listener)
    }, [])
}

export default useEvent
