import { SEO } from '@features/global'
import useAuthenticationVerify from '@features/student/queries/useAuthenticationVerify'
import AuthenticationFormTemplate from '@features/student/templates/AuthenticationFormTemplate'
import AuthenticationResultTemplate from '@features/student/templates/AuthenticationResultTemplate'

const AuthenticationFormPage = () => {
  const { data } = useAuthenticationVerify()

  if (data?.markingBoardType === 'COMPLETED')
    return <AuthenticationResultTemplate data={data} />

  return (
    <>
      <SEO title='인증제 폼' />
      <AuthenticationFormTemplate />
    </>
  )
}

export default AuthenticationFormPage
