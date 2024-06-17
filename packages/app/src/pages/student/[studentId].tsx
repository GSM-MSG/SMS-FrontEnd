import { SEO } from '@features/global'
import StudentsTemplate from '@features/student/templates/StudentsTemplate'
import { useEffect } from 'react'
import { useModal } from '@features/modal/hooks'
import StudentDetailModal from '@features/student/molecules/StudentDetailModal'
import { useRouter } from 'next/router'
import useStudentDetailQuery from '@features/student/queries/useStudentDetailQuery'

const StudentDetailPage = () => {
  const router = useRouter()
  const { onShow } = useModal()

  const { studentId } = router.query
  const { data } = useStudentDetailQuery({ studentId })

  useEffect(() => {
    if (!data || typeof studentId !== 'string') {
      router.push('/', '/')
      return
    }

    onShow(<StudentDetailModal studentId={studentId} />)
  }, [])

  return (
    <>
      <SEO
        title={data?.name.replace('**', '소금')}
        description={data?.introduce}
        image={data?.profileImgUrl}
      />
      <StudentsTemplate />
    </>
  )
}

export default StudentDetailPage
