import { SEO } from '@components'
import useLoggedIn from '@features/auth/hook/useLoggedIn'
import LoginTemplate from '@templates/LoginTemplate'

const Login = () => {
  useLoggedIn({ redirectToIfFound: '/' })

  return (
    <>
      <SEO title='login' />
      <LoginTemplate />
    </>
  )
}

export default Login
