import Token from '@lib/Token'
import env from '@lib/env'

export const clearSetCookie = () => {
  return [createCookie(Token.ACCESS_TOKEN), createCookie(Token.REFRESH_TOKEN)]
}

export const createCookie = (name: string) => {
  const secure = process.env.NODE_ENV === 'production' ? 'secure;' : ''
  const host = new URL(env.NEXT_PUBLIC_CLIENT_URL).host

  return `${name}=empty; path=/; max-age=-1; httpOnly; ${secure} domain=${host}`
}
