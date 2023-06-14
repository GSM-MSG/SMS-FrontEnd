import StudentType from '@features/student/types/StudentType'
import StudentList from '@features/student/molecules/StudentList'
import useLoggedIn from '@features/auth/hook/useLoggedIn'
import { Header } from '@sms/shared'
import * as S from './style'

interface Props {
  students?: StudentType[]
  max: number
}

const StudentsTemplate = ({ students, max }: Props) => {
  const { isSuccess } = useLoggedIn()

  return (
    <S.Wrapper>
      <Header isLoggedIn={isSuccess} />
      <StudentList students={students} max={max} />
    </S.Wrapper>
  )
}

export default StudentsTemplate
