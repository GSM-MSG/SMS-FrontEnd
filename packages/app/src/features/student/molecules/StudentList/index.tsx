import { useRouter } from 'next/router'
import { StudentCard, StudentCardSkeleton } from '@sms/shared'
import useScrollObserver from '@features/student/hooks/useScrollObserver'
import { useModal } from '@features/modal/hooks'
import StudentDetailModal from '@features/student/molecules/StudentDetailModal'
import useStudent from '@features/student/hooks/useStudent'
import * as S from './style'

const StudentList = () => {
  const router = useRouter()
  const { studentList, totalSize } = useStudent()
  const { observe } = useScrollObserver()
  const { onShow } = useModal()

  const onClick = (id: string) => {
    router.push('/', `/student/${id}`)
    onShow(<StudentDetailModal studentId={id} student={null} />)
  }

  return (
    <S.Content>
      <S.MaxCount>
        <S.Count>{totalSize}</S.Count>명
      </S.MaxCount>

      <S.Students>
        {!studentList.length &&
          Array(...Array(20)).map((_, idx) => (
            <StudentCardSkeleton key={idx} />
          ))}
        {studentList?.map((i) => (
          <StudentCard key={i.id} {...i} onClick={() => onClick(i.id)} />
        ))}
      </S.Students>

      <div ref={observe} />
    </S.Content>
  )
}

export default StudentList
