import { ParsedUrlQuery } from 'querystring'
import { SEO } from '@components'
import StudentDetail from '@features/student/molecules/StudentDetail'
import StudentsTemplate from '@features/student/templates/StudentsTemplate'
import useModal from '@features/student/hooks/useModal'
import { useSelector } from 'react-redux'
import { RootState } from '@store'
import useStudentDetail from '@features/student/hooks/useStudentDetail'
import FilterModal from '@features/student/molecules/FilterModal'
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
  const { isShow } = useModal('detail')
  const { isShow: isFilterShow } = useModal('filter')
  useStudentsParam({ query })

  useLoggedIn({})
  useStudentDetail()

  const { studentDetail } = useSelector((state: RootState) => ({
    studentDetail: state.studentDetail,
  }))

  return (
    <>
      <SEO />
      <StudentsTemplate students={studentList} max={totalSize || 0} />
      {isShow && <StudentDetail student={studentDetail} />}
      {isFilterShow && <FilterModal />}
    </>
  )
}
