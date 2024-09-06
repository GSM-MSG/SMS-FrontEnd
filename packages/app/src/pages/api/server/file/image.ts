import fs from 'fs'
import formidable from 'formidable'
import serverApi from '@api/serverApi'
import { withHandler } from '@features/server/libs'

export const config = {
  api: {
    bodyParser: false,
  },
}

export default withHandler({
  methods: ['POST'],
  checkAccess: true,
  handler: async ({ req, res, accessToken }) => {
    const form = formidable({})
    const [_, files] = await form.parse(req)

    const file = files.file?.[0]
    if (!file || !file.originalFilename) return

    const fileStream = fs.readFileSync(file.filepath)
    const formData = new FormData()
    formData.append('file', new Blob([fileStream]), file.originalFilename)

    const { data, status } = await serverApi({
      method: 'POST',
      url: '/file/image',
      data: formData,
      headers: {
        ...req.headers,
        host: process.env.SERVER_URL?.replace('https://', ''),
        Authorization: `Bearer ${accessToken}`,
      },
    })

    return res.status(status).json(data)
  },
})
