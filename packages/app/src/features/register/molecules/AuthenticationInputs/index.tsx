import HideableWrapper from '@features/register/atoms/HideableWrapper'
import { InputColumn } from '@features/register/atoms'
import { ImageInput, Input, Textarea } from '@sms/shared'
import { RegisterFormType } from '@features/register/type'
import * as Icon from '@sms/shared/src/icons'
import {
  Control,
  FieldErrors,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetError,
  UseFormSetValue,
  useFieldArray,
  UseFormClearErrors,
} from 'react-hook-form'
import { useState } from 'react'
import useImageUpload from '@features/register/hooks/useImageUpload'
import * as S from './style'

interface Props {
  idx: number
  control: Control<RegisterFormType>
  register: UseFormRegister<RegisterFormType>
  errors: FieldErrors<RegisterFormType>
  setValue: UseFormSetValue<RegisterFormType>
  watch: UseFormGetValues<RegisterFormType>
  setError: UseFormSetError<RegisterFormType>
  clearErrors: UseFormClearErrors<RegisterFormType>
}

const AuthenticationInput = ({
  idx,
  control,
  register,
  errors,
  setValue,
  watch,
  setError,
  clearErrors,
}: Props) => {
  const { fields, remove, append } = useFieldArray({
    name: 'activities',
    control,
  })

  const { onChange } = useImageUpload({
    setValue: (value: string) => {
      setValue(`activities.${idx}.previewImage`, [value])
      setMinLength(200)
    },
    setError: (message) => {
      setError(`activities.${idx}.previewImage`, { message })
      setMinLength(400)
    },
    clearError: () => {
      clearErrors(`activities.${idx}.previewImage`)
      setMinLength(400)
    },
  })

  const onClick = () =>
    append({
      name: '',
      myActivity: '',
      description: '',
      previewImage: [],
    })

  const [minLength, setMinLength] = useState<number>(400)

  return (
    <S.Wrapper>
      <S.ProjectList>
        {fields.map((field, idx) => (
          <div key={field.id}>
            <HideableWrapper
              title={watch(`activities.${idx}.name`)}
              onDelete={() => remove(idx)}
            >
              <InputColumn comment='활동 사진'>
                <S.ImageInput>
                  <ImageInput
                    isPreview
                    onChange={onChange}
                    value={watch(`activities.${idx}.previewImage`)}
                    error={errors?.activities?.[idx]?.previewImage?.message}
                  />
                </S.ImageInput>
              </InputColumn>

              <InputColumn comment='활동 제목'>
                <Input
                  {...register(`activities.${idx}.name`, {
                    required: {
                      value: true,
                      message: '필수 값입니다',
                    },
                    maxLength: {
                      value: 30,
                      message: '최대 30자까지 가능합니다',
                    },
                  })}
                  placeholder='활동 제목 입력'
                  error={errors.activities?.[idx]?.name?.message}
                />
              </InputColumn>

              <InputColumn comment='활동 내용'>
                <Textarea
                  {...register(`activities.${idx}.description`, {
                    required: { value: true, message: '필수 값입니다' },
                    minLength: {
                      value: minLength,
                      message: `최소 ${minLength}자 이상 작성해야 합니다.`,
                    },
                    maxLength: {
                      value: 1000,
                      message: '최대 1000자까지 가능합니다',
                    },
                  })}
                  placeholder='활동 내용 입력'
                  error={errors.activities?.[idx]?.description?.message}
                />
              </InputColumn>
            </HideableWrapper>

            <S.Hr />
          </div>
        ))}
      </S.ProjectList>

      {fields.length === 0 && <S.Title>인증제</S.Title>}

      <S.ButtonWrapper>
        <S.AddButton onClick={onClick}>
          <Icon.SmallPlus type='outline' /> 추가
        </S.AddButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  )
}

export default AuthenticationInput
