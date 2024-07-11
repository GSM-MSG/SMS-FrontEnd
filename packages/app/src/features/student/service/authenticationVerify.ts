import { axiosApi } from '@api'
import { AuthenticationVerifyResDto } from '@features/student/dtos/res/AuthenticationVerifyResDto'

const authenticationVerify = async () => {
  const { data } = await axiosApi.get<AuthenticationVerifyResDto>(
    `api/server/authentication/verify`
  )
  return data
}

export default authenticationVerify
