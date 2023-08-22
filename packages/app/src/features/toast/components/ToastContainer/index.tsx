import { Toast } from '@sms/shared'
import { RootState } from '@store'
import { ToastType } from '@features/toast/stores/toastSlice'
import { useSelector } from 'react-redux'

import * as S from './style'

const ToastContainer = () => {
  const { toast } = useSelector((state: RootState) => ({ toast: state.toast }))

  return (
    <S.Wrapper>
      {toast.map((i: ToastType, idx) => (
        <Toast
          isHidden={i.isHidden}
          key={idx}
          comment={i.comment}
          type={i.type}
        />
      ))}
    </S.Wrapper>
  )
}

export default ToastContainer
