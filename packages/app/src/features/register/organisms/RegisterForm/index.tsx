import {
  CertificateInputs,
  LanguageInputs,
  MilitaryInputs,
  ProfileInputs,
  SchoolInputs,
  WorkingInputs,
} from '@features/register/molecules'
import { useRegister } from '@features/register/hooks'
import * as S from './style'

const RegisterForm = () => {
  const { control, register, onSubmit } = useRegister()

  return (
    <S.Wrapper onSubmit={onSubmit}>
      <ProfileInputs control={control} register={register} />
      <SchoolInputs register={register} />
      <WorkingInputs register={register} />
      <MilitaryInputs register={register} />
      <CertificateInputs register={register} control={control} />
      <LanguageInputs register={register} control={control} />
      <S.SubmitBtn type='submit'>확인</S.SubmitBtn>
    </S.Wrapper>
  )
}

export default RegisterForm
