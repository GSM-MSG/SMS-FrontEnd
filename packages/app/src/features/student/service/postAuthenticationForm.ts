import { axiosApi } from '@api'
import { AuthenticationFormReqDto } from '@features/student/dtos/req/AuthenticationFormReqDto'

export interface Param {
  uuid: string
  data: AuthenticationFormReqDto
}

const postAuthenticationForm = async ({ uuid, data }: Param) => {
  await axiosApi.post(`/api/server/authentication/submit`, data, {
    params: {
      uuid,
    },
  })
}

export default postAuthenticationForm
