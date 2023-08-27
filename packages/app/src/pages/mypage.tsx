import { SEO } from '@features/global'
import MypageTemplate from '@features/student/templates/MypageTemplate'

const Mypage = () => {
  return (
    <>
      <SEO title='마이페이지' />
      <MypageTemplate />
    </>
  )
}

export default Mypage
