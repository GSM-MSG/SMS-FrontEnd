import { RootState } from '@store'
import { onClose, onShow } from '@store/modalSlice'
import { clearStudent, setStudentId } from '@store/studentDetailSlice'
import { useDispatch, useSelector } from 'react-redux'

const useModal = () => {
  const dispatch = useDispatch()
  const { isShow } = useSelector((state: RootState) => ({
    isShow: state.modal,
  }))

  return {
    isShow,
    onClose: () => {
      dispatch(clearStudent())
      dispatch(onClose())
    },
    onShow: (id: string) => {
      dispatch(setStudentId(id))
      dispatch(onShow())
    },
  }
}

export default useModal
