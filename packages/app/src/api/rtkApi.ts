import { createApi } from '@reduxjs/toolkit/query/react'
import CutomBaseQuery from './CustomBaseQuery'

const rtkApi = createApi({
  baseQuery: CutomBaseQuery,
  tagTypes: ['Student', 'My'],
  endpoints: () => ({}),
})

export default rtkApi
