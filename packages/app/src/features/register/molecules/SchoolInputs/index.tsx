import { Input, FileInput } from '@sms/shared'
import { InputColumn, FormWrapper } from '@features/register/atoms'
import { RegisterFormType } from '@features/register/type'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { ChangeEvent } from 'react'

interface Props {
  register: UseFormRegister<RegisterFormType>
  onUpload: (e: ChangeEvent<HTMLInputElement>) => Promise<void>
  errors: FieldErrors<RegisterFormType>
}

const SchoolInputs = ({ register, onUpload, errors }: Props) => {
  return (
    <FormWrapper title='학교 생활'>
      <InputColumn comment='인증제 점수'>
        <Input
          {...register('gsmAuthenticationScore')}
          placeholder='인증 점수 입력'
          type='number'
          error={errors.gsmAuthenticationScore?.message}
        />
      </InputColumn>
      <InputColumn comment='드림북'>
        <FileInput
          onUpload={onUpload}
          errors={!!errors.dreamBookFileUrl?.type}
        />
      </InputColumn>
    </FormWrapper>
  )
}

export default SchoolInputs
