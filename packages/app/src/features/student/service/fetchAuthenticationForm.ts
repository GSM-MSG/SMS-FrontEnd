import { axiosApi } from '@api'
import {
  AuthenticationFormResDto,
  AuthenticationFormResDtoSchema,
} from '@features/student/dtos/res/AuthenticationFromResDto'

const fetchAuthenticationForm = async (uuid: string) => {
  try {
    const { data } = await axiosApi.get<AuthenticationFormResDto>(
      `/api/server/authentication/form/${uuid}`
    )

    const { data: result } = AuthenticationFormResDtoSchema.safeParse(data)

    return result
  } catch (e) {
    return null
  }
}

export default fetchAuthenticationForm
