import env from '@lib/env'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const rtkApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: env.NEXT_PUBLIC_SERVER_URL }),
  endpoints: () => ({}),
})

export default rtkApi
