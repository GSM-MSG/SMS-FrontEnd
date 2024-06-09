import { axiosApi } from '@api'
import StudentType from '@features/student/types/StudentType'

interface Response {
  content: StudentType[]
  page: number // 현재 페이지
  contentSize: number // 현재 페이지에 index 갯수
  last: boolean // 마지막 페이지 | false 아직 마지막 페이지 아님
  totalSize: number
}

interface StudentsParams extends StudentParam {
  page: number
  size: number
}

export type ResponseType =
  | { isError: false; data: Response; error: undefined }
  | { isError: true; error: unknown; data: undefined }

const studentListApi = async (
  params: StudentsParams
): Promise<ResponseType> => {
  try {
    const { data } = await axiosApi.get<Response>('/api/server/student', {
      params,
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
