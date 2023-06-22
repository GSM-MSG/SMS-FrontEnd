import { axiosApi } from '@api'
import { TokenResponse } from '@features/auth/type/TokenResponse'
import ErrorMapper from '@lib/ErrorMapper'
import errors from '@features/auth/errors'
import TokenManager from '@lib/TokenManager'

const login = async (code: string) => {
  try {
    const { data } = await axiosApi.post<TokenResponse>('/auth', { code })
    TokenManager.setToken(data)

    return data
  } catch (e) {
    return ErrorMapper(e, errors)
  }
}

export default login
