import { serverApi } from '@api'
import { Response } from './response'

const PostFileService = async (
  file: File,
  isImage: boolean
): Promise<string | undefined> => {
  const formData = new FormData()
  formData.append('file', file)

  try {
    const { data } = await serverApi.post<Response>(
      `/file${isImage ? '/image' : ''}`,
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
