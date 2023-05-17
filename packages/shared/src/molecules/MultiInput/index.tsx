import { useEffect } from 'react'
import {
  Control,
  FieldValues,
  UseFormRegister,
  useFieldArray,
} from 'react-hook-form'
import { Trash } from '../../icons'
import { Chip, Input } from '../../atoms'
import * as S from './style'

interface Props {
  name: string
  control: Control<any>
  register: UseFormRegister<any>
}

const MultiInput = ({ name, control, register }: Props) => {
  const { fields, append, remove } = useFieldArray<FieldValues>({
    name,
    control,
  })

  useEffect(() => {
    append('')
  }, [])

  return (
    <S.Wrapper>
      {fields.map((field, index) => (
        <S.InputWrapper key={field.id}>
          <Input {...register(`${name}[${index}]`)} />
          {fields.length > 1 && (
            <S.RemoveBtn type='button' onClick={() => remove(index)}>
              <Trash />
            </S.RemoveBtn>
          )}
        </S.InputWrapper>
      ))}
      <Chip onClick={() => append('')}>Hello world</Chip>
    </S.Wrapper>
  )
}

export default MultiInput
