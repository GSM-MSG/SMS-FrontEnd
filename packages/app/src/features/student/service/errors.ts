import env from '@lib/env'
import Errors from '@/types/Errors'

const errors: Errors = {
  [env.NEXT_PUBLIC_SERVER_URL]: {
    '/student': {
      GET: {
        401: '페이지를 다시 로드해주세요',
      },
    },
  },
}

export default errors
