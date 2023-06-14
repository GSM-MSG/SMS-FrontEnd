import StudentType from '@features/student/types/StudentType'
import StudentList from '@features/student/molecules/StudentList'
import { Header } from '@sms/shared'
import useModal from '@features/student/hooks/useModal'
import * as S from './style'

interface Props {
  students?: StudentType[]
  max: number
}

const StudentsTemplate = ({ students, max }: Props) => {
  const { onShow } = useModal('filter')
  return (
    <S.Wrapper>
      <Header onFilter={onShow} />
      <StudentList students={students} max={max} />
    </S.Wrapper>
  )
}

export default StudentsTemplate
