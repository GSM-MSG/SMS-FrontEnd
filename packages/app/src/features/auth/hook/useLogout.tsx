import { useRouter } from 'next/router'
import logout from '@features/auth/service/logout'
import TokenManager from '@lib/TokenManager'
import { useDialog } from '@hooks'

const useLogout = () => {
  const { dialog } = useDialog()
  const router = useRouter()

  const onLogout = async () => {
    if (
      !(await dialog({
        title: '로그아웃',
        content: '정말로 로그아웃 하시겠습니까?',
      }))
    )
      return
    if (!(await logout())) return

    TokenManager.clearToken()
    router.reload()
  }

  return { onLogout }
}

export default useLogout
