import { axiosApi } from '@api'
import { TokenResponse } from '@features/auth/type/TokenResponse'
import ErrorMapper from '@lib/ErrorMapper'
import errors from '@features/auth/errors'

const login = async (code: string) => {
  try {
    const { data } = await axiosApi.post<TokenResponse>('/api/login', {
      code,
    })

    return data
  } catch (e) {
    return ErrorMapper(e, errors)
  }
}

export default login
