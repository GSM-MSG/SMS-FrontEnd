import { Input } from '@sms/shared'
import { useFormContext } from 'react-hook-form'
import ErrorWrapper from '@sms/shared/src/atoms/ErrorWrapper'
import { ErrorMessage } from '@hookform/error-message'
import type { Field } from '@features/student/dtos/res/AuthenticationFromResDto'

interface Props {
  field: Field
  name: string
}

const TextInput = ({ field, name }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <ErrorWrapper error={<ErrorMessage name={name} errors={errors} />}>
      <Input {...register(name)} placeholder={field.placeholder} />
    </ErrorWrapper>
  )
}

export default TextInput
