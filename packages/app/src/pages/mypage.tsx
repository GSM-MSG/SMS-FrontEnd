import { SEO } from '@features/global'
import { MyPageStudentTypeToRegisterFormType } from '@features/student/mappers'
import profileService from '@features/student/service/profileService'
import MypageTemplate from '@features/student/templates/MypageTemplate'
import { MyPageStudentType } from '@features/student/types/MyPageStudentType'
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

interface Props {
  data: MyPageStudentType
}

const Mypage = ({ data }: Props) => {
  return (
    <>
      <SEO title='마이페이지' />
      <MypageTemplate
        defaultValue={MyPageStudentTypeToRegisterFormType(data)}
      />
    </>
  )
}

export default Mypage
