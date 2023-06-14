import { SEO } from '@components'
import { useStudent } from '@features/student'
import StudentDetail from '@features/student/molecules/StudentDetail'
import StudentsTemplate from '@features/student/templates/StudentsTemplate'
import useModal from '@features/student/hooks/useModal'
import { useSelector } from 'react-redux'
import { RootState } from '@store'
import useStudentDetail from '@features/student/hooks/useStudentDetail'
import FilterModal from '@features/student/molecules/FilterModal'

export default function Home() {
  const { data } = useStudent()
  const { isShow } = useModal('detail')
  const { isShow: isFilterShow } = useModal('filter')
  useStudentDetail()
  const { studentDetail } = useSelector((state: RootState) => ({
    studentDetail: state.studentDetail,
  }))

  return (
    <>
      <SEO />
      <StudentsTemplate students={data?.content} max={data?.totalSize || 0} />
      {isShow && <StudentDetail student={studentDetail} />}
      {isFilterShow && <FilterModal />}
    </>
  )
}
