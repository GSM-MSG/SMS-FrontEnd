import { axiosApi } from '@api'
import { LoggedInResDto, LoggedInResType } from '@features/auth/dtos'

const loggedInService = async () => {
  const res = await axiosApi.get<LoggedInResType>('/api/server/verify')

  const { data, success } = LoggedInResDto.safeParse(res.data)

  if (success) return data
}

export default loggedInService
