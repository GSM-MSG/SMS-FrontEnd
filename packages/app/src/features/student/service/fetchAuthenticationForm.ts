import { axiosApi } from '@api'
import {
  AuthenticationFormResDto,
  AuthenticationFormResDtoSchema,
} from '@features/student/dtos/res/AuthenticationFromResDto'

const fetchAuthenticationForm = async (uuid: string) => {
  try {
    const { data } = await axiosApi.get<AuthenticationFormResDto>(
      `/server/authentication/form/${uuid}`
    )

    return AuthenticationFormResDtoSchema.parse(data)
  } catch (e) {
    return null
  }
}

export default fetchAuthenticationForm
