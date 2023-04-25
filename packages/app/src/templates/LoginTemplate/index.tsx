import { GauthLoginButton, Headline, Title } from 'shared'
import useAuth from '@features/auth/hook/useAuth'
import * as S from './style'

const LoginTemplate = () => {
  const [onClick] = useAuth()

  return (
    <S.Wrapper>
      <Headline type='headline1'>{'STUDENT\nMANAGEMENT SERVICE'}</Headline>
      <Title type='title2'>학생 정보 통합관리 서비스</Title>
      <GauthLoginButton onClick={onClick} />
    </S.Wrapper>
  )
}

export default LoginTemplate
