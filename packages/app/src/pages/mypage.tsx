import { NotFound, SEO } from '@features/global'
import { LoadingPortal } from '@features/modal/portals'
import { MyPageStudentTypeToRegisterFormType } from '@features/student/mappers'
import useStudentProfileQuery from '@features/student/queries/useStudentProfileQuery'
import MypageTemplate from '@features/student/templates/MypageTemplate'

const Mypage = () => {
  const { data, isLoading } = useStudentProfileQuery()

  if (isLoading) return <LoadingPortal />
  if (!data) return <NotFound />

  return (
    <>
      <SEO title='마이페이지' />
      <MypageTemplate
        defaultValue={MyPageStudentTypeToRegisterFormType(data)}
      />
    </>
  )
}

export default Mypage
