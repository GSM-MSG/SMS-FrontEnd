import { NewSelect } from '@sms/shared'
import { Controller, useFormContext } from 'react-hook-form'
import type { Field } from '@features/student/dtos/res/AuthenticationFromResDto'

interface Props {
  field: Field
  name: string
}

const SelectInput = ({ field, name }: Props) => {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, onBlur } }) => (
        <NewSelect.Root onValueChange={onChange} value={value} onBlur={onBlur}>
          <NewSelect.SelectTrigger>
            <NewSelect.SelectValue placeholder={field.example} />
          </NewSelect.SelectTrigger>

          <NewSelect.SelectContent>
            {
              field.values?.map((value) => (
                <NewSelect.SelectItem
                  key={value.selectId}
                  value={value.selectId}
                >
                  {value.value}
                </NewSelect.SelectItem>
              )) as []
            }
          </NewSelect.SelectContent>
        </NewSelect.Root>
      )}
    />
  )
}

export default SelectInput
