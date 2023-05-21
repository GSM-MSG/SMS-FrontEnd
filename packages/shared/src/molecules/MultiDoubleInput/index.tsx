import { useEffect } from 'react'
import {
  Control,
  FieldValues,
  UseFormRegister,
  useFieldArray,
} from 'react-hook-form'
import { Chip, DeleteButton, Input } from '../../atoms'
import * as S from './style'
import { ErrorsType } from './type'

interface Props {
  name: string
  control: Control<any>
  register: UseFormRegister<any>
  errors?: ErrorsType
}

/**
 * FormType의 필드명이 아래 두 가지로 고정되어 있음
 * 1. languageCertificateName
 * 2. score
 */
const MultiDoubleInput = ({ name, control, register, errors }: Props) => {
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
            <S.DoubleInputWrapper>
              <Input
                {...register(`${name}[${index}].languageCertificateName`, {
                  required: {
                    value: fields.length > 1,
                    message: '필수 값입니다',
                  },
                })}
                placeholder='예) 토익'
                error={errors?.[index]?.languageCertificateName?.message}
              />
              <Input
                {...register(`${name}[${index}].score`, {
                  required: {
                    value: fields.length > 1,
                    message: '필수 값입니다',
                  },
                })}
                placeholder='990'
                error={errors?.[index]?.score?.message}
              />
            </S.DoubleInputWrapper>

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

export default MultiDoubleInput
