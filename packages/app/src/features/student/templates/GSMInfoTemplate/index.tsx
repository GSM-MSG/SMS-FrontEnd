import { RegisterFormType } from '@features/register/type'
import GSMInfoForm from '@features/student/molecules/GSMInfo'
import StudentExitButton from '@features/student/atoms/StudentExitButton'
import Header from '@features/global/Header'
import * as S from './style'

interface Props {
  defaultValue?: Partial<RegisterFormType>
}

const GSMInfoTemplate = ({ defaultValue }: Props) => {
  return (
    <S.Wrapper>
      <Header />
      <GSMInfoForm defaultValue={defaultValue} />
      <StudentExitButton />
    </S.Wrapper>
  )
}

export default GSMInfoTemplate
