import { RegisterFormType } from '@features/register/type'
import { Chip, DoubleInput } from '@sms/shared'
import {
  Control,
  FieldErrors,
  UseFormRegister,
  useFieldArray,
} from 'react-hook-form'
import * as S from './style'

interface Props {
  index: number
  control: Control<RegisterFormType>
  register: UseFormRegister<RegisterFormType>
  errors: FieldErrors<RegisterFormType>
}

const LinkMultiDoubleInput = ({ index, control, register, errors }: Props) => {
  const { fields, append, remove } = useFieldArray({
    name: `projects.${index}.links`,
    control,
  })

  const onClick = () => {
    append({ name: '', url: '' })
  }

  return (
    <S.Wrapper>
      <S.Inputs>
        {fields.map((field, idx) => (
          <DoubleInput
            key={field.id}
            titleRegister={register(`projects.${index}.links.${idx}.name`, {
              required: { value: true, message: '필수 값입니다' },
            })}
            contentRegister={register(`projects.${index}.links.${idx}.url`, {
              required: { value: true, message: '필수 값입니다' },
            })}
            titleError={errors?.projects?.[index]?.links?.[idx]?.name?.message}
            contentError={errors?.projects?.[index]?.links?.[idx]?.url?.message}
            titlePlaceholder='이름'
            contentPlaceholder='URL'
            onDelete={fields.length > 1 ? () => remove(idx) : undefined}
          />
        ))}
      </S.Inputs>
      <Chip onClick={onClick}>추가</Chip>
    </S.Wrapper>
  )
}

export default LinkMultiDoubleInput
