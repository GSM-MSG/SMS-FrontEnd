import serverApi from '@api/serverApi'
import { reissueService } from '@features/server/services'
import setAuthCookies from '@features/auth/lib/setAuthCookies'
import { withHandler } from '@features/server/libs'

export default withHandler({
  methods: ['GET', 'POST', 'DELETE', 'PATCH', 'PUT', 'HEAD'],
  handler: async ({ req, res, accessToken, refreshToken }) => {
    const url = req.url?.replace('/api/server', '')
    let access = accessToken

    if (!access && refreshToken) {
      const { data } = await reissueService(refreshToken)

      access = data.accessToken
      setAuthCookies(req, res, data)
    }

    if (access) {
      const apiRes = await serverApi({
        url,
        method: req.method,
        data: ['GET', 'DELETE', 'HEAD'].includes(req.method || '')
          ? undefined
          : req.body,
        headers: {
          ...req.headers,
          Authorization: `Bearer ${access}`,
        },
      })

      return res.status(apiRes.status).json(apiRes.data)
    }

    const apiRes = await serverApi({
      url,
      method: req.method,
      data: ['GET', 'DELETE', 'HEAD'].includes(req.method || '')
        ? undefined
        : req.body,
      headers: {
        ...req.headers,
      },
    })

    return res.status(apiRes.status).json(apiRes.data)
  },
})
