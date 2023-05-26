import { Input, Profile, Select } from '@sms/shared'
import { InputColumn, FormWrapper } from '@features/register/atoms'
import { MajorList } from '@features/register/data'
import { RegisterFormType } from '@features/register/type'
import { Control, FieldErrors, UseFormRegister } from 'react-hook-form'
import { ChangeEvent } from 'react'

interface Props {
  register: UseFormRegister<RegisterFormType>
  errors: FieldErrors<RegisterFormType>
  onUpload: (e: ChangeEvent<HTMLInputElement>) => Promise<string>
  control: Control<RegisterFormType>
}

const ProfileInputs = ({ register, onUpload, errors, control }: Props) => {
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
          })}
          error={errors.introduce?.message}
          isReset
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
          isReset
          placeholder='공개 이메일 입력'
        />
      </InputColumn>
      <InputColumn comment='분야'>
        <Select
          control={control}
          register={register}
          options={MajorList}
          name='major'
          directInput
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
          isReset
          placeholder='https://'
        />
      </InputColumn>
      <InputColumn comment='세부스택'>
        <Input
          placeholder='예시)HTML, CSS, C#'
          isReset
          error={errors.techStack?.message}
          {...register('techStack', {
            required: {
              value: true,
              message: '필수 값입니다',
            },
          })}
        />
      </InputColumn>
    </FormWrapper>
  )
}

export default ProfileInputs
