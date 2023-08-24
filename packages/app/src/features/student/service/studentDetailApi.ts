import { axiosApi } from '@api'
import env from '@lib/env'

const studentDetailApi = async (
  studentId: string,
  role: string,
  token?: string
) => {
  try {
    const { data } = await axiosApi.get<StudentDetail>(
      `${env.NEXT_PUBLIC_SERVER_URL}/student/${role}${studentId}`,
      { headers: { Authorization: token && `Bearer ${token}` } }
    )
    return data
  } catch (e) {
    return null
  }
}

export default studentDetailApi
