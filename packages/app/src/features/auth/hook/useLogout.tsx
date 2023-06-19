import { useRouter } from 'next/router'
import logout from '@features/auth/service/logout'
import TokenManager from '@lib/TokenManager'
import { useDialog } from '@hooks'
import { useToast } from '@features/toast'

const useLogout = () => {
  const { dialog } = useDialog()
  const router = useRouter()
  const { addToast } = useToast()

  const onLogout = async () => {
    if (
      !(await dialog({
        title: '로그아웃',
        content: '정말로 로그아웃 하시겠습니까?',
      }))
    )
      return

    const res = await logout()
    if (res) return addToast('error', res)

    TokenManager.clearToken()

    addToast('success', '로그아웃에 성공했습니다')
    router.reload()
  }

  return { onLogout }
}

export default useLogout
