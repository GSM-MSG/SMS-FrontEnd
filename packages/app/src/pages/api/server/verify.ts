import getRole from '@features/auth/lib/getRole'
import { withHandler } from '@features/server/libs'

export default withHandler({
  methods: ['GET'],
  handler: async ({ res, accessToken }) => {
    try {
      if (!accessToken) throw Error()

      const role = getRole(accessToken)

      return res.status(200).json({ isLoggedIn: true, role })
    } catch (e) {
      return res.status(200).json({ isLoggedIn: false })
    }
  },
})
