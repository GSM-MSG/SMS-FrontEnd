import StudentDetail from '@features/student/molecules/StudentDetail'
import StudentDetailSkeleton from '@features/student/molecules/StudentDetailSkeleton'
import useShareStudentDetailQuery from '@features/student/queries/useShareStudentDetailQuery'
import { useRouter } from 'next/router'
import { NotFound } from '@features/global'
import * as S from './style'
const ShareStudentDetail = () => {
  const { query } = useRouter()
  const { data, isLoading, isError } = useShareStudentDetailQuery({
    token: query.token as string,
  })

  if (isError) return <NotFound />
  return (
    <S.Wrapper>
      <S.Container>
        {!isLoading ? (
          <StudentDetail student={data as StudentDetail} />
        ) : (
          <StudentDetailSkeleton />
        )}
      </S.Container>
    </S.Wrapper>
  )
}

export default ShareStudentDetail
