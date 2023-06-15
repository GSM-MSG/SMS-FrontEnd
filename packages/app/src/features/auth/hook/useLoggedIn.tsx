import loggedInApi from '@features/auth/service/loggedInApi'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const useLoggedIn = () => {
  const router = useRouter()
  const { data, isSuccess } = loggedInApi.useLoggedInQuery()

  useEffect(() => {
    if (isSuccess && !data.isExist) router.push('/register')
    if (!isSuccess && router.pathname === '/register') router.push('/login')
    if (isSuccess && router.pathname === '/register' && data.isExist)
      router.push('/')

    if (isSuccess && router.pathname === '/login' && data.isExist)
      router.push('/')
    if (isSuccess && router.pathname === '/login' && !data.isExist)
      router.push('/register')
  }, [isSuccess])

  return {
    isExist: data?.isExist,
    isSuccess,
  }
}

export default useLoggedIn
