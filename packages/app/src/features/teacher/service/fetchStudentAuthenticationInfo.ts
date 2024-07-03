import { axiosApi } from '@api'
import { StudentAuthenticationInfoResDto } from '@features/teacher/dtos/res/StudentAuthenticationInfoResDto'

const fetchStudentAuthenticationInfo = async (markingBoardId: string) => {
  const { data } = await axiosApi<StudentAuthenticationInfoResDto>(
    `/api/server/authentication/form/${markingBoardId}`
  )

  return data
}

export default fetchStudentAuthenticationInfo
