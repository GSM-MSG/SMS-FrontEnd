import { rtkApi } from '@api'

interface Response {
  isExist: boolean
  role: Role
}

const loggedInApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    loggedIn: build.query<Response, void>({
      query: () => ({ url: '/auth/verify/access' }),
      providesTags: [{ type: 'My' }],
    }),
    refetchLoggedIn: build.mutation<Response, void>({
      query: () => ({ url: '/auth/verify/access' }),
      invalidatesTags: [{ type: 'My' }],
    }),
  }),
})

export default loggedInApi
