import { NextApiRequest, NextApiResponse } from 'next'
import { axiosApi } from '@api'
import { TokenResponse } from '@features/auth/type/TokenResponse'
import { createSetCookie } from '@features/auth/lib/createSetCookie'
import Token from '@lib/Token'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'PATCH')
    return res.status(400).json({ message: 'not found page' })
  const refreshToken = req.cookies[Token.REFRESH_TOKEN]

  try {
    const { data, headers } = await axiosApi.patch<TokenResponse>(
      `${process.env.SERVER_URL}/auth`,
      {},
      { headers: { 'Refresh-Token': refreshToken } }
    )

    const setCookie = headers['set-cookie'] || []

    res
      .status(200)
      .setHeader('Set-Cookie', createSetCookie(setCookie))
      .json(data)
  } catch (e) {
    res.status(500).json('server error')
  }
}
