import { useQuery } from '@tanstack/react-query'
import fetchStudentAuthenticationInfo from '@features/teacher/service/fetchStudentAuthenticationInfo'

interface Param {
  markingBoardId?: string
}

const studentAuthenticationInfoQuery = ({ markingBoardId }: Param) => {
  return useQuery({
    queryKey: ['student', 'authenticationInfo'],
    queryFn: () => fetchStudentAuthenticationInfo(markingBoardId as string),
    enabled: !!markingBoardId,
  })
}

export default studentAuthenticationInfoQuery
