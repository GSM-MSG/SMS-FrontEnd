import Header from '@features/global/Header'
import { AuthenticationVerifyResDto } from '@features/student/dtos/res/AuthenticationVerifyResDto'
import * as S from './style'

interface Props {
  data?: AuthenticationVerifyResDto
}

const AuthenticationResultTemplate = ({ data }: Props) => {
  return (
    <S.Wrapper>
      <Header />

      <S.Content>
        <S.Title>인증제</S.Title>
        <S.Section>
          <S.Name>{data?.name}의 인증 점수는</S.Name>
          <S.Score>{data?.score}점 입니다.</S.Score>
          <S.Description>채점 : {data?.grader}선생님</S.Description>
        </S.Section>
      </S.Content>
    </S.Wrapper>
  )
}

export default AuthenticationResultTemplate
