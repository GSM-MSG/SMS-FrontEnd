import { Input } from '@sms/shared'
import { useFormContext } from 'react-hook-form'
import type { Field } from '@features/student/dtos/res/AuthenticationFromResDto'

interface Props {
  field: Field
  name: string
}

const TextInput = ({ field, name }: Props) => {
  const { register } = useFormContext()

  return <Input {...register(name)} placeholder={field.example} />
}

export default TextInput
