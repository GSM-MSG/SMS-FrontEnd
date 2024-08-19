import { axiosApi } from '@api'
import { Response } from './response'

const PostFileService = async (file: File, isImage: boolean) => {
  const formData = new FormData()
  formData.append('file', file)

  const { data } = await axiosApi.post<Response>(
    `/api/server/file${isImage ? '/image' : ''}`,
    formData,
    {
      headers: { 'Content-Type': 'multipart/form-data' },
    }
  )

  return data.fileUrl
}

export default PostFileService
