import type { NextApiRequest, NextApiResponse } from 'next'

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb', // 원하는 크기로 설정합니다.
    },
  },
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'PUT') {
    // 폼데이터를 처리하는 로직 추가
    res.status(200).json({ message: 'File uploaded successfully' })
  } else {
    res.status(413).json({ message: 'Method not allowed' })
  }
}

export default handler
