import StudentType from '@features/student/types/StudentType'
import { StudentCard } from '@sms/shared'
import useScrollObserver from '@features/student/hooks/useScrollObserver'
import useModal from '@features/student/hooks/useModal'
import useStudentsParam from '@features/student/hooks/useStudentsParam'
import * as S from './style'

interface Props {
  students?: StudentType[]
  max: number
}

const StudentList = ({ students, max }: Props) => {
  useStudentsParam()
  const { observe } = useScrollObserver()
  const { onShowAndSetId } = useModal('detail')

  return (
    <S.Content>
      <S.MaxCount>
        <S.Count>{max}</S.Count>명
      </S.MaxCount>

      <S.Students>
        {students?.map((i) => (
          <StudentCard key={i.id} {...i} onClick={() => onShowAndSetId(i.id)} />
        ))}
      </S.Students>

      <div ref={observe} />
    </S.Content>
  )
}

export default StudentList
