import useLoggedIn from '@features/auth/hook/useLoggedIn'
import { SEO } from '@features/global'
import { TeacherRegisterForm } from '@features/register/organisms'
import RegisterLayout from '@layouts/RegisterLayout'

const TeacherRegister = () => {
  useLoggedIn({ redirectTo: '/' })

  return (
    <>
      <SEO title='선생님 회원가입' />
      <RegisterLayout>
        <TeacherRegisterForm />
      </RegisterLayout>
    </>
  )
}

export default TeacherRegister
