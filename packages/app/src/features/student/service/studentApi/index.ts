import { rtkApi } from '@api'
import Response from './Response'

const studentApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    student: build.query<Response, StudentParam>({
      query: (params) => ({
        url: `/student`,
        params,
      }),
      merge: (current, newData) => {
        return {
          ...newData,
          content: [...current.content, ...newData.content],
        }
      },
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName
      },
      forceRefetch({ currentArg, previousArg }) {
        return JSON.stringify(currentArg) !== JSON.stringify(previousArg)
      },
    }),
    studentDetail: build.mutation<StudentDetail, string>({
      query: (studentId) => ({
        url: `/student/${studentId}`,
      }),
    }),
  }),
})

export default studentApi
