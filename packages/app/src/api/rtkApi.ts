import { createApi } from '@reduxjs/toolkit/query/react'
import CustomBaseQuery from './CustomBaseQuery'

const rtkApi = createApi({
  baseQuery: CustomBaseQuery,
  tagTypes: ['Student', 'My'],
  endpoints: () => ({}),
})

export default rtkApi
