import { SEO } from '@features/global'
import { RegisterForm } from '@features/register/organisms'
import RegisterLayout from '@layouts/RegisterLayout'

const Register = () => {
  return (
    <>
      <SEO title='회원가입' />
      <RegisterLayout>
        <RegisterForm />
      </RegisterLayout>
    </>
  )
}

export default Register
