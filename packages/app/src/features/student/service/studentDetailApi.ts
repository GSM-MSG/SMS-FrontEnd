import { axiosApi } from '@api'

const studentDetailApi = async (
  studentId: string,
  role: string,
  token?: string
) => {
  try {
    const { data } = await axiosApi.get<StudentDetail>(
      `${process.env.SERVER_URL}/student/${role}${studentId}`,
      { headers: { Authorization: token && `Bearer ${token}` } }
    )
    return data
  } catch (e) {
    return null
  }
}

export default studentDetailApi
