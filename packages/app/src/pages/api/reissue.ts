import { createSetCookie } from '@features/auth/lib/createSetCookie'
import Token from '@lib/Token'
import { withHandler } from '@features/server/libs'
import { reissueService } from '@features/server/services'

export default withHandler({
  methods: ['PATCH'],
  checkRefresh: true,

  handler: async (req, res) => {
    const refreshToken = req.cookies[Token.REFRESH_TOKEN]
    if (!refreshToken) return

    const { data, headers } = await reissueService(refreshToken)

    const setCookie = headers['set-cookie'] || []

    res
      .status(200)
      .setHeader('Set-Cookie', createSetCookie(setCookie))
      .json(data)
  },
})
