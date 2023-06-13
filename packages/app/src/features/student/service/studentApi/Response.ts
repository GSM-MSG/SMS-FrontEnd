import StudentType from '@features/student/types/StudentType'

interface Response {
  content: StudentType[]
  page: number // 현재 페이지
  contentSize: number // 현재 페이지에 index 갯수
  last: boolean // 마지막 페이지 | false 아직 마지막 페이지 아님
  totalSize: number
}

export default Response
