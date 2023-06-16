import { rtkApi } from '@api'
import Response from './Response'

interface StudentDetailRequest {
  studentId: string
  role: string
}

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
    studentDetail: build.mutation<StudentDetail, StudentDetailRequest>({
      query: ({ studentId, role }) => ({
        url: `/student/${role}${studentId}`,
      }),
    }),
  }),
})

export default studentApi
