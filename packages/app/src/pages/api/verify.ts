import Token from '@lib/Token'
import { accessService } from '@features/server/services'
import { clearSetCookie } from '@features/auth/lib/clearSetCookie'
import { checkTokenExpiration, withHandler } from '@features/server/libs'

export default withHandler({
  methods: ['GET'],
  checkAccess: true,
  checkRefresh: true,

  handler: async (req, res) => {
    const accessToken = req.cookies[Token.ACCESS_TOKEN] || ''
    const refreshToken = req.cookies[Token.REFRESH_TOKEN] || ''

    const { isSuccess, data, error } = await accessService(accessToken)
    if (isSuccess) {
      return res.status(200).json(data)
    }

    if (!checkTokenExpiration(refreshToken)) {
      return res
        .status(401)
        .setHeader('Set-Cookie', clearSetCookie())
        .json({ message: '로그아웃 되었습니다' })
    }

    throw error
  },
})
