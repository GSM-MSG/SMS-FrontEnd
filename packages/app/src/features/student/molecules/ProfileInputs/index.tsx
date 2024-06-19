import { Input, Profile, Select, SearchInput, Textarea } from '@sms/shared'
import { InputColumn, FormWrapper } from '@features/register/atoms'
import { RegisterFormType } from '@features/register/type'
import {
  Control,
  FieldErrors,
  UseFormClearErrors,
  UseFormGetValues,
  UseFormRegister,
  UseFormResetField,
  UseFormSetError,
  UseFormSetValue,
} from 'react-hook-form'
import { useAutocomplete } from '@features/register/hooks'
import useMajorAutoComplete from '@features/register/hooks/useMajorAutoComplete'
import useImageUpload from '@features/register/hooks/useImageUpload'
interface Props {
  register: UseFormRegister<RegisterFormType>
  errors: FieldErrors<RegisterFormType>
  setError: UseFormSetError<RegisterFormType>
  control: Control<RegisterFormType>
  setValue: UseFormSetValue<RegisterFormType>
  watch: UseFormGetValues<RegisterFormType>
  resetField: UseFormResetField<RegisterFormType>
  clearErrors: UseFormClearErrors<RegisterFormType>
}
const ProfileInputs = ({
  register,
  errors,
  setError,
  control,
  setValue,
  watch,
  resetField,
  clearErrors,
}: Props) => {
  const { major } = useMajorAutoComplete()
  const { dropdownList, onChange } = useAutocomplete()
  const { onChange: imageUpload } = useImageUpload({
    setValue: (value) => setValue('profileImgUrl', value),
    setError: (message) => setError('profileImgUrl', { message }),
    clearError: () => clearErrors('profileImgUrl'),
  })
  return (
    <FormWrapper title='프로필'>
      <InputColumn comment='사진'>
        <Profile
          {...register('profileImgUrl', {
            required: { value: true, message: '필수 값입니다' },
          })}
          error={errors.profileImgUrl?.message}
          onUpload={imageUpload}
          value={watch('profileImgUrl')}
        />
      </InputColumn>
      <InputColumn comment='자기 소개'>
        <Textarea
          {...register('introduce', {
            required: { value: true, message: '필수 값입니다' },
            maxLength: { value: 50, message: '최대 50자 까지 가능합니다' },
          })}
          error={errors.introduce?.message}
          placeholder='1줄 자기소개 입력'
        />
      </InputColumn>
      <InputColumn comment='이메일'>
        <Input
          {...register('contactEmail', {
            required: { value: true, message: '필수 값입니다' },
          })}
          type='email'
          error={errors.contactEmail?.message}
          onReset={() => resetField('contactEmail')}
          placeholder='공개 이메일 입력'
        />
      </InputColumn>
      <InputColumn comment='분야'>
        <Select
          control={control}
          register={register}
          options={major || {}}
          name='major'
          directInput
          error={errors.major?.message}
          value={watch('major')}
        />
      </InputColumn>
      <InputColumn comment='세부스택 (5개)'>
        <SearchInput
          name='techStacks'
          onChange={onChange}
          dropdownList={dropdownList}
          value={watch('techStacks')}
          limit={5}
          control={control}
          register={register('techStacks')}
          error={errors.techStacks?.message}
        />
      </InputColumn>
    </FormWrapper>
  )
}
export default ProfileInputs
