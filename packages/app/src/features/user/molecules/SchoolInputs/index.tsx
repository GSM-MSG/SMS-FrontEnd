import { Input, FileInput } from '@sms/shared'
import { InputColumn, FormWrapper } from '@features/user/atoms'

const SchoolInputs = () => {
  return (
    <FormWrapper title='학교 생활'>
      <InputColumn comment='인증제 점수'>
        <Input placeholder='인증 점수 입력' />
      </InputColumn>
      <InputColumn comment='드림북'>
        <FileInput type='file' placeholder='+ hwp 파일 추가' />
      </InputColumn>
    </FormWrapper>
  )
}

export default SchoolInputs
