import { axiosApi } from '@api'
import { AuthenticationFormReqDto } from '@features/student/dtos/req/AuthenticationFormReqDto'

const postAuthenticationForm = async (data: AuthenticationFormReqDto) => {
  await axiosApi.post(`/api/server/authentication/submit`, data)
}

export default postAuthenticationForm
