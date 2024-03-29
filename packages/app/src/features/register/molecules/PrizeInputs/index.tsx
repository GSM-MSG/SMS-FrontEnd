import { Input, MonthPicker } from '@sms/shared'
import * as Icon from '@sms/shared/src/icons'
import { InputColumn } from '@features/register/atoms'
import HideAbleWrapper from '@features/register/atoms/HideAbleWrapper'
import { RegisterFormType } from '@features/register/type'
import {
  Control,
  FieldErrors,
  useFieldArray,
  UseFormClearErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form'
import * as S from './style'

interface Props {
  control: Control<RegisterFormType>
  register: UseFormRegister<RegisterFormType>
  errors: FieldErrors<RegisterFormType>
  clearErrors: UseFormClearErrors<RegisterFormType>
  setValue: UseFormSetValue<RegisterFormType>
  watch: UseFormWatch<RegisterFormType>
}

const PrizeInputs = ({
  control,
  errors,
  register,
  watch,
  clearErrors,
  setValue,
}: Props) => {
  const { fields, remove, append } = useFieldArray({ name: 'prizes', control })

  const onClick = () => append({ name: '', date: '', kind: '' })

  return (
    <S.Wrapper>
      <S.PrizesList>
        {fields.map((field, idx) => (
          <div key={field.id}>
            <HideAbleWrapper onDelete={() => remove(idx)} title='수상'>
              <InputColumn comment='이름'>
                <Input
                  {...register(`prizes.${idx}.name`, {
                    required: { value: true, message: '필수 값입니다' },
                    maxLength: {
                      value: 40,
                      message: '최대 40자까지 가능합니다',
                    },
                  })}
                  placeholder='수상 내역 이름입력'
                  error={errors?.prizes?.[idx]?.name?.message}
                />
              </InputColumn>

              <InputColumn comment='종류'>
                <Input
                  {...register(`prizes.${idx}.kind`, {
                    required: { value: true, message: '필수 값입니다' },
                    maxLength: {
                      value: 20,
                      message: '최대 20자까지 가능합니다',
                    },
                  })}
                  placeholder='수상 종류입력'
                  error={errors?.prizes?.[idx]?.kind?.message}
                />
              </InputColumn>

              <InputColumn comment='수상 일자'>
                <MonthPicker
                  {...register(`prizes.${idx}.date`, {
                    required: { value: true, message: '필수 값입니다' },
                  })}
                  value={watch(`prizes.${idx}.date`)}
                  setValue={(value) => setValue(`prizes.${idx}.date`, value)}
                  clearError={() => clearErrors(`prizes.${idx}.date`)}
                  error={errors?.prizes?.[idx]?.date?.message}
                />
              </InputColumn>
            </HideAbleWrapper>

            <S.Hr />
          </div>
        ))}
      </S.PrizesList>

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
