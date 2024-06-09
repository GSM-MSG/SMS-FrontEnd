import { axiosApi } from '@api'
import { MyPageStudentType } from '@features/student/types/MyPageStudentType'

const profileService = async () => {
  try {
    const { data } = await axiosApi.get<MyPageStudentType>(
      `/api/server/user/profile`
    )
    return data
  } catch (e) {
    return null
  }
}

export default profileService
