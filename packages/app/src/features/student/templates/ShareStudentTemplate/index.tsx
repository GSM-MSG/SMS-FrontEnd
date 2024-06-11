import ShareStudentDetail from '@features/student/molecules/ShareStudentDetail'
import * as S from './style'

interface Props {
  token: string | string[] | undefined
}

const ShareStudentsTemplate = ({ token }: Props) => {
  return (
    <S.Wrapper>
      <ShareStudentDetail token={token} />
    </S.Wrapper>
  )
}

export default ShareStudentsTemplate
