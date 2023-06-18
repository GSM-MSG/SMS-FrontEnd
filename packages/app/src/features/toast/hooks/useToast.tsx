import { addToast, removeToast } from '@store/toastSlice'
import { useDispatch } from 'react-redux'

const useToast = () => {
  const dispatch = useDispatch()

  const createToast = (type: 'success' | 'error', comment: string) => {
    const id = Symbol('toast')
    dispatch(addToast({ id, type, comment, milliseconds: 3000 }))

    setTimeout(() => {
      dispatch(removeToast(id))
    }, 3000)
  }

  return { addToast: createToast }
}

export default useToast
