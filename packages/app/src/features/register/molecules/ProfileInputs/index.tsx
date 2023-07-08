import { Input, Profile, Select, SearchInput } from '@sms/shared'
import { InputColumn, FormWrapper } from '@features/register/atoms'
import { RegisterFormType } from '@features/register/type'
import {
  Control,
  FieldErrors,
  UseFormGetValues,
  UseFormRegister,
  UseFormResetField,
  UseFormSetValue,
} from 'react-hook-form'
import { ChangeEvent } from 'react'
import { useAutocomplete } from '@features/register/hooks'
import useMajorAutoComplete from '@features/register/hooks/useMajorAutoComplete'

interface Props {
  register: UseFormRegister<RegisterFormType>
  errors: FieldErrors<RegisterFormType>
  onUpload: (e: ChangeEvent<HTMLInputElement>) => Promise<string>
  control: Control<RegisterFormType>
  setValue: UseFormSetValue<RegisterFormType>
  getValues: UseFormGetValues<RegisterFormType>
  resetField: UseFormResetField<RegisterFormType>
}

const ProfileInputs = ({
  register,
  onUpload,
  errors,
  control,
  setValue,
  getValues,
  resetField,
}: Props) => {
  const { major } = useMajorAutoComplete()
  const { dropdownList, onChange } = useAutocomplete()

  return (
    <FormWrapper title='프로필'>
      <InputColumn comment='사진'>
        <Profile
          {...register('profileImgUrl', {
            required: { value: true, message: '필수 값입니다' },
          })}
          error={errors.profileImgUrl?.message}
          onUpload={onUpload}
        />
      </InputColumn>
      <InputColumn comment='자기 소개'>
        <Input
          {...register('introduce', {
            required: { value: true, message: '필수 값입니다' },
            maxLength: { value: 50, message: '최대 50자 까지 가능합니다' },
          })}
          error={errors.introduce?.message}
          onReset={() => resetField('introduce')}
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
          error={errors.techStack?.message}
        />
      </InputColumn>
      <InputColumn comment='포트폴리오'>
        <Input
          {...register('portfolioUrl', {
            required: { value: true, message: '필수 값입니다' },
            pattern: {
              value: /^(https?:\/\/)/,
              message: 'url 형식이 올바르지 않습니다',
            },
          })}
          error={errors.portfolioUrl?.message}
          onReset={() => resetField('portfolioUrl')}
          placeholder='https://'
        />
      </InputColumn>
      <InputColumn comment='세부스택 (5개)'>
        <SearchInput
          name='techStack'
          onChange={onChange}
          dropdownList={dropdownList}
          setValue={setValue}
          value={getValues('techStack')}
          limit={5}
        />
      </InputColumn>
    </FormWrapper>
  )
}

export default ProfileInputs
