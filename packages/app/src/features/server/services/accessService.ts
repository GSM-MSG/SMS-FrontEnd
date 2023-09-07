import { axiosApi } from '@api'

interface Response {
  isExist: boolean
  role: Role
}

const accessService = async () => {
  try {
    const { data } = await axiosApi.get<Response>('/auth/verify/access')
    return { isSuccess: true, data }
  } catch (error) {
    return { isSuccess: false, error }
  }
}

export default accessService
