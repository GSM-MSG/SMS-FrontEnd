import { useQueryClient } from '@tanstack/react-query'

const useLoggedInMutation = () => {
  const queryClient = useQueryClient()

  return () => {
    queryClient.invalidateQueries({ queryKey: ['loggedIn'] })
  }
}

export default useLoggedInMutation
