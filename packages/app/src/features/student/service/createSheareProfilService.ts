import { axiosApi } from '@api'

const createSheareProfilService = async (
  studentId?: string,
  periodDay?: number | undefined
) => {
  try {
    const { data } = await axiosApi.post(`/server/link`, {
      studentId: studentId,
      periodDay: periodDay,
    })
    return data
  } catch (e) {
    return null
  }
}

export default createSheareProfilService
