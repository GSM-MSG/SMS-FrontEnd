import { setIsShow, setLogInfo } from '@store/dialogSlice'
import { useDispatch } from 'react-redux'
import { Emitter } from 'shared'
import { SetLogInfoType } from '@/types/store/dialogSlice'

const useDialog = () => {
  const dispatch = useDispatch()

  const emitter = new Emitter()
  const eventName = 'dialog'

  const dialog = (dialogInfo: Omit<SetLogInfoType, 'emitter'>) =>
    new Promise((resolve) => {
      emitter.on(eventName, (result) => resolve(result))
      dispatch(setLogInfo({ ...dialogInfo, emitter }))
      dispatch(setIsShow())
    })

  return { dialog }
}

export default useDialog
