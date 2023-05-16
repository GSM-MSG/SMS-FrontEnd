import { Select } from '@sms/shared'
import { InputColumn, FormWrapper } from '@features/register/atoms'
import { MilitaryList } from '@features/register/data'

const MilitaryInputs = () => {
  return (
    <FormWrapper title='병역'>
      <InputColumn comment='병특 희망 여부'>
        <Select
          name='militaryService'
          register={() => {}}
          options={MilitaryList}
        />
      </InputColumn>
    </FormWrapper>
  )
}

export default MilitaryInputs
