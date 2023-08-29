import { LoadingPortal } from '@features/modal/portals'
import { useDispatch } from 'react-redux'
import { show, close } from '@features/modal/stores/modalSlice'

const useLoading = () => {
  const dispatch = useDispatch()

  const loadingWrap = async <T,>(callback: Promise<T>) => {
    dispatch(show(<LoadingPortal />))
    const res = await callback
    dispatch(close())

    return res
  }

  return { loadingWrap }
}

export default useLoading
