import { actions } from '@features/toast/stores'
import { useDispatch } from 'react-redux'

const useToast = () => {
  const dispatch = useDispatch()

  const createToast = (type: 'success' | 'error', comment: string) => {
    const id = Symbol('toast')
    dispatch(actions.addToast({ id, type, comment, milliseconds: 3000 }))

    setTimeout(() => {
      dispatch(actions.hideToast(id))
    }, 3000)

    setTimeout(() => {
      dispatch(actions.removeToast(id))
    }, 3400)
  }

  return { addToast: createToast }
}

export default useToast
