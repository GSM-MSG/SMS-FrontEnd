import { axiosApi } from '@api'

const createShareProfilService = async (
  studentId: string,
  periodDay: number
) => {
  try {
    const { data } = await axiosApi.post(`/server/student/link`, {
      studentId: studentId,
      periodDay: periodDay,
    })
    return data
  } catch (e) {
    return null
  }
}

export default createShareProfilService
