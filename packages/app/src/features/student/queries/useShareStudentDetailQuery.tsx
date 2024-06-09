import { useQuery } from '@tanstack/react-query'
import ShareStudentDetailApi from '@features/student/service/ShareStudentDetailApi'
import { useRouter } from 'next/router'

interface Props {
  token: string
}

const useShareStudentDetailQuery = ({ token }: Props) => {
  const router = useRouter()
  if (token.length > 0) {
    router.push('/404')
  }

  return useQuery<StudentDetail>({
    queryKey: [token],
    queryFn: () => ShareStudentDetailApi(token),
    enabled: !!token,
  })
}

export default useShareStudentDetailQuery
