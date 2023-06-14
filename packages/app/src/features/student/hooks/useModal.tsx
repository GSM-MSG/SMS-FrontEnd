import { RootState } from '@store'
import { onClose, onShow } from '@store/modalSlice'
import { clearStudent, setStudentId } from '@store/studentDetailSlice'
import { useDispatch, useSelector } from 'react-redux'

const useModal = (name: string) => {
  const dispatch = useDispatch()
  const { modal } = useSelector((state: RootState) => ({
    modal: state.modal,
  }))

  return {
    isShow: modal.value && name === modal.name,
    onClose: () => {
      dispatch(clearStudent())
      dispatch(onClose())
    },
    onShowAndSetId: (id: string) => {
      dispatch(setStudentId(id))
      dispatch(onShow(name))
    },
    onShow: () => {
      dispatch(onShow(name))
    },
  }
}

export default useModal
