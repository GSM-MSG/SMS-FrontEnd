import { axiosApi } from '@api'

interface Response {
  isExist: boolean
  role: Role
}

const accessService = async (accessToken: string) => {
  try {
    const { data } = await axiosApi.get<Response>(
      `${process.env.SERVER_URL}/auth/verify/access`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    )
    return { isSuccess: true, data }
  } catch (error) {
    return { isSuccess: false, error }
  }
}

export default accessService
