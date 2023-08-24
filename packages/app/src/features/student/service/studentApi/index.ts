import { rtkApi } from '@api'

interface StudentDetailRequest {
  studentId: string | null
}

const studentApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    studentDetail: build.query<StudentDetail, StudentDetailRequest>({
      query: ({ studentId }) => ({
        url: `/api/student/${studentId}`,
      }),
    }),
  }),
})

export default studentApi
