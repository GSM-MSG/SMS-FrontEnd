import { axiosApi } from '@api'
import { TeacherRegisterFormType } from '@features/register/type'

const PostTeacherRegisterService = async (form: TeacherRegisterFormType) => {
  const TeacherType = form.teacherType
  const teacherForm = {
    classNum: Number(form.classNum),
    grade: Number(form.grade),
  }
  try {
    await axiosApi.post(
      `/server/teacher/${TeacherType}`,
      TeacherType === 'homeroom' ? teacherForm : null
    )

    return
  } catch (e) {
    return e
  }
}

export default PostTeacherRegisterService
