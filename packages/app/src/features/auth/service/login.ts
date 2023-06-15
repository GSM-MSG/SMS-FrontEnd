import { axiosApi } from '@api'
import ErrorMapper from '@lib/ErrorMapper'
import errors from '@features/auth/errors'
import { TokenResponse } from '@features/auth/type/TokenResponse'
import TokenManager from '@lib/TokenManager'

const login = async (code: string) => {
  try {
    const { data } = await axiosApi.post<TokenResponse>('/auth', { code })
    TokenManager.setToken(data)

    return data
  } catch (e) {
    alert(ErrorMapper(e, errors))
    return
  }
}

export default login
