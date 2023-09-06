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
  const expires = new Date(
    new Date(expired).toLocaleString('en-US', {
      timeZone: 'Asia/Seoul',
    })
  )
  const currentDate = new Date(
    new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Seoul',
    })
  )

  const secure = process.env.NODE_ENV === 'production' ? 'secure;' : ''
  const host = new URL(env.NEXT_PUBLIC_CLIENT_URL).host.replace(':3000', '')
  const maxAge = (expires.getTime() - currentDate.getTime()) / 1000

  return `${name}=${token}; path=/; expires=${Math.floor(
    maxAge
  )}; httpOnly; ${secure} domain=${host}; SameSite=Strict`
}
