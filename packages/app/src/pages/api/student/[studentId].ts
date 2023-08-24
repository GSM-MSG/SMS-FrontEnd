import { NextApiRequest, NextApiResponse } from 'next'
import { findRole } from '@features/student/lib/findRole'
import studentDetailApi from '@features/student/service/studentDetailApi'

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
  const role = findRole(accessToken || '')

  const data = await studentDetailApi(`${studentId}`, role, accessToken)
  if (!data) return res.status(404).json({ message: 'not found student' })

  res.status(200).json(data)
}
