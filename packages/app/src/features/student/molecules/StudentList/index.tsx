import StudentType from '@features/student/types/StudentType'
import { StudentCard } from '@sms/shared'
import * as S from './style'

interface Props {
  students?: StudentType[]
  max: number
}

const StudentList = ({ students, max }: Props) => {
  return (
    <S.Content>
      <S.MaxCount>
        <S.Count>{max}</S.Count>명
      </S.MaxCount>

      <S.Students>
        {students?.map((i) => (
          <StudentCard key={i.id} {...i} onClick={() => {}} />
        ))}
      </S.Students>
    </S.Content>
  )
}

export default StudentList
