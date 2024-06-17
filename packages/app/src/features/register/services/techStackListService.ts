import { axiosApi } from '@api'

interface TechStackResponse {
  techStacks: string[]
}

const techStackListService = async (stack: string) => {
  const { data } = await axiosApi.get<TechStackResponse>(
    '/api/server/stack/list',
    { params: { stack } }
  )

  return data
}

export default techStackListService
