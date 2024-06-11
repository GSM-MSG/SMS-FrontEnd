import ShareStudentDetail from '@features/student/molecules/ShareStudentDetail'
import * as S from './style'

interface Props {
  token: any
}

const ShareStudentsTemplate = ({ token }: Props) => {
  return (
    <S.Wrapper>
      <ShareStudentDetail token={token} />
    </S.Wrapper>
  )
}

export default ShareStudentsTemplate
