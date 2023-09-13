import { LoadingPortal } from '@features/modal/portals'
import { useDispatch } from 'react-redux'
import { show, close } from '@features/modal/stores/modalSlice'

const useLoading = () => {
  const dispatch = useDispatch()

  const loadingClose = () => dispatch(close())

  const loadingWrap = async <T,>(
    callback: Promise<T>,
    immediatelyClose?: boolean
  ) => {
    dispatch(show(<LoadingPortal />))
    const res = await callback
    if (immediatelyClose) loadingClose()

    return res
  }

  return { loadingWrap, loadingClose }
}

export default useLoading
