import { BlurPortal } from '@features/modal/portals'
import StudentDetail from '@features/student/molecules/StudentDetail'

interface Props {
  studentId: string
}

const StudentDetailModal = ({ studentId }: Props) => {
  return (
    <BlurPortal>
      <StudentDetail isCloseBtn studentId={studentId} student={null} />
    </BlurPortal>
  )
}

export default StudentDetailModal
