import { createApi } from '@reduxjs/toolkit/query/react'
import CustomBaseQuery from './CustomBaseQuery'

const rtkApi = createApi({
  baseQuery: CustomBaseQuery,
  tagTypes: ['Student', 'My', 'Profile-Image'],
  endpoints: () => ({}),
})

export default rtkApi
