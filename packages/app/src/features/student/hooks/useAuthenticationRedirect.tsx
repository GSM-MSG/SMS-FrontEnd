import { useRouter } from 'next/router'

const useAuthenticationRedirect = () => {
  const router = useRouter()
  const redirectAuthentication = () => {
    router.push('/authentication')
  }

  return {
    redirectAuthentication,
  }
}

export default useAuthenticationRedirect
