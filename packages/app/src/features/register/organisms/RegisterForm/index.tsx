import {
  CertificateInputs,
  LanguageInputs,
  MilitaryInputs,
  ProfileInputs,
  SchoolInputs,
  WorkingInputs,
} from '@features/register/molecules'
import { useForm } from 'react-hook-form'
import * as S from './style'

const RegisterForm = () => {
  const { control, register } = useForm()
  return (
    <S.Wrapper>
      <ProfileInputs />
      <SchoolInputs />
      <WorkingInputs />
      <MilitaryInputs />
      <CertificateInputs register={register} control={control} />
      <LanguageInputs register={register} control={control} />
    </S.Wrapper>
  )
}

export default RegisterForm
