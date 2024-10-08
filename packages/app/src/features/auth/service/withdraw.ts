import { axiosApi } from '@api'
import ErrorMapper from '@lib/ErrorMapper'
import errors from '@features/auth/errors'

const withdraw = async () => {
  try {
    await axiosApi.delete('/api/server/auth/withdrawal')

    return
  } catch (e) {
    return ErrorMapper(e, errors)
  }
}

export default withdraw
