import { ProfileInputs } from '@features/register/molecules'
import { useRegister } from '@features/register/hooks'
import { SVG } from '@sms/shared'
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
        <SVG.SMSLogo />
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
      <S.ButtonWrapper>
        <S.SubmitBtn type='submit'>확인</S.SubmitBtn>
      </S.ButtonWrapper>
    </S.Wrapper>
  )
}

export default RegisterForm
