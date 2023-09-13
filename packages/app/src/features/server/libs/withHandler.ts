import { isAxiosError } from 'axios'
import ErrorMapper from '@lib/ErrorMapper'
import errors from '@features/server/services/errors'
import { NextApiRequest, NextApiResponse } from 'next'
import Token from '@lib/Token'

type Method = 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT'

interface ConfigType {
  methods: Method[]
  handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void>
  checkAccess?: boolean
  checkRefresh?: boolean
}

export default function withHandler({
  methods,
  handler,
  checkAccess,
  checkRefresh,
}: ConfigType) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method && !methods.includes(req.method as Method))
      return res.status(405).end()

    const accessToken = req.cookies[Token.ACCESS_TOKEN]
    const refreshToken = req.cookies[Token.REFRESH_TOKEN]
    if ((checkAccess && !accessToken) || (checkRefresh && !refreshToken))
      return res.status(401).json({ message: '토큰이 존재하지 않습니다' })

    try {
      await handler(req, res)
    } catch (error) {
      if (!isAxiosError(error))
        return res.status(500).json({ message: ErrorMapper(error, errors) })

      res
        .status(error.response?.status || 500)
        .json({ message: ErrorMapper(error, errors) })
    }
  }
}
