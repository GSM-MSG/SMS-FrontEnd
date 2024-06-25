import { useQuery } from '@tanstack/react-query'
import fetchAuthenticationForm from '@features/student/service/fetchAuthenticationForm'

const useAuthenticationFormQuery = () => {
  return useQuery({
    queryKey: ['authentication-form'],
    queryFn: () =>
      fetchAuthenticationForm('bc3933a-44be-49b4-a6e7-2ecfd3f6c30a'),
    refetchOnWindowFocus: false,
  })
}

export default useAuthenticationFormQuery
