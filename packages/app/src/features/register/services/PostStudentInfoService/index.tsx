import { axiosApi } from '@api'
import { RegisterFormType } from '@features/register/type'

const PostStudentInfoService = async (form: RegisterFormType) => {
  try {
    await axiosApi.post('/api/server/student', form)

    return
  } catch (e) {
    return e
  }
}

export default PostStudentInfoService
