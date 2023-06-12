import reissue from '@features/auth/service/reissue'
import { ReissueResponse } from '@features/auth/type/TokenResponse'
import Token from './Token'

class TokenManager {
  accessToken: string | null = null
  refreshToken: string | null = null
  accessTokenExp: Date | null = null
  refreshTokenExp: Date | null = null

  constructor() {
    this.setTokenFromLocalStorage()
  }

  static setToken(tokens: ReissueResponse) {
    localStorage.setItem(Token.ACCESS_TOKEN, tokens.accessToken)
    localStorage.setItem(Token.REFRESH_TOKEN, tokens.refreshToken)
    localStorage.setItem(Token.ACCESS_TOKEN_EXP, tokens.accessTokenExp)
    localStorage.setItem(Token.REFRESH_TOKEN_EXP, tokens.refreshTokenExp)
  }

  static clearToken() {
    localStorage.removeItem(Token.ACCESS_TOKEN)
    localStorage.removeItem(Token.REFRESH_TOKEN)
    localStorage.removeItem(Token.ACCESS_TOKEN_EXP)
    localStorage.removeItem(Token.REFRESH_TOKEN_EXP)
  }

  setTokenFromLocalStorage() {
    if (typeof window === 'undefined') return

    this.accessToken = localStorage.getItem(Token.ACCESS_TOKEN)
    this.refreshToken = localStorage.getItem(Token.REFRESH_TOKEN)
    this.accessTokenExp = new Date(
      localStorage.getItem(Token.ACCESS_TOKEN_EXP) || ''
    )
    this.refreshTokenExp = new Date(
      localStorage.getItem(Token.REFRESH_TOKEN_EXP) || ''
    )
  }

  async reissueToken(): Promise<boolean> {
    const oneMinuteLater = this.getOneMinuteLater()
    if (
      !this.accessToken ||
      !this.refreshToken ||
      !this.accessTokenExp ||
      !this.refreshTokenExp ||
      this.accessTokenExp > oneMinuteLater ||
      this.refreshTokenExp <= oneMinuteLater
    )
      return false

    const data = await reissue(this.refreshToken)
    if (!data) return false

    TokenManager.setToken(data)

    return true
  }

  getOneMinuteLater(): Date {
    const oneMinuteAgo = new Date()
    oneMinuteAgo.setMinutes(oneMinuteAgo.getMinutes() + 1)
    return oneMinuteAgo
  }
}

export default TokenManager
