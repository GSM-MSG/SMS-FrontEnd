import Header from '@features/global/Header'
import StudentList from '@features/teacher/organisms/StudentList'
import useAuthenticationStudentListQuery from '@features/teacher/queries/useAuthenticationStudentListQuery'
import { Content } from '@features/teacher/dtos/res/AuthenticationStudentListResDto'
import * as S from './style'

const AuthenticationStudentsTemplate = () => {
  const { data } = useAuthenticationStudentListQuery()

  const studentList =
    data?.pages.reduce((prev, curr) => {
      prev.push(...curr.content)
      return prev
    }, [] as Content[]) ?? []

  return (
    <S.Wrapper>
      <Header />

      <StudentList studentList={studentList} />
    </S.Wrapper>
  )
}

export default AuthenticationStudentsTemplate
