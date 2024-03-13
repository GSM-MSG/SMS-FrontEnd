interface TeacherRegisterFormType {
  teacherType:
    | 'homeroom'
    | 'principal'
    | 'deputy-principal'
    | 'director'
    | 'common'
  grade: string
  classNum: string
}

export default TeacherRegisterFormType
