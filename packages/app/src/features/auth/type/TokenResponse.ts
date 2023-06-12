export interface TokenResponse {
  accessToken: string
  refreshToken: string
  accessTokenExp: string
  refreshTokenExp: string
  role: 'ROLE_STUDENT' | 'ROLE_TEACHER'
  isExist: boolean
}

export type ReissueResponse = Omit<TokenResponse, 'isExist' | 'role'>
