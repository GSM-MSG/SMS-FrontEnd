import { axiosApi } from '@api'
import ErrorMapper from '@lib/ErrorMapper'
import TokenManager from '@lib/TokenManager'
import errors from '@features/auth/errors'

const logout = async () => {
  try {
    const tokenManager = new TokenManager()
    await axiosApi.delete('/auth', {
      headers: {
        'Refresh-Token': tokenManager.refreshToken,
      },
    })

    return
  } catch (e) {
    return ErrorMapper(e, errors)
  }
}

export default logout
