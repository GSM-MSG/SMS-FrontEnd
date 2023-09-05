import { Input, MultiInput, Select } from '@sms/shared'
import { InputColumn, FormWrapper } from '@features/register/atoms'
import { WorkType } from '@features/register/data'
import { RegisterFormType } from '@features/register/type'
import {
  Control,
  FieldErrors,
  UseFormRegister,
  UseFormResetField,
  UseFormWatch,
} from 'react-hook-form'

interface Props {
  register: UseFormRegister<RegisterFormType>
  control: Control<RegisterFormType>
  errors: FieldErrors<RegisterFormType>
  resetField: UseFormResetField<RegisterFormType>
  watch: UseFormWatch<RegisterFormType>
}

const WorkingInputs = ({
  register,
  control,
  errors,
  resetField,
  watch,
}: Props) => {
  return (
    <FormWrapper title='근무 조건'>
      <InputColumn comment='희망 고용 형태'>
        <Select
          control={control}
          register={register}
          options={WorkType}
          name='formOfEmployment'
          error={errors.formOfEmployment?.message}
          value={watch('formOfEmployment')}
        />
      </InputColumn>
      <InputColumn comment='희망 연봉'>
        <Input
          type='number'
          {...register('salary', {
            required: { value: true, message: '필수 값입니다' },
            max: { value: 9999, message: '희망 연봉은 최대 9999까지 됩니다' },
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
          name='regions'
          register={register}
          control={control}
          errors={errors.regions}
          firstRequired
          required
        />
      </InputColumn>
    </FormWrapper>
  )
}

export default WorkingInputs
