import { useSelector as useSelectorRedux } from 'react-redux'
import { getImgUrl } from 'utils'

const useSelector = () => {
    const {
        auth,
        courses,
        system: { socUrls = {} },
        system: { references = {} },
    } = useSelectorRedux((state) => state)

    courses.courses = courses?.coursesInfo?.data || []

    auth.user = auth.user ? auth.user : {}
    auth.user.avatarFullSrc = getImgUrl(auth.user.avatar)

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
