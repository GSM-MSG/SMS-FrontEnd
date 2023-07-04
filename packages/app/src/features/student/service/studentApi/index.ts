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
        return JSON.stringify(currentArg) !== JSON.stringify(previousArg)
      },
    }),

    refetchStudent: build.mutation<Response, void>({
      query: () => ({
        url: '/student',
        params: {
          page: 1,
          size: 20,
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
