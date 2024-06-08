import { axiosApi } from '@api'

const studentDetailApi = async (studentId: string) => {
  try {
    const { data } = await axiosApi.get<StudentDetail>(
      `/api/student/${studentId}`
    )
    return data
  } catch (e) {
    return null
  }
}

export default studentDetailApi
