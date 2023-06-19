import reissue from '@features/auth/service/reissue'
import { ReissueResponse } from '@features/auth/type/TokenResponse'
import Token from './Token'
import observable from './Observable'

class TokenManager {
  accessToken: string | null = null
  refreshToken: string | null = null
  accessTokenExp: Date | null = null
  refreshTokenExp: Date | null = null

  constructor() {
    this.setTokenFromLocalStorage()
  }

  setToken(tokens: ReissueResponse) {
    localStorage.setItem(Token.ACCESS_TOKEN, tokens.accessToken)
    localStorage.setItem(Token.REFRESH_TOKEN, tokens.refreshToken)
    localStorage.setItem(Token.ACCESS_TOKEN_EXP, tokens.accessTokenExp)
    localStorage.setItem(Token.REFRESH_TOKEN_EXP, tokens.refreshTokenExp)
    this.accessTokenExp = new Date(tokens.accessTokenExp)
    this.refreshTokenExp = new Date(tokens.refreshTokenExp)
    this.accessToken = tokens.accessToken
    this.refreshToken = tokens.refreshToken
  }

  clearToken() {
    localStorage.removeItem(Token.ACCESS_TOKEN)
    localStorage.removeItem(Token.REFRESH_TOKEN)
    localStorage.removeItem(Token.ACCESS_TOKEN_EXP)
    localStorage.removeItem(Token.REFRESH_TOKEN_EXP)
    this.accessTokenExp = null
    this.refreshTokenExp = null
    this.accessToken = null
    this.refreshToken = null
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
    if (
      !this.accessToken ||
      !this.refreshToken ||
      !this.accessTokenExp ||
      !this.refreshTokenExp
    ) {
      this.setTokenFromLocalStorage()
      return true
    }

    const oneMinuteLater = this.getOneMinuteLater()
    if (
      this.accessTokenExp <= oneMinuteLater &&
      this.refreshTokenExp <= oneMinuteLater
    ) {
      this.clearToken()
      return true
    }

    if (
      this.accessTokenExp > oneMinuteLater ||
      this.refreshTokenExp <= oneMinuteLater
    )
      return true

    if (observable.observers.length) {
      return new Promise<boolean>((resolve) => {
        observable.setOvserver(resolve)
      })
    }

    observable.setOvserver((_value) => {})
    const data = await reissue(this.refreshToken)

    if (!data) {
      observable.notifyAll(false)
      return false
    }

    observable.notifyAll(true)
    this.setToken(data)

    return true
  }

  getOneMinuteLater(): Date {
    const oneMinuteAgo = new Date()
    oneMinuteAgo.setMinutes(oneMinuteAgo.getMinutes() + 1)
    return oneMinuteAgo
  }
}

const tokenManager = new TokenManager()

export default tokenManager
