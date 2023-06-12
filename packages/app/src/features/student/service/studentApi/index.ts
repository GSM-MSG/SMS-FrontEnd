import { rtkApi } from '@api'
import Request from './Request'
import Response from './Response'

const studentApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    student: build.query<Response, Request>({
      query: (params) => ({
        url: `/student`,
        params,
      }),
    }),
  }),
})

export default studentApi
