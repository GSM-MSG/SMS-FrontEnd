import { Dialog } from '@sms/shared'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@store'
import { setIsShow } from '@store/dialogSlice'
import Portal from '@features/dialog/atoms/Portal'

const DialogProvider = () => {
  const dispatch = useDispatch()
  const { dialog } = useSelector((state: RootState) => ({
    dialog: state.dialog,
  }))

  const onClose = () => {
    dialog.emitter.emit('dialog', false)
    dispatch(setIsShow())
  }

  return dialog.isShow ? (
    <Portal onClose={onClose}>
      <Dialog
        title={dialog.title}
        content={dialog.content}
        cancelText={dialog.cancelText || '취소'}
        confirmText={dialog.confirmText || '확인'}
        emitter={dialog.emitter}
        onClose={() => dispatch(setIsShow())}
      />
    </Portal>
  ) : null
}

export default DialogProvider
