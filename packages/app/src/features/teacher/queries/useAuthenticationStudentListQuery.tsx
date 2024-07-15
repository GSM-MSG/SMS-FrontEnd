import { useInfiniteQuery } from '@tanstack/react-query'
import authenticationStudentList from '@features/teacher/service/authenticationStudentList'
import { useRouter } from 'next/router'
import { AuthenticationStudentType } from '@features/teacher/dtos/req/AuthenticationStudentListReqDto'

const useAuthenticationStudentListQuery = () => {
  const { query } = useRouter()

  const { data } = AuthenticationStudentType.safeParse(query.type)

  return useInfiniteQuery({
    queryKey: ['authentication-student-list', query],
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      authenticationStudentList({
        type: data,
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
