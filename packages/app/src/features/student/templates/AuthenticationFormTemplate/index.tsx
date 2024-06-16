import Header from '@features/global/Header'
import { useQuery } from '@tanstack/react-query'
import fetchAuthenticationForm from '@features/student/service/fetchAuthenticationForm'
// import { NotFound } from '@features/global'
import AuthenticationForm from '@features/student/organisms/AuthenticationForm'
import { AuthenticationFormResDto } from '@features/student/dtos/res/AuthenticationFromResDto'
import * as S from './style'

const AuthenticationFormTemplate = () => {
  const { data } = useQuery({
    queryKey: ['authentication-form'],
    queryFn: () =>
      fetchAuthenticationForm('bc3933a-44be-49b4-a6e7-2ecfd3f6c30a'),
  })

  // if (data === null) return <NotFound />

  return (
    <S.Wrapper>
      <Header />

      <AuthenticationForm data={data as AuthenticationFormResDto} />
    </S.Wrapper>
  )
}

export default AuthenticationFormTemplate
