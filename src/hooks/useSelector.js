import { useSelector as useSelectorRedux } from 'react-redux'

const useSelector = () => {
    const {
        auth,
        courses,
        system: { socUrls = {} },
        system: { references = {} },
    } = useSelectorRedux((state) => state)

    courses.courses = courses?.info?.data?.data || []

    auth.user = auth.user ? auth.user : {}

    references.themes = references.themes ? references.themes : []
    references.typeStudy = references.type_study ? references.type_study : []
    references.format = references.format ? references.format : []

    return {
        ...auth,
        ...courses,
        socUrls: socUrls.data,
        ...references,
    }
}
export default useSelector
