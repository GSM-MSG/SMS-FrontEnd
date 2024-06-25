import StudentColumn from '@features/teacher/molecules/StudentColumn'
import * as Icons from '@sms/shared/src/icons'
import * as S from './style'

const StudentList = () => {
  return (
    <S.Wrapper>
      <S.HeadLine>
        <S.Title>학생</S.Title>

        <S.Filter>
          <Icons.Filter />
          필터
        </S.Filter>
      </S.HeadLine>

      <S.StudentList>
        <StudentColumn />
        <StudentColumn />
        <StudentColumn />
        <StudentColumn />
      </S.StudentList>
    </S.Wrapper>
  )
}

export default StudentList
