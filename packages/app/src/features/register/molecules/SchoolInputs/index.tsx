import { Input, FileInput } from '@sms/shared'
import { InputColumn, FormWrapper } from '@features/register/atoms'
import { RegisterFormType } from '@features/register/type'
import { UseFormRegister } from 'react-hook-form'

interface Props {
  register: UseFormRegister<RegisterFormType>
}

const SchoolInputs = ({ register }: Props) => {
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
        <FileInput type='file' placeholder='+ hwp 파일 추가' />
      </InputColumn>
    </FormWrapper>
  )
}

export default SchoolInputs
