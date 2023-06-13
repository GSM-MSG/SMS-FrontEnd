import StudentType from '@features/student/types/StudentType'
import StudentList from '@features/student/molecules/StudentList'
import { Header } from '@sms/shared'
import * as S from './style'

interface Props {
  students?: StudentType[]
  max: number
}

const StudentsTemplate = ({ students, max }: Props) => {
  return (
    <S.Wrapper>
      <Header />
      <StudentList students={students} max={max} />
    </S.Wrapper>
  )
}

export default StudentsTemplate
