import { SegmentedControl } from '@sms/shared'
import { useFormContext } from 'react-hook-form'
import ErrorWrapper from '@sms/shared/src/atoms/ErrorWrapper'
import { ErrorMessage } from '@hookform/error-message'
import type { Field } from '@features/student/dtos/res/AuthenticationFromResDto'

interface Props {
  field: Field
  name: string
}

const BooleanInput = ({ field, name }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <ErrorWrapper error={<ErrorMessage name={name} errors={errors} />}>
      <SegmentedControl.Root {...register(name)}>
        {
          field.values?.map((value) => (
            <SegmentedControl.Option
              key={value.selectId}
              value={value.selectId}
            >
              {value.value}
            </SegmentedControl.Option>
          )) as []
        }
      </SegmentedControl.Root>
    </ErrorWrapper>
  )
}

export default BooleanInput
