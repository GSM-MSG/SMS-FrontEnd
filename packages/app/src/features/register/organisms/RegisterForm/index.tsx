import {
  CertificateInputs,
  LanguageInputs,
  MilitaryInputs,
  ProfileInputs,
  SchoolInputs,
  WorkingInputs,
} from '@features/register/molecules'
import { useRegister } from '@features/register/hooks'
import { SMSLogo } from '@sms/shared'
import * as S from './style'

const RegisterForm = () => {
  const { control, register, onSubmit, imageUpload, fileUpload, errors } =
    useRegister()

  return (
    <S.Wrapper onSubmit={onSubmit}>
      <S.LogoWrapper>
        <SMSLogo />
      </S.LogoWrapper>
      <ProfileInputs
        onUpload={imageUpload}
        control={control}
        register={register}
        errors={errors}
      />
      <SchoolInputs onUpload={fileUpload} register={register} errors={errors} />
      <WorkingInputs control={control} register={register} errors={errors} />
      <MilitaryInputs register={register} />
      <CertificateInputs
        register={register}
        control={control}
        errors={errors}
      />
      <LanguageInputs register={register} control={control} errors={errors} />
      <S.ButtonWrapper>
        <S.SubmitBtn type='submit'>확인</S.SubmitBtn>
      </S.ButtonWrapper>
    </S.Wrapper>
  )
}

export default RegisterForm
