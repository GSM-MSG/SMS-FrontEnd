import StudentType from '@features/student/types/StudentType'
import { StudentCard } from '@sms/shared'
import * as S from './style'

interface Props {
  students?: StudentType[]
}

const StudentList = ({ students }: Props) => {
  return (
    <S.Wrapper>
      {students?.map((i) => (
        <StudentCard key={i.id} {...i} onClick={() => {}} />
      ))}
    </S.Wrapper>
  )
}

export default StudentList
