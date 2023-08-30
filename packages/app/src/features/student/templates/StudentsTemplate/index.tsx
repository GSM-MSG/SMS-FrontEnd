import StudentList from '@features/student/molecules/StudentList'
import Header from '@features/global/Header'

import * as S from './style'

const StudentsTemplate = () => {
  return (
    <S.Wrapper>
      <Header />
      <StudentList />
    </S.Wrapper>
  )
}

export default StudentsTemplate
