import { SegmentedControl } from '@sms/shared'
import { useFormContext } from 'react-hook-form'
import type { Field } from '@features/student/dtos/res/AuthenticationFromResDto'

interface Props {
  field: Field
  name: string
}

const BooleanInput = ({ field, name }: Props) => {
  const { register } = useFormContext()

  return (
    <SegmentedControl.Root {...register(name)}>
      {
        field.values?.map((value) => (
          <SegmentedControl.Option key={value.selectId} value={value.selectId}>
            {value.value}
          </SegmentedControl.Option>
        )) as []
      }
    </SegmentedControl.Root>
  )
}

export default BooleanInput
