import { useQuery } from '@tanstack/react-query'
import ShareStudentDetailApi from '@features/student/service/ShareStudentDetailApi'

interface Props {
  token: string
}

const useShareStudentDetailQuery = ({ token }: Props) => {
  return useQuery<StudentDetail>({
    queryKey: [token],
    queryFn: () => ShareStudentDetailApi(token),
    retry: 0,
  })
}

export default useShareStudentDetailQuery
