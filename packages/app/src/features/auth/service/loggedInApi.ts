import { rtkApi } from '@api'
import Role from '@/types/Role'

interface Response {
  isExist: boolean
  role: Role
}

const loggedInApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    loggedIn: build.query<Response, void>({
      query: () => ({ url: '/api/verify' }),
      providesTags: [{ type: 'My' }],
    }),
    refetchLoggedIn: build.mutation<Response, void>({
      query: () => ({ url: '/api/verify' }),
      invalidatesTags: [{ type: 'My' }],
    }),
  }),
})

export default loggedInApi
