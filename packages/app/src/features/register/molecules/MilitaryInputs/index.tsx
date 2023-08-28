import { Select } from '@sms/shared'
import { InputColumn, FormWrapper } from '@features/register/atoms'
import { MilitaryList } from '@features/register/data'
import {
  Control,
  FieldErrors,
  UseFormRegister,
  UseFormWatch,
} from 'react-hook-form'
import { RegisterFormType } from '@features/register/type'

interface Props {
  register: UseFormRegister<RegisterFormType>
  control: Control<RegisterFormType>
  errors: FieldErrors<RegisterFormType>
  watch: UseFormWatch<RegisterFormType>
}

const MilitaryInputs = ({ register, control, errors, watch }: Props) => {
  return (
    <FormWrapper title='병역'>
      <InputColumn comment='병특 희망 여부'>
        <Select
          name='militaryService'
          control={control}
          register={register}
          options={MilitaryList}
          error={errors?.militaryService?.message}
          value={watch('militaryService')}
        />
      </InputColumn>
    </FormWrapper>
  )
}

export default MilitaryInputs
