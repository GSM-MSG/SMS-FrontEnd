import { RootState } from '@store'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import studentListApi from '@features/student/service/studentListApi'

const useStudentListQuery = () => {
  const { studentParam } = useSelector((state: RootState) => ({
    studentParam: state.studentParam,
  }))

  return useInfiniteQuery({
    queryKey: ['student-list', studentParam],
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      studentListApi({
        ...studentParam.param,
        page: pageParam,
        size: studentParam.size,
      }),
    getNextPageParam: (lastPage) => {
      if (!lastPage.data) return

      if (lastPage.data.totalSize <= lastPage.data.page * studentParam.size)
        return

      return lastPage.data.page + 1
    },
  })
}

export default useStudentListQuery
