import { useRouter } from 'next/router'
import StudentDetail from '@features/student/molecules/StudentDetail'
import { NotFound } from '@features/global'

const StudentDetailTemplate = () => {
  const router = useRouter()
  const studentId = router.query.studentId?.toString()

  if (!studentId) return <NotFound />

  return (
    <>
      <StudentDetail studentId={studentId} />
    </>
  )
}

export default StudentDetailTemplate
