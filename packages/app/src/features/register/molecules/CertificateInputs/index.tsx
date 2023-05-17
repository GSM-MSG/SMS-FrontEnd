import { MultiInput } from '@sms/shared'
import { InputColumn, FormWrapper } from '@features/register/atoms'
import { Control, FieldValues, UseFormRegister } from 'react-hook-form'

interface Props<FormType extends FieldValues> {
  register: UseFormRegister<FormType>
  control: Control<FormType>
}

const CertificateInputs = <FormType extends FieldValues>({
  control,
  register,
}: Props<FormType>) => {
  return (
    <FormWrapper title='자격증'>
      <InputColumn comment='자격증'>
        <MultiInput
          register={register}
          control={control}
          name='certificate'
          placeholder='예)정보처리산업기사'
        />
      </InputColumn>
    </FormWrapper>
  )
}

export default CertificateInputs
