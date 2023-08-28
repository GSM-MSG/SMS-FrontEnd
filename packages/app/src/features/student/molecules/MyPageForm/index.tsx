import useModifyProfile from '@features/student/hooks/useModifyProfile'
import {
  CertificateInputs,
  LanguageInputs,
  MilitaryInputs,
  PrizeInputs,
  ProfileInputs,
  ProjectsInput,
  SchoolInputs,
  WorkingInputs,
} from '@features/register/molecules'
import { RegisterFormType } from '@features/register/type'
import * as S from './style'

interface Props {
  defaultValue?: Partial<RegisterFormType>
}

const MyPageForm = ({ defaultValue }: Props) => {
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
  } = useModifyProfile({ defaultValue })

  return (
    <S.Wrapper onSubmit={onSubmit}>
      <S.Title>마이페이지</S.Title>
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
        watch={watch}
      />
      <MilitaryInputs
        control={control}
        register={register}
        errors={errors}
        watch={watch}
      />
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

export default MyPageForm
