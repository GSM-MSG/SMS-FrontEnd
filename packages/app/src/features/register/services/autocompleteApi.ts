import { rtkApi } from '@api'

interface TechStackResponse {
  techStacks: string[]
}

interface MajorResponse {
  major: string[]
}

const autocompleteApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    techStack: build.mutation<TechStackResponse, string>({
      query: (stack) => ({ url: '/server/stack/list', params: { stack } }),
    }),
    major: build.query<MajorResponse, void>({
      query: () => ({ url: '/server/major/list' }),
    }),
  }),
})

export default autocompleteApi
