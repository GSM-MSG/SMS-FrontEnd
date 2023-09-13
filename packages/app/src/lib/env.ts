if (
  !(
    process.env.NEXT_PUBLIC_GAUTH_REDIRECT_URI &&
    process.env.NEXT_PUBLIC_GAUTH_CLIENT_ID &&
    process.env.NEXT_PUBLIC_CLIENT_URL
  )
)
  throw new Error('missing environment value')

const env = {
  NEXT_PUBLIC_GAUTH_REDIRECT_URI: process.env.NEXT_PUBLIC_GAUTH_REDIRECT_URI,
  NEXT_PUBLIC_GAUTH_CLIENT_ID: process.env.NEXT_PUBLIC_GAUTH_CLIENT_ID,
  NEXT_PUBLIC_CLIENT_URL: process.env.NEXT_PUBLIC_CLIENT_URL,
} as const

export default env
