import { axiosApi } from '@api'
import TokenManager from '@lib/TokenManager'

const logout = async () => {
  try {
    const tokenManager = new TokenManager()
    await axiosApi.delete('/auth', {
      headers: {
        'Refresh-Token': tokenManager.refreshToken,
      },
    })

    return true
  } catch (e) {
    return false
  }
}

export default logout
