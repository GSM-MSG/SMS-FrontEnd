import { axiosApi } from '@api'

const createShareProfilService = async (
  periodDay: number,
  studentId?: string
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
