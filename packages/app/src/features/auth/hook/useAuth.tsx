import { useRouter } from 'next/router'
import env from '@lib/env'
import { useEffect, useState } from 'react'
import login from '@features/auth/service/login'
import { useToast } from '@features/toast'
import useLocalStorage from '@features/global/hooks/useLocalStorage'
import Token from '@lib/Token'

const useAuth = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const code = router.query.code?.toString() || ''
  const { addToast } = useToast()
  const [_, setAccessExpires] = useLocalStorage<string | undefined>(
    Token.ACCESS_TOKEN_EXP,
    undefined
  )
  const [__, setRefreshExpires] = useLocalStorage<string | undefined>(
    Token.REFRESH_TOKEN_EXP,
    undefined
  )

  useEffect(() => {
    if (!code) return
    setIsLoading(true)
    ;(async () => {
      const res = await login(code)

      if (typeof res === 'string') {
        setIsLoading(false)
        return addToast('error', res)
      }

      setAccessExpires(res.accessTokenExp)
      setRefreshExpires(res.refreshTokenExp)
      addToast('success', '로그인에 성공했습니다')
      await router.push(res.isExist ? '/' : '/register')
      setIsLoading(false)
    })()
  }, [code])

  const onClick = () => {
    router.replace(
      `https://gauth.co.kr/login?client_id=${env.NEXT_PUBLIC_GAUTH_CLIENT_ID}&redirect_uri=${env.NEXT_PUBLIC_GAUTH_REDIRECT_URI}`
    )
  }

  return { onClick, isLoading }
}

export default useAuth
