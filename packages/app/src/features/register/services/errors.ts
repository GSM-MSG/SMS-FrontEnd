import env from '@lib/env'
import Errors from '@/types/Errors'

const errors: Errors = {
  [env.NEXT_PUBLIC_CLIENT_URL]: {
    '/student': {
      POST: {
        400: '잘못된 입력 형식입니다',
        409: '이미 회원가입을 한 유저입니다',
      },
    },
    '/file': { POST: { 400: 'hwp 또는 hwpx 형식만 가능합니다' } },
    '/file/image': {
      POST: {
        400: '이미지 형식이 올바르지 않습니다',
        403: '접근 권한이 없습니다',
      },
    },
  },
}

export default errors
