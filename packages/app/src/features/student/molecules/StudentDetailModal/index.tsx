import { BlurPortal } from '@features/modal/portals'
import StudentDetail from '@features/student/molecules/StudentDetail'

interface Props {
  studentId: string | null
  student: StudentDetail | null
}

const StudentDetailModal = ({ studentId, student }: Props) => {
  return (
    <BlurPortal>
      <StudentDetail isCloseBtn studentId={studentId} student={student} />
    </BlurPortal>
  )
}

export default StudentDetailModal
