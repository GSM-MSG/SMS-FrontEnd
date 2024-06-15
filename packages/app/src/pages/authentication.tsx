import { SEO } from '@features/global'
import AuthenticationFormTemplate from '@features/student/templates/AuthenticationFormTemplate'

const AuthenticationFormPage = () => {
  return (
    <>
      <SEO title='인증제 폼' />
      <AuthenticationFormTemplate />
    </>
  )
}

export default AuthenticationFormPage
