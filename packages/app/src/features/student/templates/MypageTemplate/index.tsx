import { Header } from '@sms/shared'
import useLoggedIn from '@features/auth/hook/useLoggedIn'
import { RegisterFormType } from '@features/register/type'
import MyPageForm from '@features/student/molecules/MyPageForm'
import useLogout from '@features/auth/hook/useLogout'
import StudentExitButton from '@features/student/atoms/StudentExitButton'
import * as S from './style'

interface Props {
  defaultValue?: Partial<RegisterFormType>
}

const MypageTemplate = ({ defaultValue }: Props) => {
  const { isSuccess } = useLoggedIn({ redirectTo: '/login' })
  const { onLogout } = useLogout()

  return (
    <S.Wrapper>
      <Header isLoggedIn={isSuccess} onLogout={onLogout} />

      <MyPageForm defaultValue={defaultValue} />

      <StudentExitButton />
    </S.Wrapper>
  )
}

export default MypageTemplate
