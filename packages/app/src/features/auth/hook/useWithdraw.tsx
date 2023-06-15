import withdraw from '@features/auth/service/withdraw'
import { useDialog } from '@hooks'
import TokenManager from '@lib/TokenManager'
import { useRouter } from 'next/router'

const useWithdraw = () => {
  const { dialog } = useDialog()
  const router = useRouter()

  const onWithdraw = async () => {
    if (
      !(await dialog({
        title: '회원탈퇴',
        content: '정말로 회원탈퇴를 하시겠습니까?',
      }))
    )
      return
    if (!(await withdraw())) return

    TokenManager.clearToken()
    router.reload()
  }

  return { onWithdraw }
}

export default useWithdraw
