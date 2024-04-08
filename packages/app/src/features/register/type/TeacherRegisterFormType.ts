interface TeacherRegisterFormType {
  teacherType:
    | 'homeroom'
    | 'principal'
    | 'deputy-principal'
    | 'director'
    | 'common'
  grade: number
  classNum: number
}

export default TeacherRegisterFormType
