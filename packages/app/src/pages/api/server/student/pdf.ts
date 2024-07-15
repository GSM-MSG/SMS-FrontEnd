import type { NextApiRequest, NextApiResponse } from 'next'

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'PUT') {
    res.status(200).json({ message: 'File uploaded successfully' })
  } else {
    res.status(413).json({ message: 'Method not allowed' })
  }
}

export default handler
