import { SEO } from '@features/global'
import profileService from '@features/student/service/profileService'
import GSMInfoTemplate from '@features/student/templates/GSMInfoTemplate'
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const data = await profileService(ctx.req.cookies.accessToken)
  if (!data)
    return {
      props: {},
      redirect: { destination: '/login' },
    }

  return {
    props: {
      data,
    },
  }
}

const GSMInfoPage = () => {
  return (
    <>
      <SEO title='인증제페이지' />
      <GSMInfoTemplate />
    </>
  )
}

export default GSMInfoPage
