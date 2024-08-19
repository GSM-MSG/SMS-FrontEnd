import { useQuery } from '@tanstack/react-query'
import studentDetailApi from '@features/student/service/studentDetailApi'

interface Props {
  studentId?: string | string[]
}

const useStudentDetailQuery = ({ studentId }: Props) => {
  return useQuery({
    queryKey: ['studentDetail', studentId],
    queryFn: () => studentDetailApi(studentId as string),
    enabled: typeof studentId === 'string',
    placeholderData: (data) => data,
  })
}

export default useStudentDetailQuery
