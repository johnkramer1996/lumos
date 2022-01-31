import { useMemo } from 'react'
import { useDispatch as useDispatchRedux } from 'react-redux'
import { allActionCreators, allActionHandlers } from 'store/reducers/action-creators'

const useDispatch = () => {
    const dispatch = useDispatchRedux()
    return useMemo(
        () =>
            Object.keys(allActionCreators).reduce(
                (obj, item) => (
                    (obj[item] = (...props) => {
                        !!allActionHandlers[item] ? dispatch(allActionCreators[item]({ ...(allActionHandlers[item] || {}), ...props[0] })) : dispatch(allActionCreators[item](...props))
                    }),
                    obj
                ),
                {},
            ),
        [allActionCreators],
    )
}

export default useDispatch
