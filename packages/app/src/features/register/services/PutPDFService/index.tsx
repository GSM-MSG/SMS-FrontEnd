import { axiosApi } from '@api'

const PutPDFService = async (file: File) => {
  const formData = new FormData()
  formData.append('file', file)

  try {
    await axiosApi.put(`/api/server/student/pdf`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  } catch (e) {
    return null
  }
}

export default PutPDFService
