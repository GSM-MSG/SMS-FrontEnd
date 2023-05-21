import env from '@lib/env'
import Errors from '@/types/Errors'

const errors: Errors = {
  [env.NEXT_PUBLIC_SERVER_URL]: {
    '/student': {
      POST: {
        400: '잘못된 입력 형식입니다',
        409: '이미 회원가입을 한 유저입니다',
      },
    },
  },
}

export default errors
