import { Input, FileInput } from '@sms/shared'
import { InputColumn, FormWrapper } from '@features/register/atoms'
import { RegisterFormType } from '@features/register/type'
import { UseFormRegister } from 'react-hook-form'
import { ChangeEvent } from 'react'

interface Props {
  register: UseFormRegister<RegisterFormType>
  onUpload: (e: ChangeEvent<HTMLInputElement>) => Promise<void>
}

const SchoolInputs = ({ register, onUpload }: Props) => {
  return (
    <FormWrapper title='학교 생활'>
      <InputColumn comment='인증제 점수'>
        <Input
          {...register('gsmAuthenticationScore')}
          placeholder='인증 점수 입력'
          type='number'
        />
      </InputColumn>
      <InputColumn comment='드림북'>
        <FileInput onUpload={onUpload} />
      </InputColumn>
    </FormWrapper>
  )
}

export default SchoolInputs
