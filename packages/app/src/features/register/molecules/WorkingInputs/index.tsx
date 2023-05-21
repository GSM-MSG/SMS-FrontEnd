import { Input, MultiInput, Select } from '@sms/shared'
import { InputColumn, FormWrapper } from '@features/register/atoms'
import { WorkType } from '@features/register/data'
import { RegisterFormType } from '@features/register/type'
import { Control, FieldErrors, UseFormRegister } from 'react-hook-form'

interface Props {
  register: UseFormRegister<RegisterFormType>
  control: Control<RegisterFormType>
  errors: FieldErrors<RegisterFormType>
}

const WorkingInputs = ({ register, control, errors }: Props) => {
  return (
    <FormWrapper title='근무 조건'>
      <InputColumn comment='희망 고용 형태'>
        <Select
          register={register}
          options={WorkType}
          name='formOfEmployment'
        />
      </InputColumn>
      <InputColumn comment='희망 연봉'>
        <Input
          {...register('salary', {
            required: { value: true, message: '필수 값입니다' },
          })}
          error={errors.salary?.message}
          isReset
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
        />
      </InputColumn>
    </FormWrapper>
  )
}

export default WorkingInputs
