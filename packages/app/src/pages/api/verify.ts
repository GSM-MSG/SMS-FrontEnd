import { NextApiRequest, NextApiResponse } from 'next'
import Token from '@lib/Token'
import { decode } from 'jsonwebtoken'
import accessService from '@features/server/services/accessService'
import { clearSetCookie } from '@features/auth/lib/clearSetCookie'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(400).json({ message: 'not found page' })
  }
  const refreshToken = req.cookies[Token.REFRESH_TOKEN] || ''

  const { isSuccess, data } = await accessService()
  if (isSuccess) {
    return res.status(200).json(data)
  }

  if (!verifyToken(refreshToken)) {
    return res
      .status(401)
      .setHeader('Set-Cookie', clearSetCookie())
      .json({ message: 'logout' })
  }

  res.status(400).json({ message: '니가 잘못 했겠지' })
}

const verifyToken = (token: string) => {
  try {
    const decodedToken = decode(token, { json: true, complete: true })
    if (
      !decodedToken ||
      typeof decodedToken.payload === 'string' ||
      !decodedToken.payload.exp
    )
      return false

    const expiresDate = new Date(decodedToken.payload.exp * 1000)
    if (expiresDate <= new Date()) return false

    return true
  } catch (e) {
    return false
  }
}
