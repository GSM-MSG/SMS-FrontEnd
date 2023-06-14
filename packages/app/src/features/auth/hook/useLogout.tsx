import { useRouter } from 'next/router'
import logout from '@features/auth/service/logout'
import TokenManager from '@lib/TokenManager'

const useLogout = () => {
  const router = useRouter()

  const onLogout = async () => {
    if (!(await logout())) return

    TokenManager.clearToken()
    router.reload()
  }

  return { onLogout }
}

export default useLogout
