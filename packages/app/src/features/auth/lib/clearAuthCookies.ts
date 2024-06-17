import Token from '@lib/Token'
import Cookies from 'cookies'

const clearAuthCookies = (cookies: Cookies) => {
  cookies.set(Token.ACCESS_TOKEN, '', { maxAge: -1 })
  cookies.set(Token.REFRESH_TOKEN, '', { maxAge: -1 })
}

export default clearAuthCookies
