import Token from '@lib/Token'
import { TokenResponse } from '@features/auth/type/TokenResponse'
import env from '@lib/env'

export const createSetCookie = (data: TokenResponse) => {
  const accessToken = createCookie(
    Token.ACCESS_TOKEN,
    data.accessToken,
    data.accessTokenExp
  )
  const refreshToken = createCookie(
    Token.REFRESH_TOKEN,
    data.refreshToken,
    data.refreshTokenExp
  )

  return [refreshToken, accessToken]
}

export const createCookie = (name: string, token: string, expired: string) => {
  const secure = process.env.NODE_ENV === 'production' ? 'secure;' : ''
  const UTCDate = new Date(expired).toUTCString()
  const host = new URL(env.NEXT_PUBLIC_CLIENT_URL).host.replace(':3000', '')

  return `${name}=${token}; path=/; expires=${UTCDate}; httpOnly; ${secure} domain=${host}`
}
