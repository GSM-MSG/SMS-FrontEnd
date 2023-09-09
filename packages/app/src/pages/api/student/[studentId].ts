import { findRole } from '@features/student/lib/findRole'
import { studentDetailService } from '@features/server/services'
import { withHandler } from '@features/server/libs'

export default withHandler({
  methods: ['GET'],

  handler: async (req, res) => {
    const studentId = req.query.studentId
    if (!studentId)
      return res.status(400).json({ message: 'id를 찾을 수 없습니다' })

    const accessToken = req.cookies['accessToken'] || ''
    const role = findRole(accessToken)

    const { data } = await studentDetailService(
      `${studentId}`,
      role,
      accessToken
    )

    res.status(200).json(data)
  },
})
