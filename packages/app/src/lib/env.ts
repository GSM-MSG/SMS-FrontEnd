const { GAUTH_REDIRECT_URI, GAUTH_CLIENT_ID } = process.env

if (!(GAUTH_CLIENT_ID || GAUTH_REDIRECT_URI))
  throw new Error('missing environment value')

const env = { GAUTH_REDIRECT_URI, GAUTH_CLIENT_ID } as const

export default env
