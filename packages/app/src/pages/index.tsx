import { SEO } from '@components'
import { useStudent } from '@features/student'
import StudentDetail from '@features/student/molecules/StudentDetail'
import StudentsTemplate from '@features/student/templates/StudentsTemplate'
import StudentDetailData from '@data/StudentDetailData'
import useModal from '@features/student/hooks/useModal'

export default function Home() {
  const { data } = useStudent()
  const { isShow } = useModal()

  return (
    <>
      <SEO />
      <StudentsTemplate students={data?.content} max={data?.totalSize || 0} />
      {isShow && <StudentDetail student={StudentDetailData} />}
    </>
  )
}
