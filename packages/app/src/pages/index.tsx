import { ParsedUrlQuery } from 'querystring'
import { SEO } from '@features/global'
import StudentsTemplate from '@features/student/templates/StudentsTemplate'
import useLoggedIn from '@features/auth/hook/useLoggedIn'
import useStudentsParam from '@features/student/hooks/useStudentsParam'
import { GetServerSideProps } from 'next'
import studentListApi from '@features/student/service/studentListApi'
import Response from '@features/student/service/studentApi/Response'
import Token from '@lib/Token'
import { useStudent } from '@features/student'
import { useEffect } from 'react'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { data } = await studentListApi(
    {
      page: 1,
      size: 20,
      ...ctx.query,
    },
    ctx.req.cookies[Token.ACCESS_TOKEN]
  )

  return { props: { query: ctx.query, data: data || null } }
}

interface Props {
  query: ParsedUrlQuery
  data: Response
}

export default function Home({ query, data }: Props) {
  const { setStudentList } = useStudent()
  useStudentsParam({ query })
  useLoggedIn({})

  useEffect(() => {
    setStudentList(data?.content, data?.totalSize, data?.last)
  }, [])

  return (
    <>
      <SEO />
      <StudentsTemplate />
    </>
  )
}
