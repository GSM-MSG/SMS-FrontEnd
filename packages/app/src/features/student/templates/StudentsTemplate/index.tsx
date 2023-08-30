import StudentList from '@features/student/molecules/StudentList'
import useLoggedIn from '@features/auth/hook/useLoggedIn'
import useLogout from '@features/auth/hook/useLogout'
import { Header } from '@sms/shared'
import FilterModal from '@features/student/molecules/FilterModal'
import { useModal } from '@features/modal/hooks'
import useMyPage from '@features/student/hooks/useMyPage'

import * as S from './style'

const StudentsTemplate = () => {
  const { isSuccess } = useLoggedIn({})
  const { onLogout } = useLogout()
  const { onShow } = useModal()
  const { redirectMyPage } = useMyPage()

  return (
    <S.Wrapper>
      <Header
        onFilter={() => onShow(<FilterModal />)}
        isLoggedIn={isSuccess}
        onMyPage={redirectMyPage}
        onLogout={onLogout}
      />
      <StudentList />
    </S.Wrapper>
  )
}

export default StudentsTemplate
