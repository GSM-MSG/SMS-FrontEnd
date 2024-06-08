import { useRouter } from 'next/router'
import { StudentCard, StudentCardSkeleton } from '@sms/shared'
import { useModal } from '@features/modal/hooks'
import StudentDetailModal from '@features/student/molecules/StudentDetailModal'
import useStudentListQuery from '@features/student/queries/useStudentListQuery'
import StudentType from '@features/student/types/StudentType'
import useScrollObserver from '@features/student/hooks/useScrollObserver'
import * as S from './style'

const StudentList = () => {
  const router = useRouter()
  const { onShow } = useModal()
  const { data, hasNextPage, fetchNextPage } = useStudentListQuery()
  const { element } = useScrollObserver({
    callback: () => {
      fetchNextPage()
    },
  })

  const onClick = (id: string) => {
    router.push('/', `/student/${id}`)
    onShow(<StudentDetailModal studentId={id} student={null} />)
  }

  return (
    <S.Content>
      <S.MaxCount>
        <S.Count>{data?.pages[0].data?.totalSize ?? 0}</S.Count>명
      </S.MaxCount>

      <S.Students>
        {data?.pages
          .reduce((prev, curr) => {
            return [...prev, ...(curr.data?.content ?? [])]
          }, [] as StudentType[])
          ?.map((i) => (
            <StudentCard key={i.id} {...i} onClick={() => onClick(i.id)} />
          ))}

        {hasNextPage &&
          Array(...Array(10)).map((_, idx) => (
            <StudentCardSkeleton
              ref={idx === 0 ? element : undefined}
              key={idx}
            />
          ))}
      </S.Students>
    </S.Content>
  )
}

export default StudentList
