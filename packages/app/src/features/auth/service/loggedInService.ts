import { axiosApi } from '@api'
import { LoggedInResDto, LoggedInResType } from '@features/auth/dtos'

const loggedInService = async () => {
  const res = await axiosApi.get<LoggedInResType>('/api/server/verify')

  const { data } = LoggedInResDto.safeParse(res.data)
  return data
}

export default loggedInService
