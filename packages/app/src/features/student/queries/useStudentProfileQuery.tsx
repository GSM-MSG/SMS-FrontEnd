import { useQuery } from '@tanstack/react-query'
import profileService from '@features/student/service/profileService'

const useStudentProfileQuery = () => {
  return useQuery({
    queryKey: ['studentDetail'],
    queryFn: () => profileService(),
  })
}

export default useStudentProfileQuery
