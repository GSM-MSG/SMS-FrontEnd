import StudentType from '@features/student/types/StudentType'
import { StudentCard } from '@sms/shared'
import useScrollObserver from '@features/student/hooks/useScrollObserver'
import { useModal } from '@features/modal/hooks'
import StudentDetailModal from '@features/student/molecules/StudentDetailModal'
import * as S from './style'

interface Props {
  students?: StudentType[]
  max: number
}

const StudentList = ({ students, max }: Props) => {
  const { observe } = useScrollObserver()
  const { onShow } = useModal()

  return (
    <S.Content>
      <S.MaxCount>
        <S.Count>{max}</S.Count>명
      </S.MaxCount>

      <S.Students>
        {students?.map((i) => (
          <StudentCard
            key={i.id}
            {...i}
            onClick={() => onShow(<StudentDetailModal />)}
          />
        ))}
      </S.Students>

      <div ref={observe} />
    </S.Content>
  )
}

export default StudentList
