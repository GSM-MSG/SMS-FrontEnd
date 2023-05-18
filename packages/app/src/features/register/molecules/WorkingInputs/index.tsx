import { FileInput, Input, Select } from '@sms/shared'
import { InputColumn, FormWrapper } from '@features/register/atoms'
import { WorkType } from '@features/register/data'
import { RegisterFormType } from '@features/register/type'
import { UseFormRegister } from 'react-hook-form'

interface Props {
  register: UseFormRegister<RegisterFormType>
}

const WorkingInputs = ({ register }: Props) => {
  return (
    <FormWrapper title='근무 조건'>
      <InputColumn comment='희망 고용 형태'>
        <Select
          register={register}
          options={WorkType}
          name='formOfEmployment'
        />
      </InputColumn>
      <InputColumn comment='드림북'>
        <FileInput type='file' placeholder='+ hwp 파일 추가' />
      </InputColumn>
      <InputColumn comment='희망 연봉'>
        <Input
          {...register('salary')}
          placeholder='희망 연봉 (10,000원 단위)'
        />
      </InputColumn>
    </FormWrapper>
  )
}

export default WorkingInputs
