import { ParsedUrlQuery } from 'querystring'
import { SEO } from '@features/global'
import { GetServerSideProps } from 'next'
import ShareStudentsTemplate from '@features/student/templates/ShareStudentTemplate'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return { props: { query: ctx.query } }
}
interface Props {
  query: ParsedUrlQuery
}

const ShareStudentDetailPage = ({ query }: Props) => {
  return (
    <>
      <SEO title='학생 프로필' />
      <ShareStudentsTemplate token={query.token} />
    </>
  )
}

export default ShareStudentDetailPage
