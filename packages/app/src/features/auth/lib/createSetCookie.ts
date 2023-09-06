import env from '@lib/env'

export const createSetCookie = (data: string[]) => {
  return data.map(fixCookie)
}

export const fixCookie = (cookie: string) => {
  const secure = process.env.NODE_ENV === 'production' ? 'secure;' : ''
  const host = new URL(env.NEXT_PUBLIC_CLIENT_URL).host.replace(':3000', '')

  return `${cookie}; path=/; ${secure} domain=${host}; SameSite=Strict`
}
