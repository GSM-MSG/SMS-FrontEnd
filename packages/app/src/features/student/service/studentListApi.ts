import { axiosApi } from '@api'
import Response from './studentApi/Response'

interface StudentsParams extends StudentParam {
  page: number
  size: number
}

type ResponseType =
  | { isError: false; data: Response; error: undefined }
  | { isError: true; error: unknown; data: undefined }

const studentListApi = async (
  params: StudentsParams
): Promise<ResponseType> => {
  try {
    const { data } = await axiosApi.get<Response>('/student', { params })
    return {
      isError: false,
      data,
      error: undefined,
    }
  } catch (error) {
    return {
      isError: true,
      data: undefined,
      error,
    }
  }
}

export default studentListApi
