import { Header } from '@sms/shared'
import useLoggedIn from '@features/auth/hook/useLoggedIn'
import { RegisterForm } from '@features/register/organisms'
import { RegisterFormType } from '@features/register/type'
import * as S from './style'

interface Props {
  defaultValue?: Partial<RegisterFormType>
}

const MypageTemplate = ({ defaultValue }: Props) => {
  const { isSuccess } = useLoggedIn({ redirectTo: '/login' })
  return (
    <S.Wrapper>
      <Header isLoggedIn={isSuccess} />

      <RegisterForm defaultValue={defaultValue} title='마이페이지' />
    </S.Wrapper>
  )
}

export default MypageTemplate
