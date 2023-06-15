import { Select } from '@sms/shared'
import { InputColumn, FormWrapper } from '@features/register/atoms'
import { MilitaryList } from '@features/register/data'
import { Control, FieldErrors, UseFormRegister } from 'react-hook-form'
import { RegisterFormType } from '@features/register/type'

interface Props {
  register: UseFormRegister<RegisterFormType>
  control: Control<RegisterFormType>
  errors: FieldErrors<RegisterFormType>
}

const MilitaryInputs = ({ register, control, errors }: Props) => {
  return (
    <FormWrapper title='병역'>
      <InputColumn comment='병특 희망 여부'>
        <Select
          name='militaryService'
          control={control}
          register={register}
          options={MilitaryList}
          error={errors?.militaryService?.message}
        />
      </InputColumn>
    </FormWrapper>
  )
}

export default MilitaryInputs
