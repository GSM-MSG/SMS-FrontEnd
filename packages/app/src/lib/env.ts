const { GAUTH_REDIRECT_URI, GAUTH_CLIENT_ID, SERVER_URL } = process.env

if (!(GAUTH_CLIENT_ID || GAUTH_REDIRECT_URI || SERVER_URL))
  throw new Error('missing environment value')

const env = { GAUTH_REDIRECT_URI, GAUTH_CLIENT_ID, SERVER_URL } as const

export default env
