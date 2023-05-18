import { MultiDoubleInput } from '@sms/shared'
import { InputColumn, FormWrapper } from '@features/register/atoms'
import { Control, FieldValues, UseFormRegister } from 'react-hook-form'

interface Props<FormType extends FieldValues> {
  register: UseFormRegister<FormType>
  control: Control<FormType>
}

const LanguageInputs = <FormType extends FieldValues>({
  control,
  register,
}: Props<FormType>) => {
  return (
    <FormWrapper required={false} title='외국어'>
      <InputColumn comment='외국어'>
        <MultiDoubleInput
          register={register}
          control={control}
          name='languageCertificate'
        />
      </InputColumn>
    </FormWrapper>
  )
}

export default LanguageInputs
