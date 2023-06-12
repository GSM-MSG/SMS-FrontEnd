import { createApi } from '@reduxjs/toolkit/query/react'
import CutomBaseQuery from './CustomBaseQuery'

const rtkApi = createApi({
  baseQuery: CutomBaseQuery,
  endpoints: () => ({}),
})

export default rtkApi
