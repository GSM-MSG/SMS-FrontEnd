import { axiosApi } from '@api'

interface Response {
  profileImgUrl: string
}

const profileImgService = async () => {
  const { data } = await axiosApi.get<Response>('/api/server/user/profile/img')

  return data
}

export default profileImgService
