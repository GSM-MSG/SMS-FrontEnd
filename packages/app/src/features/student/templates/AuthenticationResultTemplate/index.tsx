import Header from '@features/global/Header'
import * as S from './style'

const AuthenticationResultTemplate = () => {
  return (
    <S.Wrapper>
      <Header />

      <S.Content>
        <S.Title>인증제</S.Title>
        <S.Section>
          <S.Name>이현빈님의 인증 점수는</S.Name>
          <S.Score>1,234점 입니다.</S.Score>
          <S.Description>채점 : 변찬우선생님</S.Description>
        </S.Section>
      </S.Content>
    </S.Wrapper>
  )
}

export default AuthenticationResultTemplate
