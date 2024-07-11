import { actions } from '@features/modal/stores'
import { ReactElement } from 'react'
import { useDispatch } from 'react-redux'

const useModal = () => {
  const dispatch = useDispatch()

  const onClose = () => {
    dispatch(actions.close())
  }

  const onShow = (element: ReactElement) => {
    dispatch(actions.show(element))
  }

  return {
    onClose,
    onShow,
  }
}

export default useModal
