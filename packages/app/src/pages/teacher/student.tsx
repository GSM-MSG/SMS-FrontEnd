import { SEO } from '@features/global'
import AuthenticationStudentsTemplate from '@features/teacher/templates/AuthenticationStudentsTemplate'

const TeacherStudentListPage = () => {
  return (
    <>
      <SEO title='학생 관리' />
      <AuthenticationStudentsTemplate />
    </>
  )
}

export default TeacherStudentListPage
