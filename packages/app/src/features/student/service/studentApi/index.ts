import { rtkApi } from '@api'
import Response from './Response'

interface StudentDetailRequest {
  studentId: string
  role: string
}

interface StudentsParams extends StudentParam {
  page: number
  size: number
}

const studentApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    student: build.query<Response, StudentsParams>({
      query: (params) => ({
        url: `/student`,
        params,
      }),
      providesTags: [{ type: 'Student' }],
      merge: (current, newData, { arg }) => {
        if (arg.page === 1) return newData
        return {
          ...newData,
          content: [...current.content, ...newData.content],
        }
      },
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName
      },
      forceRefetch({ currentArg, previousArg }) {
        const changedPage = currentArg?.page !== previousArg?.page
        const changedSize = currentArg?.size !== previousArg?.size
        return changedPage || changedSize
      },
    }),

    refetchStudent: build.mutation<Response, StudentParam>({
      query: (params) => ({
        url: '/student',
        params: {
          size: 20,
          page: 1,
          ...params,
        },
      }),
      invalidatesTags: [{ type: 'Student' }],
    }),

    studentDetail: build.mutation<StudentDetail, StudentDetailRequest>({
      query: ({ studentId, role }) => ({
        url: `/student/${role}${studentId}`,
      }),
    }),
  }),
})

export default studentApi
