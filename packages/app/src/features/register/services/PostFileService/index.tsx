import { axiosApi } from '@api'
import { Response } from './response'

const PostFileService = async (file: File, isImage: boolean) => {
  const formData = new FormData()
  formData.append('file', file)

  try {
    const { data } = await axiosApi.post<Response>(
      `/server/file${isImage ? '/image' : ''}`,
      formData,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      }
    )

    return data.fileUrl
  } catch (e) {
    return
  }
}

export default PostFileService
