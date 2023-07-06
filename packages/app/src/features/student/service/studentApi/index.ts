import { rtkApi } from '@api'

interface StudentDetailRequest {
  studentId: string
  role: string
}

const studentApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    studentDetail: build.mutation<StudentDetail, StudentDetailRequest>({
      query: ({ studentId, role }) => ({
        url: `/student/${role}${studentId}`,
      }),
    }),
  }),
})

export default studentApi
