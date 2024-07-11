import { axiosApi } from '@api'
import { AuthenticationStudentListReqDto } from '@features/teacher/dtos/req/AuthenticationStudentListReqDto'
import { AuthenticationFormReqDto } from '@features/teacher/dtos/res/AuthenticationStudentListResDto'

const authenticationStudentList = async (
  params: AuthenticationStudentListReqDto
) => {
  const { data } = await axiosApi.get<AuthenticationFormReqDto>(
    '/api/server/authentication',
    { params }
  )

  return data
}

export default authenticationStudentList
