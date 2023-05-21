import { serverApi } from '@api'
import { RegisterFormType } from '@features/register/type'
import ErrorMapper from '@lib/ErrorMapper'
import errors from '@features/register/services/errors'

const PostStudentInfo = async (form: RegisterFormType): Promise<boolean> => {
  try {
    await serverApi.post('/student', {
      ...form,
      techStack: form.techStack
        .split(',')
        .map((i) => i.trim())
        .filter((i) => !!i),
    })

    return true
  } catch (e) {
    alert(ErrorMapper(e, errors))
    return false
  }
}

export default PostStudentInfo
