import axios, { isAxiosError } from 'axios'
import env from '@lib/env'
import tokenManager from '@lib/TokenManager'
import needsTokenRefresh from '@lib/needsTokenRefresh'

const axiosApi = axios.create({ baseURL: env.NEXT_PUBLIC_SERVER_URL })

axiosApi.interceptors.request.use(async (config) => {
  let isSuccessed = true
  const needsRefresh = needsTokenRefresh(config.url, config.method)

  if (needsRefresh) isSuccessed = await tokenManager.reissueToken()

  if (!isSuccessed) return { ...config, signal: AbortSignal.abort() }

  config.headers['Authorization'] =
    tokenManager.accessToken && needsRefresh
      ? `Bearer ${tokenManager.accessToken}`
      : undefined

  return config
})

axiosApi.interceptors.response.use(
  (config) => {
    return config
  },
  async (config) => {
    if (!isAxiosError(config)) return config

    if (
      (config.response?.config.url === '/auth/verify/access' &&
        config.response.config.method?.toUpperCase() === 'GET') ||
      config.response?.status !== 401
    )
      return Promise.reject(config)

    tokenManager.clearToken()

    return axiosApi({
      url: config.config?.url,
      method: config.config?.method,
      headers: config.config?.headers,
      params: config.config?.params,
      data: config.config?.data,
    })
  }
)

export default axiosApi
