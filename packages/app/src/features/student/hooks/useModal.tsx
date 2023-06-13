import { RootState } from '@store'
import { onClose, onShow } from '@store/modalSlice'
import { useDispatch, useSelector } from 'react-redux'

const useModal = () => {
  const dispatch = useDispatch()
  const { isShow } = useSelector((state: RootState) => ({
    isShow: state.modal,
  }))

  return {
    isShow,
    onClose: () => dispatch(onClose()),
    onShow: () => dispatch(onShow()),
  }
}

export default useModal
