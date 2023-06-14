import withdraw from '@features/auth/service/withdraw'
import TokenManager from '@lib/TokenManager'
import { useRouter } from 'next/router'

const useWithdraw = () => {
  const router = useRouter()

  const onWithdraw = async () => {
    if (!(await withdraw())) return

    TokenManager.clearToken()
    router.reload()
  }

  return { onWithdraw }
}

export default useWithdraw
