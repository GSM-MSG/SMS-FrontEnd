import { useEffect } from 'react'
import {
  Control,
  FieldValues,
  UseFormRegister,
  useFieldArray,
  FieldError,
  Merge,
} from 'react-hook-form'
import { Chip, DeleteButton, Input } from '../../atoms'
import * as S from './style'

interface Props {
  name: string
  control: Control<any>
  register: UseFormRegister<any>
  errors?: Merge<FieldError, (FieldError | undefined)[]> | undefined
}

const MultiInput = ({ name, control, register, errors }: Props) => {
  const { fields, append, remove } = useFieldArray<FieldValues>({
    name,
    control,
  })

  useEffect(() => {
    append('')
  }, [])

  return (
    <S.Wrapper>
      <S.InputsWrapper>
        {fields.map((field, index) => (
          <S.InputWrapper key={field.id}>
            <Input
              {...register(`${name}[${index}]`, {
                required: { value: true, message: '필수 값입니다' },
              })}
              error={errors?.[index]?.message}
              placeholder='예)정보처리산업기사'
            />
            {fields.length > 1 && (
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
