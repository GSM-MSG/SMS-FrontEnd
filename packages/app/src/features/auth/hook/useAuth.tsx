import { useRouter } from 'next/router'
import env from '@lib/env'
import { useEffect } from 'react'
import login from '@features/auth/service/login'

const useAuth = () => {
  const router = useRouter()
  const code = router.query.code?.toString() || ''

  useEffect(() => {
    if (!code) return
    ;(async () => {
      const res = await login(code)

      if (!res) return

      router.push(res.isExist ? '/' : '/register')
    })()
  }, [code])

  const onClick = () => {
    router.replace(
      `https://gauth.co.kr/login?client_id=${env.NEXT_PUBLIC_GAUTH_CLIENT_ID}&redirect_uri=${env.NEXT_PUBLIC_GAUTH_REDIRECT_URI}`
    )
  }

  return [onClick]
}

export default useAuth
