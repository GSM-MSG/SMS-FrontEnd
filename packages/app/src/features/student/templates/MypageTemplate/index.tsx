import useLoggedIn from '@features/auth/hook/useLoggedIn'
import { RegisterFormType } from '@features/register/type'
import MyPageForm from '@features/student/molecules/MyPageForm'
import StudentExitButton from '@features/student/atoms/StudentExitButton'
import Header from '@features/global/Header'
import * as S from './style'

interface Props {
  defaultValue?: Partial<RegisterFormType>
}

const MypageTemplate = ({ defaultValue }: Props) => {
  useLoggedIn({ redirectTo: '/login' })

  return (
    <S.Wrapper>
      <Header />
      <MyPageForm defaultValue={defaultValue} />
      <StudentExitButton />
    </S.Wrapper>
  )
}

export default MypageTemplate
