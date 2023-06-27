import { MultiInput } from '@sms/shared'
import { InputColumn, FormWrapper } from '@features/register/atoms'
import { Control, FieldErrors, UseFormRegister } from 'react-hook-form'
import { RegisterFormType } from '@features/register/type'

interface Props {
  register: UseFormRegister<RegisterFormType>
  control: Control<RegisterFormType>
  errors: FieldErrors<RegisterFormType>
}

const CertificateInputs = ({ control, register, errors }: Props) => {
  return (
    <FormWrapper required={false} title='자격증'>
      <InputColumn comment='자격증'>
        <MultiInput
          register={register}
          control={control}
          name='certificate'
          placeholder='예)정보처리산업기사'
          errors={errors.certificate}
        />
      </InputColumn>
    </FormWrapper>
  )
}

export default CertificateInputs
