import clearAuthCookies from '@features/auth/lib/clearAuthCookies'
import { withHandler } from '@features/server/libs'
import { logoutService } from '@features/server/services'
import Cookies from 'cookies'

export default withHandler({
  methods: ['DELETE'],
  checkAccess: true,
  checkRefresh: true,
  handler: async ({ req, res, accessToken, refreshToken }) => {
    const response = await logoutService(accessToken, refreshToken)
    const cookies = new Cookies(req, res)

    clearAuthCookies(cookies)

    res.status(response.status).json(response.data)
  },
})
