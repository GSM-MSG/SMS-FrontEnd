import StudentDetail from '@features/student/molecules/StudentDetail'
import StudentDetailSkeleton from '@features/student/molecules/StudentDetailSkeleton'
import useShareStudentDetailQuery from '@features/student/queries/useShareStudentDetailQuery'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as S from './style'

const ShareStudentDetail = () => {
  const { query } = useRouter()
  const router = useRouter()

  useEffect(() => {
    if (typeof query === 'undefined') {
      router.push('/404')
    }
  }, [query, router])

  const { data, isLoading } = useShareStudentDetailQuery({
    token: query.token as string,
  })

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
