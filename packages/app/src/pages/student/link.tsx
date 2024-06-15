import { SEO } from '@features/global'
import ShareStudentsTemplate from '@features/student/templates/ShareStudentTemplate'

const ShareStudentDetailPage = () => {
  return (
    <>
      <SEO title='학생 프로필' />
      <ShareStudentsTemplate />
    </>
  )
}

export default ShareStudentDetailPage
