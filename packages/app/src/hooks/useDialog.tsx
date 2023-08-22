import { actions } from '@features/dialog/stores'
import { useDispatch } from 'react-redux'
import { Emitter } from '@sms/shared'
import { SetLogInfoType } from '@/types/store/dialogSlice'

const useDialog = () => {
  const dispatch = useDispatch()

  const emitter = new Emitter()
  const eventName = 'dialog'

  const dialog = (dialogInfo: Omit<SetLogInfoType, 'emitter'>) =>
    new Promise((resolve) => {
      emitter.on(eventName, (result) => resolve(result))
      dispatch(actions.setLogInfo({ ...dialogInfo, emitter }))
      dispatch(actions.setIsShow())
    })

  return { dialog }
}

export default useDialog
