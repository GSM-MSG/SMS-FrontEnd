import { Toast } from '@sms/shared'
import { RootState } from '@store'
import { ToastType } from '@store/toastSlice'
import { useSelector } from 'react-redux'

const ToastContainer = () => {
  const { toast } = useSelector((state: RootState) => ({ toast: state.toast }))

  return (
    <>
      {toast.map((i: ToastType, idx) => (
        <Toast key={idx} comment={i.comment} type={i.type} />
      ))}
    </>
  )
}

export default ToastContainer
