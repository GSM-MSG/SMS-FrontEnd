import { useRouter } from 'next/router'
import env from '@lib/env'
import { useEffect } from 'react'
import login from '@features/auth/service/login'
import { useToast } from '@features/toast'
import useLoading from '@features/modal/hooks/useLoading'

const useAuth = () => {
  const router = useRouter()
  const code = router.query.code?.toString() || ''
  const { addToast } = useToast()
  const { loadingWrap, loadingClose } = useLoading()

  useEffect(() => {
    if (!code) return
    ;(async () => {
      const res = await loadingWrap(login(code))
      if (typeof res === 'string') {
        loadingClose()
        return addToast('error', res)
      }
      const redirectUrl =
        res.role === 'ROLE_TEACHER' ? '/register/teacher' : '/register'
      addToast('success', '로그인에 성공했습니다')
      await router.push(res.isExist ? '/' : redirectUrl)
      loadingClose()
    })()
  }, [code])

  const onClick = () => {
    router.replace(
      `https://gauth.co.kr/login?client_id=${env.NEXT_PUBLIC_GAUTH_CLIENT_ID}&redirect_uri=${env.NEXT_PUBLIC_GAUTH_REDIRECT_URI}`
    )
  }

  return { onClick }
}

export default useAuth
