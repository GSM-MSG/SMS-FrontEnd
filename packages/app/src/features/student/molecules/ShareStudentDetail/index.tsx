import StudentDetail from '@features/student/molecules/StudentDetail'
import StudentDetailSkeleton from '@features/student/molecules/StudentDetailSkeleton'
import useShareStudentDetail from '@features/student/hooks/useShareStudentDetail'
import * as S from './style'

interface Props {
  token: string
}

const ShareStudentDetail = ({ token }: Props) => {
  const { data, isLoading } = useShareStudentDetail({ token })

  return (
    <S.Wrapper>
      <S.Container>
        {!isLoading ? (
          <StudentDetail student={data} />
        ) : (
          <StudentDetailSkeleton />
        )}
      </S.Container>
    </S.Wrapper>
  )
}

export default ShareStudentDetail
