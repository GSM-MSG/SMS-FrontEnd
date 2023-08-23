import { NextApiRequest, NextApiResponse } from 'next'
import { axiosApi } from '@api'
import { TokenResponse } from '@features/auth/type/TokenResponse'
import { isAxiosError } from 'axios'
import Token from '@lib/Token'

/**
 * 로그인 BFF
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(404).json({ message: '페이지가 존재하지 않습니다' })
  }

  const code = req.body.code
  if (!code) {
    return res.status(400).json({ message: '시크릿 값이 일치하지 않습니다' })
  }

  try {
    const { data } = await axiosApi.post<TokenResponse>('/auth', { code })

    res.setHeader('Set-Cookie', createSetCookie(data)).status(200).end()
  } catch (e) {
    if (!isAxiosError(e)) return res.status(500).end()

    res.status(e.response?.status || 400).end()
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

  return `${accessToken} ${refreshToken}`
}

const createCookie = (name: string, token: string, expires: string) => {
  const secure = process.env.NODE_ENV === 'production' ? 'secure;' : ''

  return `${name}=${token}; path=/; expires=${expires}; httpOnly; ${secure}`
}
