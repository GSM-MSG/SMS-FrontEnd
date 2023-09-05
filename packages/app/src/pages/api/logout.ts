import { NextApiRequest, NextApiResponse } from 'next'
import { axiosApi } from '@api'
import { clearSetCookie } from '@features/auth/lib/clearSetCookie'
import { isAxiosError } from 'axios'
import ErrorMapper from '@lib/ErrorMapper'
import errors from '@features/auth/errors'
import Token from '@lib/Token'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'DELETE')
    return res.status(404).json({ message: 'Not found page' })

  const access = req.cookies[Token.ACCESS_TOKEN]
  const refresh = req.cookies[Token.REFRESH_TOKEN]
  if (!access || !refresh)
    return res.status(404).json({ message: 'Not found token' })

  try {
    await axiosApi.delete(`${process.env.SERVER_URL}/auth`, {
      headers: {
        Authorization: `Bearer ${access}`,
        Refresh_Token: refresh,
      },
    })

    res
      .status(200)
      .setHeader('Set-Cookie', clearSetCookie())
      .json({ message: '로그아웃 성공' })
  } catch (e) {
    if (!isAxiosError(e))
      return res.status(500).json({ message: 'Server Error' })

    res
      .status(e.response?.status || 500)
      .json({ message: ErrorMapper(e, errors) })
  }
}
