import { Input, MultiInput, Select } from '@sms/shared'
import { InputColumn, FormWrapper } from '@features/register/atoms'
import { WorkType } from '@features/register/data'
import { RegisterFormType } from '@features/register/type'
import {
  Control,
  FieldErrors,
  UseFormRegister,
  UseFormResetField,
} from 'react-hook-form'

interface Props {
  register: UseFormRegister<RegisterFormType>
  control: Control<RegisterFormType>
  errors: FieldErrors<RegisterFormType>
  resetField: UseFormResetField<RegisterFormType>
}

const WorkingInputs = ({ register, control, errors, resetField }: Props) => {
  return (
    <FormWrapper title='근무 조건'>
      <InputColumn comment='희망 고용 형태'>
        <Select
          control={control}
          register={register}
          options={WorkType}
          name='formOfEmployment'
          error={errors.formOfEmployment?.message}
        />
      </InputColumn>
      <InputColumn comment='희망 연봉'>
        <Input
          type='number'
          {...register('salary', {
            required: { value: true, message: '필수 값입니다' },
            valueAsNumber: true,
          })}
          error={errors.salary?.message}
          onReset={() => resetField('salary')}
          placeholder='희망 연봉 (10,000원 단위)'
        />
      </InputColumn>
      <InputColumn comment='근무 지역'>
        <MultiInput
          placeholder='근무 희망 지역입력'
          name='region'
          register={register}
          control={control}
          errors={errors.region}
          firstRequired
        />
      </InputColumn>
    </FormWrapper>
  )
}

export default WorkingInputs
