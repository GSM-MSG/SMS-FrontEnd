import { useQuery } from '@tanstack/react-query'
import profileImgService from '@features/auth/service/profileImgService'

const useProfileImgQuery = () => {
  return useQuery({
    queryKey: ['profileImg'],
    queryFn: () => profileImgService(),
    gcTime: 1000 * 60 * 60,
    staleTime: 1000 * 60 * 60,
  })
}

export default useProfileImgQuery
