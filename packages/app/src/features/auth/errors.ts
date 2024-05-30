import env from '@lib/env'
import Errors from '@/types/Errors'

const errors: Errors = {
  [env.NEXT_PUBLIC_CLIENT_URL]: {
    '/auth': {
      POST: {
        400: '시크릿 값이 일치하지 않습니다',
        401: '코드 값이 만료되었습니다',
        404: '서비스를 찾을 수 없습니다',
        500: 'GAuth에 문제가 발생했습니다',
      },
      DELETE: {
        404: '토큰 값이 올바르지 않습니다',
      },
    },
    '/auth/withdrawal': {
      DELETE: {},
    },
  },
}

export default errors
