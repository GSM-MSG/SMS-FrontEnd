import { MultiDoubleInput } from '@sms/shared'
import { InputColumn, FormWrapper } from '@features/register/atoms'
import { Control, FieldErrors, UseFormRegister } from 'react-hook-form'
import { RegisterFormType } from '@features/register/type'

interface Props {
  register: UseFormRegister<RegisterFormType>
  control: Control<RegisterFormType>
  errors: FieldErrors<RegisterFormType>
}

const LanguageInputs = ({ control, register, errors }: Props) => {
  return (
    <FormWrapper required={false} title='외국어'>
      <InputColumn comment='외국어'>
        <MultiDoubleInput
          register={register}
          control={control}
          name='languageCertificate'
          errors={errors.languageCertificate}
        />
      </InputColumn>
    </FormWrapper>
  )
}

export default LanguageInputs
