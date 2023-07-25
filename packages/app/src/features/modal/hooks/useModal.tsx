import { close, show } from '@store/modalSlice'
import { ReactElement } from 'react'
import { useDispatch } from 'react-redux'

const useModal = () => {
  const dispatch = useDispatch()

  const onClose = () => {
    dispatch(close())
  }

  const onShow = (element: ReactElement) => {
    dispatch(show(element))
  }

  return {
    onClose,
    onShow,
  }
}

export default useModal
