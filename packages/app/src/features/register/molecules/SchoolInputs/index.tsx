import { Input, FileInput } from '@sms/shared'
import { InputColumn, FormWrapper } from '@features/register/atoms'
import { RegisterFormType } from '@features/register/type'
import {
  FieldErrors,
  UseFormRegister,
  UseFormResetField,
} from 'react-hook-form'
import { ChangeEvent } from 'react'

interface Props {
  register: UseFormRegister<RegisterFormType>
  onUpload: (e: ChangeEvent<HTMLInputElement>) => Promise<string>
  errors: FieldErrors<RegisterFormType>
  resetField: UseFormResetField<RegisterFormType>
}

const SchoolInputs = ({ register, onUpload, errors, resetField }: Props) => {
  return (
    <FormWrapper title='학교 생활'>
      <InputColumn comment='인증제 점수'>
        <Input
          {...register('gsmAuthenticationScore', {
            required: { value: true, message: '필수 값입니다' },
            max: { value: 990, message: '최대 990점 까지 가능합니다' },
            valueAsNumber: true,
          })}
          placeholder='인증 점수 입력'
          onReset={() => resetField('gsmAuthenticationScore')}
          type='number'
          error={errors.gsmAuthenticationScore?.message}
        />
      </InputColumn>
      <InputColumn comment='드림북'>
        <FileInput
          {...register('dreamBookFileUrl', {
            required: { value: true, message: '필수 값입니다' },
          })}
          onUpload={onUpload}
          error={errors.dreamBookFileUrl?.message}
        />
      </InputColumn>
    </FormWrapper>
  )
}

export default SchoolInputs
