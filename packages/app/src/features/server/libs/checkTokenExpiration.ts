import { decode } from 'jsonwebtoken'

const checkTokenExpiration = (token: string) => {
  try {
    const decodedToken = decode(token, { json: true, complete: true })
    if (
      !decodedToken ||
      typeof decodedToken.payload === 'string' ||
      !decodedToken.payload.exp
    )
      return false

    const expiresDate = new Date(decodedToken.payload.exp * 1000)
    if (expiresDate <= new Date()) return false

    return true
  } catch (e) {
    return false
  }
}

export default checkTokenExpiration
