import { rtkApi } from '@api'

interface Response {
  isExist: boolean
  role: Role
}

const loggedInApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    loggedIn: build.query<Response, void>({
      query: () => ({ url: '/auth/verify/access' }),
    }),
  }),
})

export default loggedInApi
