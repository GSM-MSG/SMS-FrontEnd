import StudentDetail from '@features/student/molecules/StudentDetail'
import StudentDetailSkeleton from '@features/student/molecules/StudentDetailSkeleton'
import useShareStudentDetailQuery from '@features/student/queries/useShareStudentDetailQuery'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as S from './style'

const ShareStudentDetail = () => {
  const { query, push } = useRouter()
  const { data, isLoading, isError } = useShareStudentDetailQuery({
    token: query.token as string,
  })

  useEffect(() => {
    if (isError) {
      push('/404')
    }
  }, [isError])

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
