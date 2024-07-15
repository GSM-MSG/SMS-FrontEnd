import Header from '@features/global/Header'
import { NotFound } from '@features/global'
import AuthenticationForm from '@features/student/organisms/AuthenticationForm'
import { AuthenticationFormResDto } from '@features/student/dtos/res/AuthenticationFromResDto'
import useAuthenticationFormQuery from '@features/student/queries/useAuthenticationFormQuery'
import * as S from './style'

const AuthenticationFormTemplate = () => {
  const { data } = useAuthenticationFormQuery()

  if (data === null) return <NotFound />

  return (
    <S.Wrapper>
      <Header />

      <AuthenticationForm data={data as AuthenticationFormResDto} />
    </S.Wrapper>
  )
}

export default AuthenticationFormTemplate
