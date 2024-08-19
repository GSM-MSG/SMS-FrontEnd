import { useQueryClient } from '@tanstack/react-query'

const useProfileImgMutation = () => {
  const queryClient = useQueryClient()

  return () => {
    queryClient.invalidateQueries({ queryKey: ['profileImg'] })
  }
}

export default useProfileImgMutation
