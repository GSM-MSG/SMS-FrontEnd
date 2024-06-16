import { NewSelect } from '@sms/shared'
import { useFormContext } from 'react-hook-form'
import type { Field } from '@features/student/dtos/res/AuthenticationFromResDto'

interface Props {
  field: Field
  name: string
}

const SelectInput = ({ field, name }: Props) => {
  const { register } = useFormContext()

  return (
    <NewSelect.Root {...register(name)}>
      <NewSelect.SelectTrigger>
        <NewSelect.SelectValue placeholder={field.example} />
      </NewSelect.SelectTrigger>

      <NewSelect.SelectContent>
        {
          field.values?.map((value) => (
            <NewSelect.SelectItem key={value.selectId} value={value.selectId}>
              {value.value}
            </NewSelect.SelectItem>
          )) as []
        }
      </NewSelect.SelectContent>
    </NewSelect.Root>
  )
}

export default SelectInput
