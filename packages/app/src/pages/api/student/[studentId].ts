import { NextApiRequest, NextApiResponse } from 'next'
import { axiosApi } from '@api'
import env from '@lib/env'
import { decode } from 'jsonwebtoken'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET')
    return res.status(400).json({ message: 'not found page' })

  const studentId = req.query.studentId
  if (!studentId)
    return res.status(400).json({ message: 'not found student id' })

  const accessToken = req.cookies['accessToken']
  const payload = decode(accessToken || '', { json: true })
  if (!payload) return res.status(401).json({ message: '쿠키가 변조됨' })

  let role: string
  switch (payload.ROLE) {
    case 'ROLE_TEACHER':
      role = 'teacher/'
      break
    case 'ROLE_STUDENT':
      role = ''
      break
    default:
      role = 'anonymous/'
  }

  try {
    const { data } = await axiosApi.get(
      `${env.NEXT_PUBLIC_SERVER_URL}/student/${role}${studentId}`,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    )

    res.status(200).json(data)
  } catch (e) {
    return res.status(404).json({ message: 'not found student' })
  }
}
