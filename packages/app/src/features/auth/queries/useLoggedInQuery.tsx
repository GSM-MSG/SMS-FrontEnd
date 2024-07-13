import { useQuery } from '@tanstack/react-query'
import loggedInService from '@features/auth/service/loggedInService'

const useLoggedInQuery = () => {
  return useQuery({
    queryKey: ['loggedIn'],
    queryFn: () => loggedInService(),
    staleTime: 60 * 1000,
    gcTime: 60 * 1000,
  })
}

export default useLoggedInQuery
