type Department = 'SW_DEVELOPMENT' | 'SMART_IOT_DEVELOPMENT' | 'AI_DEVELOPMENT'
type FormOfEmployment = 'FULL_TIME' | 'TEMPORARY' | 'CONTRACT' | 'INTERN'
type Sort = 'ASCENDING' | 'DESCENDING'

type Request = {
  page: number
  size: number
  majors?: string[] // 게스트 | 학생 | 선생님
  techStacks?: string[] // 게스트 | 학생 | 선생님
  grade?: number // 학생 | 선생님
  classNum?: number // 학생 | 선생님
  department?: Department[] // SW_DEVELOPMENT SW개발과 | SMART_IOT_DEVELOPMENT 스마트 IOT과 | AI_DEVELOPMENT 인공지능 개발과 | 학생 | 선생님
  stuNumSort?: Sort // ASCENDING 오름차순 DESCENDING 내림차순 | 학생 | 선생님
  formOfEmployment?: FormOfEmployment[] // FULL_TIME 정규직 | TEMPORARY 비정규직 | CONTRACT 계약직 | INTERN 인턴 | 선생님
  minGsmAuthenticationScore?: number // 선생님
  maxGsmAuthenticationScore?: number // 선생님
  minSalary?: number // 선생님
  maxSalary?: number // 선생님
  gsmAuthenticationScoreSort?: Sort // ASCENDING 오름차순 DESCENDING 내림차순 | 선생님
  salarySort?: Sort // ASCENDING 오름차순 DESCENDING 내림차순 | 선생님
}

export default Request
