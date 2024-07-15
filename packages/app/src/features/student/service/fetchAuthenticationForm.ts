import { axiosApi } from '@api'
import { AuthenticationFormResDto } from '@features/student/dtos/res/AuthenticationFromResDto'

const fetchAuthenticationForm = async () => {
  try {
    const { data } = await axiosApi.get<AuthenticationFormResDto>(
      `/api/server/authentication/form`
    )

    return data
  } catch (e) {
    return null
  }
}

export default fetchAuthenticationForm
