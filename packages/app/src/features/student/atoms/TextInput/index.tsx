import { DescriptionWrapper, Input, ErrorWrapper } from '@sms/shared'
import { useFormContext } from 'react-hook-form'
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
    <DescriptionWrapper description={field.scoreDescription}>
      <ErrorWrapper error={<ErrorMessage name={name} errors={errors} />}>
        <Input
          {...register(name)}
          placeholder={field.placeholder ?? undefined}
        />
      </ErrorWrapper>
    </DescriptionWrapper>
  )
}

export default TextInput
