import { axiosApi } from '@api'
import ErrorMapper from '@lib/ErrorMapper'
import errors from '@features/auth/errors'

const login = async (code: string) => {
  try {
    await axiosApi.post('/auth', { code })
  } catch (e) {
    alert(ErrorMapper(e, errors))
  }
}

export default login
