import { Input } from '@sms/shared'
import { InputColumn, FormWrapper } from '@features/register/atoms'
import { RegisterFormType } from '@features/register/type'
import {
  FieldErrors,
  UseFormRegister,
  UseFormResetField,
} from 'react-hook-form'

interface Props {
  register: UseFormRegister<RegisterFormType>
  errors: FieldErrors<RegisterFormType>
  resetField: UseFormResetField<RegisterFormType>
}

const SchoolInputs = ({ register, errors, resetField }: Props) => {
  return (
    <FormWrapper title='학교 생활'>
      <InputColumn comment={`인증제 점수\n(최대 9999점)`}>
        <Input
          {...register('gsmAuthenticationScore', {
            required: { value: true, message: '필수 값입니다' },
            max: { value: 9999, message: '최대 9999점 까지 가능합니다' },
            valueAsNumber: true,
          })}
          placeholder='인증 점수 입력'
          onReset={() => resetField('gsmAuthenticationScore')}
          type='number'
          error={errors.gsmAuthenticationScore?.message}
        />
      </InputColumn>
    </FormWrapper>
  )
}

export default SchoolInputs
