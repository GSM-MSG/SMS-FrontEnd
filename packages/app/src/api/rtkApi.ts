import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const rtkApi = createApi({
  baseQuery: fetchBaseQuery(),
  tagTypes: ['Student', 'My'],
  endpoints: () => ({}),
})

export default rtkApi
