import { decode } from 'jsonwebtoken'

/**
 * 학생 디테일 정보를 조회할 때 사용합니다
 */
export const findRole = (cookie: string) => {
  const payload = decode(cookie, { json: true })

  switch (payload?.ROLE) {
    case 'ROLE_TEACHER':
      return 'teacher/'
    case 'ROLE_STUDENT':
      return ''
    default:
      return 'anonymous/'
  }
}
