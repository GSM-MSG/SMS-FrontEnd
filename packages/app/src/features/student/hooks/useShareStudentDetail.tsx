import { useQuery } from '@tanstack/react-query'
import ShareStudentDetailApi from '@features/student/service/ShareStudentDetailApi'

interface Props {
  token: string
}

const useShareStudentDetail = ({ token }: Props) => {
  const { data, isLoading } = useQuery<StudentDetail>({
    queryKey: [token],
    queryFn: () => ShareStudentDetailApi(token),
    enabled: !!token,
  })
  return { data: data || null, isLoading }
}

export default useShareStudentDetail
