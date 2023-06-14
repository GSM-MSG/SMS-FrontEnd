import { rtkApi } from '@api'

interface TechStackResponse {
  techStack: string[]
}

const autocompleteApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    techStack: build.mutation<TechStackResponse, string>({
      query: (stack) => ({ url: '/stack/list', params: { stack } }),
    }),
  }),
})

export default autocompleteApi
