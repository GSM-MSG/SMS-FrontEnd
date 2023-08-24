import Token from '@lib/Token'

export const clearSetCookie = () => {
  return [createCookie(Token.ACCESS_TOKEN), createCookie(Token.REFRESH_TOKEN)]
}

export const createCookie = (name: string) => {
  const secure = process.env.NODE_ENV === 'production' ? 'secure;' : ''

  return `${name}=empty; path=/; max-age=-1; httpOnly; ${secure} domain=localhost`
}
