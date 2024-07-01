import { useRouter } from 'next/router'
import { SEO } from '@features/global'
import { useEffect } from 'react'
import useStudentDetailQuery from '@features/student/queries/useStudentDetailQuery'
import PortfolioTemplate from '@features/student/templates/PortfolioTemplate'

const StudentDetailPortfolioPage = () => {
  const router = useRouter()

  const { studentId } = router.query
  const { data, isFetched } = useStudentDetailQuery({ studentId })

  useEffect(() => {
    if ((!data || typeof studentId !== 'string') && isFetched) {
      router.push('/', '/')
      return
    }
  }, [])

  return (
    <>
      <SEO
        title={data?.name.replace('**', '소금') + ' 포트폴리오'}
        description={data?.introduce}
        image={data?.profileImgUrl}
      />
      <PortfolioTemplate />
    </>
  )
}
export default StudentDetailPortfolioPage
