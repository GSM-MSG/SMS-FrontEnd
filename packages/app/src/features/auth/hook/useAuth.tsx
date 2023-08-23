import { useRouter } from 'next/router'
import env from '@lib/env'
import { useEffect, useState } from 'react'
import login from '@features/auth/service/login'
import { useToast } from '@features/toast'

const useAuth = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const code = router.query.code?.toString() || ''
  const { addToast } = useToast()

  useEffect(() => {
    if (!code) return
    setIsLoading(true)
    ;(async () => {
      const res = await login(code)

      if (typeof res === 'string') {
        setIsLoading(false)
        return addToast('error', res)
      }

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
