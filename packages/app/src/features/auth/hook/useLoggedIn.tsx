import loggedInApi from '@features/auth/service/loggedInApi'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

interface Props {
  redirectTo?: string
  redirectToIfFound?: string
}

const useLoggedIn = ({ redirectTo, redirectToIfFound }: Props) => {
  const router = useRouter()
  const { data, isLoading, isSuccess } = loggedInApi.useLoggedInQuery()
  const [refetchLoggedIn] = loggedInApi.useRefetchLoggedInMutation()

  useEffect(() => {
    if ((!redirectTo && isLoading) || (!redirectToIfFound && isLoading)) return

    if (isSuccess && router.pathname === '/register' && !data.isExist) return
    if (isSuccess && !data.isExist) {
      if (data.role === 'ROLE_TEACHER') router.push('/register/teacher')
      else router.push('/register')
    }

    if (isSuccess && redirectToIfFound) {
      router.push(redirectToIfFound)
      return
    }

    if (!isSuccess && redirectTo) {
      router.push(redirectTo)
      return
    }
  }, [data, isLoading, redirectTo, isSuccess, redirectToIfFound])

  return {
    ...data,
    refetchLoggedIn,
    isSuccess,
  }
}

export default useLoggedIn
