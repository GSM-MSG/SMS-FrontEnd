import { isAxiosError } from 'axios'
import ErrorMapper from '@lib/ErrorMapper'
import errors from '@features/server/services/errors'
import { NextApiRequest, NextApiResponse } from 'next'
import Token from '@lib/Token'
import Cookies from 'cookies'
import setAuthCookies from '@features/auth/lib/setAuthCookies'
import { reissueService } from '@features/server/services'
import clearAuthCookies from '@features/auth/lib/clearAuthCookies'

type Method = 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT' | 'HEAD'

type TokenType<Check extends boolean | undefined> = Check extends true
  ? string
  : string | undefined

interface ConfigType<
  CheckAccess extends boolean | undefined = undefined,
  CheckRefresh extends boolean | undefined = undefined
> {
  methods: Method[]
  handler: (param: {
    req: NextApiRequest
    res: NextApiResponse
    accessToken: TokenType<CheckAccess>
    refreshToken: TokenType<CheckRefresh>
  }) => Promise<void>
  checkAccess?: CheckAccess
  checkRefresh?: CheckRefresh
}

export default function withHandler<
  Access extends boolean | undefined,
  Refresh extends boolean | undefined
>({
  methods,
  handler,
  checkAccess,
  checkRefresh,
}: ConfigType<Access, Refresh>) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method && !methods.includes(req.method as Method))
      return res.status(405).end()

    const cookies = Cookies(req, res)
    let accessToken = cookies.get(Token.ACCESS_TOKEN) as TokenType<Access>
    let refreshToken = cookies.get(Token.REFRESH_TOKEN) as TokenType<Refresh>

    try {
      if (!accessToken && refreshToken) {
        const { data } = await reissueService(refreshToken)

        accessToken = data.accessToken
        refreshToken = data.refreshToken
        setAuthCookies(req, res, data)
      }
    } catch (e) {
      clearAuthCookies(cookies)
      accessToken = undefined as TokenType<Access>
      refreshToken = undefined as TokenType<Refresh>
    }

    if ((checkAccess && !accessToken) || (checkRefresh && !refreshToken))
      return res.status(401).json({ message: 'Unauthorized' })

    try {
      await handler({ req, res, accessToken, refreshToken })
    } catch (error) {
      console.error(error)
      if (!isAxiosError(error))
        return res.status(500).json({ message: ErrorMapper(error, errors) })

      res.status(error.response?.status || 500).json(error.response?.data)
    }
  }
}
