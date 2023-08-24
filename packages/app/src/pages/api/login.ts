import { NextApiRequest, NextApiResponse } from 'next'
import { axiosApi } from '@api'
import env from '@lib/env'
import { TokenResponse } from '@features/auth/type/TokenResponse'
import { createSetCookie } from '@features/auth/lib/createSetCookie'

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
