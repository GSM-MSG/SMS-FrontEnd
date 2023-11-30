import { axiosApi } from '@api'
import { RegisterFormType } from '@features/register/type'

const PostStudentInfoService = async (form: RegisterFormType) => {
  try {
    await axiosApi.post('/server/student', {
      ...form,
      prizes: form.prizes.map((i) => ({ ...i, kind: undefined, type: i.kind })),
    })

    return
  } catch (e) {
    return e
  }
}

export default PostStudentInfoService
