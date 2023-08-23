import { rtkApi } from '@api'

interface StudentDetailRequest {
  studentId: string
  role: string
}

const studentApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    studentDetail: build.query<StudentDetail, StudentDetailRequest>({
      query: ({ studentId, role }) => ({
        url: `/server/student/${role}${studentId}`,
      }),
    }),
  }),
})

export default studentApi
