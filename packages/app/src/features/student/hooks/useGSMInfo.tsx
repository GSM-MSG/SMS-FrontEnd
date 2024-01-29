import { useRouter } from 'next/router'

const useGSMInfo = () => {
  const router = useRouter()
  const redirectGSMInfo = () => {
    router.push('/gsminfo')
  }

  return {
    redirectGSMInfo,
  }
}

export default useGSMInfo
