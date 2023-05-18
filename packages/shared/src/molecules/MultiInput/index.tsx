import { useEffect } from 'react'
import {
  Control,
  FieldValues,
  UseFormRegister,
  useFieldArray,
} from 'react-hook-form'
import { Chip, DeleteButton, Input } from '../../atoms'
import * as S from './style'

interface Props {
  name: string
  control: Control<any>
  register: UseFormRegister<any>
  placeholder?: string
}

const MultiInput = ({ name, control, register, placeholder }: Props) => {
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
              {...register(`${name}[${index}]`)}
              placeholder={placeholder}
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
