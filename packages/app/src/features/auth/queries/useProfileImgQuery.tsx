import { useQuery } from '@tanstack/react-query'
import profileImgService from '@features/auth/service/profileImgService'

const useProfileImgQuery = () => {
  return useQuery({
    queryKey: ['profileImg'],
    queryFn: () => profileImgService(),
  })
}

export default useProfileImgQuery
