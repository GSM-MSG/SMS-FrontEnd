import StudentColumn from '@features/teacher/molecules/StudentColumn'
import * as Icons from '@sms/shared/src/icons'
import { useModal } from '@features/modal/hooks'
import FilterModal from '@features/teacher/molecules/FilterModal'
import * as S from './style'

const StudentList = () => {
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
        <StudentColumn />
        <StudentColumn />
        <StudentColumn />
        <StudentColumn />
      </S.StudentList>
    </S.Wrapper>
  )
}

export default StudentList
