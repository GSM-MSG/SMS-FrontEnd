import axios from 'axios'
import env from '@lib/env'
import TokenManager from '@lib/TokenManager'
import needsTokenRefresh from '@lib/needsTokenRefresh'

const axiosApi = axios.create({ baseURL: env.NEXT_PUBLIC_SERVER_URL })

axiosApi.interceptors.request.use(async (config) => {
  const tokenManager = new TokenManager()

  let isSuccessed = true
  const needsRefresh = needsTokenRefresh(config.url, config.method)

  if (needsRefresh) isSuccessed = await tokenManager.reissueToken()

  if (!isSuccessed) return { ...config, signal: AbortSignal.abort() }

  tokenManager.setTokenFromLocalStorage()

  config.headers['Authorization'] =
    tokenManager.accessToken && needsRefresh
      ? `Bearer ${tokenManager.accessToken}`
      : undefined

  return config
})

export default axiosApi
