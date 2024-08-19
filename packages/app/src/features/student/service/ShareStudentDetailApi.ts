import { axiosApi } from '@api'

const ShareStudentDetailApi = async (token: string): Promise<StudentDetail> => {
  const { data } = await axiosApi.get<StudentDetail>(
    `/api/server/student/link?token=${token}`
  )
  return data
}

export default ShareStudentDetailApi
