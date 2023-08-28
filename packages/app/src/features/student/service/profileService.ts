import { axiosApi } from '@api'
import env from '@lib/env'
import { MyPageStudentType } from '@features/student/types/MyPageStudentType'

const profileService = async (accessToken?: string) => {
  try {
    const { data } = await axiosApi.get<MyPageStudentType>(
      `${env.NEXT_PUBLIC_SERVER_URL}/user/profile`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    )
    return data
  } catch (e) {
    return null
  }
}

export default profileService
