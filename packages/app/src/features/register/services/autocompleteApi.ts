import { rtkApi } from '@api'

interface TechStackResponse {
  techStack: string[]
}

interface MajorResponse {
  major: string[]
}

const autocompleteApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    techStack: build.mutation<TechStackResponse, string>({
      query: (stack) => ({ url: '/stack/list', params: { stack } }),
    }),
    major: build.query<MajorResponse, void>({
      query: () => ({ url: '/major/list' }),
    }),
  }),
})

export default autocompleteApi
