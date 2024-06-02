import { RegisterFormType } from '@features/register/type'
import { MyPageStudentType } from '@features/student/types/MyPageStudentType'

const MyPageStudentTypeToRegisterFormType = (
  data: MyPageStudentType
): RegisterFormType => {
  return {
    ...data,
    prizes: data?.prizes.map((prize) => ({
      name: prize.name,
      kind: prize.type,
      date: prize.date,
    })),
  }
}

export default MyPageStudentTypeToRegisterFormType
