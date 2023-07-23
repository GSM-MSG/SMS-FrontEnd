import { Input, DateInput } from '@sms/shared'
import * as Icon from '@sms/shared/src/icons'
import { InputColumn } from '@features/register/atoms'
import HideableWrapper from '@features/register/atoms/HideableWrapper'
import { RegisterFormType } from '@features/register/type'
import {
  Control,
  FieldErrors,
  useFieldArray,
  UseFormRegister,
} from 'react-hook-form'
import * as S from './style'

interface Props {
  control: Control<RegisterFormType>
  register: UseFormRegister<RegisterFormType>
  errors: FieldErrors<RegisterFormType>
}

const PrizeInputs = ({ control, errors, register }: Props) => {
  const { fields, remove, append } = useFieldArray({ name: 'prizes', control })

  const onClick = () => append({ name: '', date: '', kind: '' })

  return (
    <S.Wrapper>
      <S.PriszesList>
        {fields.map((field, idx) => (
          <div key={field.id}>
            <HideableWrapper onDelete={() => remove(idx)} title='수상'>
              <InputColumn comment='이름'>
                <Input
                  {...register(`prizes.${idx}.name`, {
                    required: { value: true, message: '필수 값입니다' },
                  })}
                  placeholder='수상 내역 이름입력'
                  error={errors?.prizes?.[idx]?.name?.message}
                />
              </InputColumn>

              <InputColumn comment='수상 일자'>
                <Input
                  {...register(`prizes.${idx}.kind`, {
                    required: { value: true, message: '필수 값입니다' },
                  })}
                  placeholder='수상 종류입력'
                  error={errors?.prizes?.[idx]?.kind?.message}
                />
              </InputColumn>

              <InputColumn comment='기간'>
                <DateInput
                  {...register(`prizes.${idx}.date`, {
                    required: { value: true, message: '필수 값입니다' },
                  })}
                  error={errors?.prizes?.[idx]?.date?.message}
                />
              </InputColumn>
            </HideableWrapper>

            <S.Hr />
          </div>
        ))}
      </S.PriszesList>

      {fields.length === 0 && <S.Title>수상</S.Title>}

      <S.ButtonWrapper>
        <S.AddButton onClick={onClick}>
          <Icon.SmallPlus type='outline' /> 추가
        </S.AddButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  )
}

export default PrizeInputs