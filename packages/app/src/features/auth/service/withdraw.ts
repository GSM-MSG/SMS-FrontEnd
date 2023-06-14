import { axiosApi } from '@api'

const withdraw = async () => {
  try {
    await axiosApi.delete('/auth/withdrawal')

    return true
  } catch (e) {
    return false
  }
}

export default withdraw
