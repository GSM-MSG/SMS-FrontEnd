import setAuthCookies from '@features/auth/lib/setAuthCookies'
import { withHandler } from '@features/server/libs'
import { loginService } from '@features/server/services'

export default withHandler({
  methods: ['POST'],

  handler: async ({ req, res }) => {
    const code = req.body.code
    if (!code) return res.status(400).json({ message: 'not found code' })

    const { data, status } = await loginService(code)

    setAuthCookies(req, res, data)

    return res.status(status).json(data)
  },
})
