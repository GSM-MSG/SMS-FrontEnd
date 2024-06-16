import { Input } from '@sms/shared'
import { useFormContext } from 'react-hook-form'
import type { Field } from '@features/student/dtos/res/AuthenticationFromResDto'

interface Props {
  field: Field
  name: string
}

const NumberInput = ({ field, name }: Props) => {
  const { register } = useFormContext()

  return (
    <Input
      {...register(name, {})}
      placeholder={field.example}
      type='number'
      onWheel={(e) => {
        e.currentTarget.blur()
      }}
    />
  )
}

export default NumberInput
