import StudentDetail from '@features/student/molecules/StudentDetail'
import StudentDetailSkeleton from '@features/student/molecules/StudentDetailSkeleton'
import useShareStudentDetailQuery from '@features/student/queries/useShareStudentDetailQuery'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as S from './style'

interface Props {
  token: any
}

const ShareStudentDetail = ({ token }: Props) => {
  const router = useRouter()

  useEffect(() => {
    if (typeof token === 'undefined') {
      router.push('/404')
    }
  }, [token, router])

  const { data, isLoading } = useShareStudentDetailQuery({ token })

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
