import { useMemo } from 'react'
import { useDispatch as useDispatchRedux } from 'react-redux'
import { allActionCreators, allActionHandlers } from 'store/reducers/action-creators'

const useDispatch = () => {
    const dispatch = useDispatchRedux()
    return useMemo(
        () =>
            Object.keys(allActionCreators).reduce(
                (obj, item) => (
                    (obj[item] = (payload) => {
                        if (!!allActionHandlers[item]) {
                            //async
                            dispatch(allActionCreators[item]({ ...(allActionHandlers[item] || {}), ...payload }))
                        } else {
                            //sync
                            dispatch(allActionCreators[item](payload))
                        }
                    }),
                    obj
                ),
                {},
            ),
        [allActionCreators],
    )
}

export default useDispatch
