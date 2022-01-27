import { useEffect } from 'react'

const useEvent = (event = 'click', listener, element = document.body) => {
    useEffect(() => {
        element.addEventListener('click', listener)
        return () => element.removeEventListener('click', listener)
    }, [])
}

export default useEvent
