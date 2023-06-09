import StudentType from '@features/student/types/StudentType'
import StudentList from '@features/student/molecules/StudentList'
import useLoggedIn from '@features/auth/hook/useLoggedIn'
import useLogout from '@features/auth/hook/useLogout'
import useWithdraw from '@features/auth/hook/useWithdraw'
import { Header } from '@sms/shared'
import useModal from '@features/student/hooks/useModal'

import * as S from './style'

interface Props {
  students?: StudentType[]
  max: number
}

const StudentsTemplate = ({ students, max }: Props) => {
  const { onShow } = useModal('filter')
  const { isSuccess } = useLoggedIn({})
  const { onLogout } = useLogout()
  const { onWithdraw } = useWithdraw()

  return (
    <S.Wrapper>
      <Header
        onFilter={onShow}
        isLoggedIn={isSuccess}
        onExit={onWithdraw}
        onLogout={onLogout}
      />
      <StudentList students={students} max={max} />
    </S.Wrapper>
  )
}

export default StudentsTemplate
