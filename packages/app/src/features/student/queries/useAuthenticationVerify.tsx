import { useQuery } from '@tanstack/react-query'
import authenticationVerify from '@features/student/service/authenticationVerify'

const useAuthenticationVerify = () => {
  return useQuery({
    queryKey: ['authentication-verify'],
    queryFn: authenticationVerify,
    retry: false,
  })
}

export default useAuthenticationVerify
