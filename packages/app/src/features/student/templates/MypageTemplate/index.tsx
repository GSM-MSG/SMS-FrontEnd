import { Header } from '@sms/shared'
import useLoggedIn from '@features/auth/hook/useLoggedIn'
import * as S from './style'

const MypageTemplate = () => {
  const { isSuccess } = useLoggedIn({ redirectTo: '/login' })
  return (
    <S.Wrapper>
      <Header isLoggedIn={isSuccess} />
    </S.Wrapper>
  )
}

export default MypageTemplate
