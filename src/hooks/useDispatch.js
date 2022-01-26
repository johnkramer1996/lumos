import { useDispatch as useDispatchRedux } from 'react-redux'
import { allActionCreators } from 'store/reducers/action-creators'

const useDispatch = () => {
    const dispatch = useDispatchRedux()
    return Object.keys(allActionCreators).reduce((obj, item) => ((obj[item] = (...props) => dispatch(allActionCreators[item](...props))), obj), {})
}

export default useDispatch
