import axios, { isAxiosError } from 'axios'
import env from '@lib/env'
import TokenManager from '@lib/TokenManager'
import needsTokenRefresh from '@lib/needsTokenRefresh'
import qs from 'qs'

const axiosApi = axios.create({
  baseURL: env.NEXT_PUBLIC_SERVER_URL,
  paramsSerializer: (params) => {
    const filteredParams = Object.keys(params).reduce((pre, cur) => {
      if (typeof params[cur] === 'string' || typeof params[cur] === 'number')
        pre[cur] = params[cur]
      else if (Array.isArray(params[cur]))
        pre[cur] = params[cur].filter((i: any) => i)

      return pre
    }, {} as Record<string, any>)

    return qs.stringify(filteredParams, { arrayFormat: 'repeat' })
  },
})

axiosApi.interceptors.request.use(async (config) => {
  const tokenManager = new TokenManager()
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
    if (!isAxiosError(config)) return Promise.reject(config)

    if (config.response?.status === 401) TokenManager.clearToken()

    return Promise.reject(config)
  }
)

export default axiosApi
