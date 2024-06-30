import { useQuery } from '@tanstack/react-query'
import fetchAuthenticationForm from '@features/student/service/fetchAuthenticationForm'

const useAuthenticationFormQuery = () => {
  return useQuery({
    queryKey: ['authentication-form'],
    queryFn: () =>
      fetchAuthenticationForm('54030dd1-0f3b-498a-b644-747769dfdca2'),
    refetchOnWindowFocus: false,
  })
}

export default useAuthenticationFormQuery
