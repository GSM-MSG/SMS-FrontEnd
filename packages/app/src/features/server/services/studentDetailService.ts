import { axiosApi } from '@api'

const studentDetailService = async (
  studentId: string,
  role: string,
  token?: string
) => {
  return axiosApi.get<StudentDetail>(
    `${process.env.SERVER_URL}/student/${role}${studentId}`,
    { headers: { Authorization: token && `Bearer ${token}` } }
  )
}

export default studentDetailService
