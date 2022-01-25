import { useSelector as useSelectorRedux } from 'react-redux'

export const useSelector = () => {
    const {
        auth,
        courses,
        system: { references = {} },
    } = useSelectorRedux((state) => state)

    references.themes = references.themes ? references.themes : []
    references.typeStudy = references.type_study ? references.type_study : []
    references.format = references.format ? references.format : []

    return {
        ...auth,
        ...courses,
        ...references,
    }
}
