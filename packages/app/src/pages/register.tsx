import useLoggedIn from '@features/auth/hook/useLoggedIn'
import { RegisterForm } from '@features/register/organisms'
import RegisterLayout from '@layouts/RegisterLayout'

const Register = () => {
  useLoggedIn()
  return (
    <RegisterLayout>
      <RegisterForm />
    </RegisterLayout>
  )
}

export default Register
