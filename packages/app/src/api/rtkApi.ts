import { createApi } from '@reduxjs/toolkit/query/react'
import CutomBaseQuery from './CustomBaseQuery'

const rtkApi = createApi({
  baseQuery: CutomBaseQuery,
  tagTypes: ['Student'],
  endpoints: () => ({}),
})

export default rtkApi
