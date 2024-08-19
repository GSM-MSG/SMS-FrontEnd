import { useQueryClient } from '@tanstack/react-query'

const useAuthenticationStudentListMutation = () => {
  const queryClient = useQueryClient()

  return () => {
    queryClient.invalidateQueries({ queryKey: ['post-authentication-form'] })
  }
}

export default useAuthenticationStudentListMutation
