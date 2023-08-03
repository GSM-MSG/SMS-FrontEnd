import { ParsedUrlQuery } from 'querystring'
import { SEO } from '@components'
import StudentsTemplate from '@features/student/templates/StudentsTemplate'
import useStudentDetail from '@features/student/hooks/useStudentDetail'
import useLoggedIn from '@features/auth/hook/useLoggedIn'
import { useStudent } from '@features/student'
import useStudentsParam from '@features/student/hooks/useStudentsParam'
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return { props: { query: ctx.query } }
}

interface Props {
  query: ParsedUrlQuery
}

export default function Home({ query }: Props) {
  const { studentList, totalSize } = useStudent()
  useStudentsParam({ query })

  useLoggedIn({})
  useStudentDetail()

  return (
    <>
      <SEO />
      <StudentsTemplate students={studentList} max={totalSize || 0} />
    </>
  )
}
