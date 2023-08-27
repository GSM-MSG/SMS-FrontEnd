import {
  CertificateInputs,
  LanguageInputs,
  MilitaryInputs,
  ProfileInputs,
  SchoolInputs,
  WorkingInputs,
  ProjectsInput,
  PrizeInputs,
} from '@features/register/molecules'
import { useRegister } from '@features/register/hooks'
import { SMSLogo } from '@sms/shared'
import * as S from './style'

const RegisterForm = () => {
  const {
    control,
    register,
    onSubmit,
    errors,
    setError,
    setValue,
    watch,
    resetField,
    clearErrors,
  } = useRegister()

  return (
    <S.Wrapper onSubmit={onSubmit}>
      <S.LogoWrapper>
        <SMSLogo />
      </S.LogoWrapper>

      <ProfileInputs
        control={control}
        register={register}
        errors={errors}
        setValue={setValue}
        watch={watch}
        resetField={resetField}
        setError={setError}
        clearErrors={clearErrors}
      />
      <SchoolInputs
        resetField={resetField}
        register={register}
        errors={errors}
      />
      <WorkingInputs
        control={control}
        register={register}
        errors={errors}
        resetField={resetField}
      />
      <MilitaryInputs control={control} register={register} errors={errors} />
      <CertificateInputs
        register={register}
        control={control}
        errors={errors}
      />
      <LanguageInputs register={register} control={control} errors={errors} />

      <ProjectsInput
        register={register}
        control={control}
        errors={errors}
        setValue={setValue}
        watch={watch}
        setError={setError}
        clearErrors={clearErrors}
      />

      <PrizeInputs
        register={register}
        watch={watch}
        setValue={setValue}
        clearErrors={clearErrors}
        control={control}
        errors={errors}
      />

      <S.ButtonWrapper>
        <S.SubmitBtn type='submit'>확인</S.SubmitBtn>
      </S.ButtonWrapper>
    </S.Wrapper>
  )
}

export default RegisterForm
