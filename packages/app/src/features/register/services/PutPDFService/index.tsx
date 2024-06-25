import { axiosApi } from '@api'

const PutPDFService = async (file: File) => {
  const formData = new FormData()
  formData.append('file', file)

  try {
    const { data } = await axiosApi.put(`/api/server/student/pdf`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })

    return data
  } catch (e) {
    return
  }
}

export default PutPDFService
