import { NextApiRequest, NextApiResponse } from 'next'
import { axiosApi } from '@api'
import env from '@lib/env'
import Token from '@lib/Token'
import { TokenResponse } from '@features/auth/type/TokenResponse'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(400).json({ message: 'not found page' })
  const code = req.body.code
  if (!code) return res.status(400).json({ message: 'not found code' })

  try {
    const { data } = await axiosApi.post<TokenResponse>(
      `${env.NEXT_PUBLIC_SERVER_URL}/auth`,
      { code }
    )
    res.status(200).setHeader('Set-Cookie', createSetCookie(data)).json(data)
  } catch (e) {
    res.status(500).json({ message: 'Server Error' })
  }
}

const createSetCookie = (data: TokenResponse) => {
  const accessToken = createCookie(
    Token.ACCESS_TOKEN,
    data.accessToken,
    data.accessTokenExp
  )
  const refreshToken = createCookie(
    Token.REFRESH_TOKEN,
    data.refreshToken,
    data.refreshTokenExp
  )

  return [refreshToken, accessToken]
}

const createCookie = (name: string, token: string, expired: string) => {
  const secure = process.env.NODE_ENV === 'production' ? 'secure;' : ''

  return `${name}=${token}; path=/; expires=${expired}; httpOnly; ${secure} domain=localhost`
}
