import { close, show } from '@store/modalSlice'
import { ReactElement } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'

const useModal = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  const onClose = () => {
    router.push('/', '/')
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
