import { useDispatch } from 'react-redux'
import { allActionCreators } from 'store/reducers/action-creators'

export const useLogout = () => {
    const { logout } = allActionCreators
    const dispatch = useDispatch()
    const onLogout = () => dispatch(logout())

    return [onLogout]
}
