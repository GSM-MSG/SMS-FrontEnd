import { axiosApi } from '@api'

interface MajorResponse {
  major: string[]
}

const majorListService = async () => {
  const { data } = await axiosApi.get<MajorResponse>('/api/server/major/list')

  return data
}

export default majorListService
