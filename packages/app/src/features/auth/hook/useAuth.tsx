import { useRouter } from 'next/router'
import env from '@lib/env'

const useAuth = () => {
  const router = useRouter()

  const onClick = () => {
    router.replace(
      `https://gauth.co.kr/login?client_id=${env.GAUTH_CLIENT_ID}&redirect_uri=${env.GAUTH_REDIRECT_URI}`
    )
  }

  return [onClick]
}

export default useAuth
