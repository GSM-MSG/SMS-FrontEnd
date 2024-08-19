import StudentColumn from '@features/teacher/molecules/StudentColumn'
import * as Icons from '@sms/shared/src/icons'
import { useModal } from '@features/modal/hooks'
import FilterModal from '@features/teacher/molecules/FilterModal'
import { Content } from '@features/teacher/dtos/res/AuthenticationStudentListResDto'
import * as S from './style'

interface Props {
  studentList: Content[]
}

const StudentList = ({ studentList }: Props) => {
  const { onShow } = useModal()

  return (
    <S.Wrapper>
      <S.HeadLine>
        <S.Title>학생</S.Title>

        <S.Filter onClick={() => onShow(<FilterModal />)}>
          <Icons.Filter />
          필터
        </S.Filter>
      </S.HeadLine>

      <S.StudentList>
        {studentList.map((student, idx) => (
          <StudentColumn key={`${student.id}-${idx}`} student={student} />
        ))}
      </S.StudentList>
    </S.Wrapper>
  )
}

export default StudentList
