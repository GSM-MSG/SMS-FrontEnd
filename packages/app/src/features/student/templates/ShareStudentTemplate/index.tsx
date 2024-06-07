import ShareStudentDetail from '@features/student/molecules/ShareStudentDetail'
import { useRouter } from 'next/router'
import * as S from './style'

const ShareStudentsTemplate = () => {
  const router = useRouter()
  const token = router.query?.token as string
  return (
    <S.Wrapper>
      <ShareStudentDetail token={token} />
    </S.Wrapper>
  )
}

export default ShareStudentsTemplate
