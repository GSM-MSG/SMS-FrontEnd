import { actions } from '@features/modal/stores'
import { ReactElement } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'

const useModal = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  const onClose = () => {
    router.push('/', '/', { scroll: false })
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
