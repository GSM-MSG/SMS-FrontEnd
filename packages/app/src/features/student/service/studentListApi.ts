import { axiosApi } from '@api'
import Response from './studentApi/Response'

interface StudentsParams extends StudentParam {
  page: number
  size: number
}

export type ResponseType =
  | { isError: false; data: Response; error: undefined }
  | { isError: true; error: unknown; data: undefined }

const studentListApi = async (
  params: StudentsParams,
  accessToken?: string | null
): Promise<ResponseType> => {
  try {
    const { data } = await axiosApi.get<Response>('/api/server/student', {
      params,
      headers: { Authorization: accessToken && `Bearer ${accessToken}` },
    })
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
