import { createSetCookie } from '@features/auth/lib/createSetCookie'
import { withHandler } from '@features/server/libs'
import { loginService } from '@features/server/services'

export default withHandler({
  methods: ['POST'],

  handler: async (req, res) => {
    const code = req.body.code
    if (!code) return res.status(400).json({ message: 'not found code' })

    const { data, headers } = await loginService(code)

    const setCookie = headers['set-cookie'] || []
    return res
      .status(200)
      .setHeader('Set-Cookie', createSetCookie(setCookie))
      .json(data)
  },
})
