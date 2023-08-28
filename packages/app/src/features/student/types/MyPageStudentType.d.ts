import { RegisterFormType } from '@features/register/type'

interface MyPageStudentType extends RegisterFormType {
  prizes: PrizeType[]
}

interface PrizeType {
  name: string
  type: string
  date: string
}
