import { axiosApi } from '@api'
import { RegisterFormType } from '@features/register/type'

const PostStudentInfoService = async (form: RegisterFormType) => {
  try {
    await axiosApi.post('/student', {
      ...form,
      techStack: form.techStack
        .split(',')
        .map((i) => i.trim())
        .filter((i) => !!i),
    })

    return
  } catch (e) {
    return e
  }
}

export default PostStudentInfoService
