import { useRouter } from 'next/router'

const useStudentAuthenticationRedirect = () => {
  const router = useRouter()
  const redirectStudentAuthentication = () => {
    router.push('/teacher/student')
  }

  return {
    redirectStudentAuthentication,
  }
}

export default useStudentAuthenticationRedirect
