import { ParsedUrlQuery } from 'querystring'
import { GetServerSideProps } from 'next'
import useLoggedIn from '@features/auth/hook/useLoggedIn'
import { SEO } from '@features/global'
import { useStudent } from '@features/student'
import useStudentsParam from '@features/student/hooks/useStudentsParam'
import StudentsTemplate from '@features/student/templates/StudentsTemplate'
import { useEffect } from 'react'
import { useModal } from '@features/modal/hooks'
import StudentDetailModal from '@features/student/molecules/StudentDetailModal'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return { props: { query: ctx.query, studentId: ctx.params?.studentId } }
}

interface Props {
  query: ParsedUrlQuery
  studentId?: string
}

const StudentDetailPage = ({ query, studentId }: Props) => {
  const { studentList, totalSize } = useStudent()
  const { onShow } = useModal()
  useStudentsParam({ query })

  useLoggedIn({})

  useEffect(() => {
    if (!studentId) return

    onShow(<StudentDetailModal studentId={studentId} />)
  }, [])

  return (
    <>
      <SEO />
      <StudentsTemplate students={studentList} max={totalSize || 0} />
    </>
  )
}

export default StudentDetailPage
