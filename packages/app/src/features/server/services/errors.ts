import Errors from '@/types/Errors'

const errors: Errors = {
  [process.env.SERVER_URL as string]: {
    '/student': {
      GET: {
        401: '페이지를 다시 로드해주세요',
      },
    },
  },
}

export default errors
