import { SEO } from '@features/global'
import useLoggedIn from '@features/auth/hook/useLoggedIn'
import { RegisterForm } from '@features/register/organisms'
import RegisterLayout from '@layouts/RegisterLayout'

const Register = () => {
  useLoggedIn({ redirectTo: '/', redirectToIfFound: '/' })

  return (
    <>
      <SEO title='회원가입' />
      <RegisterLayout>
        <RegisterForm isLogo />
      </RegisterLayout>
    </>
  )
}

export default Register
