import {
  Control,
  FieldValues,
  UseFormRegister,
  FieldError,
  Merge,
  useFieldArray,
} from 'react-hook-form'
import { Chip, DeleteButton, Input } from '../../atoms'
import * as S from './style'

interface Props {
  name: string
  control: Control<any>
  firstRequired?: boolean
  register: UseFormRegister<any>
  errors?: Merge<FieldError, (FieldError | undefined)[]> | undefined
  placeholder?: string
  required?: boolean
}

const MultiInput = ({
  name,
  control,
  register,
  errors,
  placeholder,
  firstRequired,
  required,
}: Props) => {
  const { fields, append, remove } = useFieldArray<FieldValues>({
    name,
    control,
  })

  return (
    <S.Wrapper>
      <S.InputsWrapper>
        {fields.map((field, index) => (
          <S.InputWrapper key={field.id}>
            <Input
              placeholder={placeholder}
              {...register(`${name}[${index}]`, {
                required: {
                  value: firstRequired || fields.length > 1,
                  message: '필수 값입니다',
                },
              })}
              error={errors?.[index]?.message}
            />
            {!(required && fields.length <= 1) && (
              <DeleteButton type='button' onClick={() => remove(index)} />
            )}
          </S.InputWrapper>
        ))}
      </S.InputsWrapper>
      <Chip onClick={() => append('')}>추가</Chip>
    </S.Wrapper>
  )
}

export default MultiInput
