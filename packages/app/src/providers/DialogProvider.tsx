import { Dialog } from 'shared'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@store'
import { setIsShow } from '@store/dialogSlice'

const DialogProvider = () => {
  const diaptch = useDispatch()
  const { dialog } = useSelector((state: RootState) => ({
    dialog: state.dialog,
  }))

  return (
    <>
      {dialog.isShow && (
        <Dialog
          title={dialog.title}
          content={dialog.content}
          cancelText={dialog.cancelText}
          confirmText={dialog.confirmText}
          emitter={dialog.emitter}
          onClose={() => diaptch(setIsShow())}
        />
      )}
    </>
  )
}

export default DialogProvider
