import { clearSetCookie } from '@features/auth/lib/clearSetCookie'
import Token from '@lib/Token'
import { withHandler } from '@features/server/libs'
import { logoutService } from '@features/server/services'

export default withHandler({
  methods: ['DELETE'],
  checkAccess: true,
  checkRefresh: true,

  handler: async (req, res) => {
    const access = req.cookies[Token.ACCESS_TOKEN]
    const refresh = req.cookies[Token.REFRESH_TOKEN]
    if (!access || !refresh) return

    await logoutService(access, refresh)

    res
      .status(200)
      .setHeader('Set-Cookie', clearSetCookie())
      .json({ message: '로그아웃 성공' })
  },
})
