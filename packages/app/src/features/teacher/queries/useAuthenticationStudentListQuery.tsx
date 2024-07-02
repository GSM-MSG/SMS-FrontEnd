import { useInfiniteQuery } from '@tanstack/react-query'
import authenticationStudentList from '@features/teacher/service/authenticationStudentList'

const useAuthenticationStudentListQuery = () => {
  return useInfiniteQuery({
    queryKey: ['authentication-student-list'],
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      authenticationStudentList({
        type: 'COMPLETED',
        page: pageParam,
        size: 20,
      }),
    getNextPageParam: (lastPage) => {
      if (!lastPage.last) return
      return lastPage.page + 1
    },
  })
}

export default useAuthenticationStudentListQuery
