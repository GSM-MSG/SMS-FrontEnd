import { useQuery } from '@tanstack/react-query'
import fetchAuthenticationForm from '@features/student/service/fetchAuthenticationForm'

const useAuthenticationFormQuery = () => {
  return useQuery({
    queryKey: ['authentication-form'],
    queryFn: fetchAuthenticationForm,
    refetchOnWindowFocus: false,
  })
}

export default useAuthenticationFormQuery
