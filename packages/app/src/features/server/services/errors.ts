import Errors from '@/types/Errors'

const errors: Errors = {
  [process.env.SERVER_URL as string]: {
    '/auth': {
      POST: {
        400: '시크릿 값이 일치하지 않습니다',
        401: '코드 값이 만료되었습니다',
        404: '서비스를 찾을 수 없습니다',
        500: 'Gauth에 문제가 발생했습니다',
      },
      PATCH: {
        404: '토큰을 찾을 수 없습니다',
      },
      DELETE: {
        404: '토큰 값이 올바르지 않습니다',
      },
    },

    '/auth/verify/access': {
      404: '권한이 존재하지 않습니다',
    },

    '/auth/withdrawal': {
      DELETE: {
        404: '학생을 찾을 수 없습니다',
      },
    },

    '/student': {
      GET: {
        404: '학생을 찾을 수 없습니다',
      },
    },
  },
}

export default errors
