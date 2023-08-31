import StudentList from '@features/student/molecules/StudentList'
import Header from '@features/global/Header'
import { useModal } from '@features/modal/hooks'
import FilterModal from '@features/student/molecules/FilterModal'

import * as S from './style'

const StudentsTemplate = () => {
  const { onShow } = useModal()

  return (
    <S.Wrapper>
      <Header onFilter={() => onShow(<FilterModal />)} />
      <StudentList />
    </S.Wrapper>
  )
}

export default StudentsTemplate
