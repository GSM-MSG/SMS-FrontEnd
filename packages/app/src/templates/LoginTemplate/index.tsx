import { FadeinAnimation, GAuthLoginButton, Headline, Title } from '@sms/shared'
import useAuth from '@features/auth/hook/useAuth'
import { GuestLink } from '@features/auth/components'
import * as S from './style'

const LoginTemplate = () => {
  const { onClick } = useAuth()

  return (
    <>
      <S.Wrapper>
        <S.Video muted autoPlay playsInline loop>
          <source src='/video/login-background.webm' type='video/webm' />
          <source src='/video/login-background.mp4' type='video/mp4' />
        </S.Video>
        <FadeinAnimation>
          <Headline type='headline1'>{'STUDENT\nMANAGEMENT SERVICE'}</Headline>
        </FadeinAnimation>
        <FadeinAnimation duration={1.3}>
          <Title type='title2'>학생 정보 통합관리 서비스</Title>
        </FadeinAnimation>
        <FadeinAnimation duration={1.6}>
          <GAuthLoginButton onClick={onClick} />

          <GuestLink href='/'>게스트로 둘러보기</GuestLink>
        </FadeinAnimation>
      </S.Wrapper>
    </>
  )
}

export default LoginTemplate
