import Header from '@features/global/Header'
import StudentList from '@features/teacher/organisms/StudentList'
import * as S from './style'

const AuthenticationStudentsTemplate = () => {
  return (
    <S.Wrapper>
      <Header />

      <StudentList />
    </S.Wrapper>
  )
}

export default AuthenticationStudentsTemplate
