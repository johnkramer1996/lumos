import { useDispatch as useDispatchRedux } from 'react-redux'
import { allActionCreators } from 'store/reducers/action-creators'

const useDispatch = () => {
    const { logout, setShowModal } = allActionCreators
    const dispatch = useDispatchRedux()
    return {
        onLogout: () => dispatch(logout()),
        onShowModal: (onShowModalProps) => dispatch(setShowModal(onShowModalProps)),
    }
}

export default useDispatch
