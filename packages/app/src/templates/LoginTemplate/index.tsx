import { GauthLoginButton, Headline, Title } from 'shared'
import useAuth from '@features/auth/hook/useAuth'
import * as S from './style'

const LoginTemplate = () => {
  const [onClick] = useAuth()

  return (
    <S.Wrapper>
      <S.Video muted autoPlay loop>
        <source
          src='/video/login-background.mp4'
          type='video/mp4; codecs=hvc1'
        />
        <source
          src='/video/login-background.webm'
          type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'
        />
      </S.Video>
      <S.Text1>
        <Headline type='headline1'>{'STUDENT\nMANAGEMENT SERVICE'}</Headline>
      </S.Text1>
      <S.Text2>
        <Title type='title2'>학생 정보 통합관리 서비스</Title>
      </S.Text2>
      <S.Text3>
        <GauthLoginButton onClick={onClick} />
      </S.Text3>
    </S.Wrapper>
  )
}

export default LoginTemplate
