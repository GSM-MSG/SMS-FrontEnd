import { axiosApi } from '@api'
import ErrorMapper from '@lib/ErrorMapper'
import errors from '@features/auth/errors'

const logout = async () => {
  try {
    await axiosApi.delete('api/server/logout')

    return
  } catch (e) {
    return ErrorMapper(e, errors)
  }
}

export default logout
