import { Dialog } from '@sms/shared'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@store'
import { actions } from '@features/dialog/stores'
import Portal from '@features/dialog/atoms/Portal'

const DialogProvider = () => {
  const dispatch = useDispatch()
  const dialog = useSelector((state: RootState) => {
    return state.dialog
  })

  const onClose = () => {
    dialog.emitter.emit('dialog', false)
    dispatch(actions.setIsShow())
  }

  return dialog.isShow ? (
    <Portal onClose={onClose}>
      <Dialog
        title={dialog.title}
        content={dialog.content}
        cancelText={dialog.cancelText || '취소'}
        confirmText={dialog.confirmText || '확인'}
        emitter={dialog.emitter}
        onClose={() => dispatch(actions.setIsShow())}
      />
    </Portal>
  ) : null
}

export default DialogProvider
