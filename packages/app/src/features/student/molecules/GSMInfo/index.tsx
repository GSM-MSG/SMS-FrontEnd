import useModifyProfile from '@features/student/hooks/useModifyProfile'
import { AuthenticationInputs } from '@features/register/molecules'
import { RegisterFormType } from '@features/register/type'
import * as S from './style'

interface Props {
  defaultValue?: Partial<RegisterFormType>
}

const GSMInfoForm = ({ defaultValue }: Props) => {
  const {
    control,
    register,
    onSubmit,
    errors,
    setError,
    setValue,
    watch,
    clearErrors,
  } = useModifyProfile({ defaultValue })

  return (
    <S.Wrapper onSubmit={onSubmit}>
      <S.Title>인증제</S.Title>
      <AuthenticationInputs
        idx={1}
        control={control}
        register={register}
        errors={errors}
        setValue={setValue}
        watch={watch}
        setError={setError}
        clearErrors={clearErrors}
      />

      <S.ButtonWrapper>
        <S.SubmitBtn type='submit'>채점요청</S.SubmitBtn>
      </S.ButtonWrapper>
    </S.Wrapper>
  )
}

export default GSMInfoForm
