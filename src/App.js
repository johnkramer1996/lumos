import React, { useEffect } from 'react'
import AppRouter from './components/AppRouter'
import { Header, Footer, Modal } from 'components/'
import { useDispatch, useRequest } from 'hooks'

const App = () => {
    const { fetchReferences, fetchSocUrls, fetchFrontCourses } = useDispatch()

    const fetchReferencesRequest = useRequest({ request: fetchReferences })
    const fetchSocUrlsRequest = useRequest({ request: fetchSocUrls })
    const fetchFrontCoursesRequest = useRequest({ request: fetchFrontCourses })

    useEffect(() => {
        fetchReferencesRequest.call()
        fetchSocUrlsRequest.call()
        fetchFrontCoursesRequest.call()
    }, [])

    return (
        <>
            <Header />
            <AppRouter />
            <Footer />
            <Modal />
        </>
    )
}

export default App
