import { axiosApi } from '@api'
import ErrorMapper from '@lib/ErrorMapper'
import errors from '@features/register/services/errors'
import { Response } from './response'

const PostFileService = async (
  file: File,
  isImage: boolean
): Promise<string | undefined> => {
  const formData = new FormData()
  formData.append('file', file)

  try {
    const { data } = await axiosApi.post<Response>(
      `/file${isImage ? '/image' : ''}`,
      formData,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      }
    )

    return data.fileUrl
  } catch (e) {
    alert(ErrorMapper(e, errors))
    return
  }
}

export default PostFileService