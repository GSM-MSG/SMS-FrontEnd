import { useRouter } from 'next/router'
import env from '@lib/env'
import { useEffect } from 'react'
import login from '@features/auth/service/login'

const useAuth = () => {
  const router = useRouter()

  useEffect(() => {
    const code = router.query.code?.toString() || ''

    if (!code) return
    ;(async () => {
      await login(code)
      router.push('/')
    })()
  }, [])

  const onClick = () => {
    router.replace(
      `https://gauth.co.kr/login?client_id=${env.GAUTH_CLIENT_ID}&redirect_uri=${env.GAUTH_REDIRECT_URI}`
    )
  }

  return [onClick]
}

export default useAuth
