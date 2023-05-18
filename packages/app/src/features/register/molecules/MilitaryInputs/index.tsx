import { Select } from '@sms/shared'
import { InputColumn, FormWrapper } from '@features/register/atoms'
import { MilitaryList } from '@features/register/data'
import { UseFormRegister } from 'react-hook-form'
import { RegisterFormType } from '@features/register/type'

interface Props {
  register: UseFormRegister<RegisterFormType>
}

const MilitaryInputs = ({ register }: Props) => {
  return (
    <FormWrapper title='병역'>
      <InputColumn comment='병특 희망 여부'>
        <Select
          name='militaryService'
          register={register}
          options={MilitaryList}
        />
      </InputColumn>
    </FormWrapper>
  )
}

export default MilitaryInputs
