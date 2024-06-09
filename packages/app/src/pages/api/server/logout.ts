import { withHandler } from '@features/server/libs'
import { logoutService } from '@features/server/services'
import Token from '@lib/Token'
import Cookies from 'cookies'

export default withHandler({
  methods: ['DELETE'],
  checkAccess: true,
  checkRefresh: true,
  handler: async ({ req, res, accessToken, refreshToken }) => {
    const response = await logoutService(accessToken, refreshToken)
    const cookies = new Cookies(req, res)

    cookies.set(Token.ACCESS_TOKEN, '', {
      expires: new Date(0),
    })
    cookies.set(Token.REFRESH_TOKEN, '', {
      expires: new Date(0),
    })

    res.status(response.status).json(response.data)
  },
})
