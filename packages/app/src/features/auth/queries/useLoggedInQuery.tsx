import { useQuery } from '@tanstack/react-query'
import loggedInService from '@features/auth/service/loggedInService'

const useLoggedInQuery = () => {
  return useQuery({
    queryKey: ['loggedIn'],
    queryFn: () => loggedInService(),
  })
}

export default useLoggedInQuery
