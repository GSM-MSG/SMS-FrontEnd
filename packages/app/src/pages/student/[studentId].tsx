import { ParsedUrlQuery } from 'querystring'
import { GetServerSideProps } from 'next'
import useLoggedIn from '@features/auth/hook/useLoggedIn'
import { SEO } from '@features/global'
import useStudentsParam from '@features/student/hooks/useStudentsParam'
import StudentsTemplate from '@features/student/templates/StudentsTemplate'
import { useEffect } from 'react'
import { useModal } from '@features/modal/hooks'
import StudentDetailModal from '@features/student/molecules/StudentDetailModal'
import { findRole } from '@features/student/lib/findRole'
import Token from '@lib/Token'
import studentDetailApi from '@features/student/service/studentDetailApi'
import { useRouter } from 'next/router'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const accessToken = ctx.req.cookies[Token.ACCESS_TOKEN]
  const role = findRole(accessToken || '')

  const data = await studentDetailApi(
    `${ctx.params?.studentId}` || '',
    role,
    accessToken
  )

  return { props: { query: ctx.query, data } }
}

interface Props {
  query: ParsedUrlQuery
  data: StudentDetail | null
}

const StudentDetailPage = ({ query, data }: Props) => {
  const router = useRouter()
  const { onShow } = useModal()
  useStudentsParam({ query })

  useLoggedIn({})

  useEffect(() => {
    if (!data) {
      router.push('/', '/')
      return
    }

    onShow(<StudentDetailModal studentId='' student={data} />)
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
