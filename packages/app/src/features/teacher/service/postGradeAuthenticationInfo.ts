import { axiosApi } from '@api'
import { StudentAuthenticationInfoReqDtoSchema } from '@features/teacher/dtos/req/StudentAuthenticationInfoReqDto'

const postGradeAuthenticationInfo = async ({
  id,
  form,
}: {
  id: string
  form: StudentAuthenticationInfoReqDtoSchema
}) => {
  await axiosApi.post(`/authentication/grading/${id}`, form)
}

export default postGradeAuthenticationInfo
