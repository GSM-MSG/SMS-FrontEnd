import { ReissueResponse } from '@features/auth/type/TokenResponse'
import Token from '@lib/Token'
import { NextApiRequest, NextApiResponse } from 'next'
import Cookies from 'cookies'

const cookieOption = (expires: string): Partial<Cookies.SetOption> => ({
  //secure: process.env.NODE_ENV === 'production',
  httpOnly: true,
  expires: new Date(expires),
  sameSite: 'strict',
  path: '/',
})

const setAuthCookies = (
  req: NextApiRequest,
  res: NextApiResponse,
  data: ReissueResponse
) => {
  const cookies = new Cookies(req, res)

  cookies.set(
    Token.ACCESS_TOKEN,
    data.accessToken,
    cookieOption(data.accessTokenExp)
  )
  cookies.set(
    Token.REFRESH_TOKEN,
    data.refreshToken,
    cookieOption(data.refreshTokenExp)
  )
}

export default setAuthCookies
