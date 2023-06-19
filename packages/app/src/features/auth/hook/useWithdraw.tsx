import withdraw from '@features/auth/service/withdraw'
import { useToast } from '@features/toast'
import { useDialog } from '@hooks'
import TokenManager from '@lib/TokenManager'
import { useRouter } from 'next/router'

const useWithdraw = () => {
  const { dialog } = useDialog()
  const router = useRouter()
  const { addToast } = useToast()

  const onWithdraw = async () => {
    if (
      !(await dialog({
        title: '회원탈퇴',
        content: '정말로 회원탈퇴를 하시겠습니까?',
      }))
    )
      return

    const res = await withdraw()
    if (res) return addToast('error', res)

    TokenManager.clearToken()
    addToast('success', '회원탈퇴에 성공했습니다')
    router.reload()
  }

  return { onWithdraw }
}

export default useWithdraw
