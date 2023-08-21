import useImageUpload from '@features/register/hooks/useImageUpload'
import {
  Control,
  UseFormClearErrors,
  UseFormRegisterReturn,
  UseFormSetError,
  UseFormSetValue,
} from 'react-hook-form'
import { RegisterFormType } from '@features/register/type'
import { ImageInput } from '@sms/shared'
import * as Icon from '@sms/shared/src/icons'

import * as S from './style'

interface Props {
  idx: number
  values: string[]
  setValue: UseFormSetValue<RegisterFormType>
  setError: UseFormSetError<RegisterFormType>
  control: Control<RegisterFormType>
  error?: string
  clearErrors: UseFormClearErrors<RegisterFormType>
  register: UseFormRegisterReturn
}

const FourImageInputs = ({
  idx,
  values,
  setValue,
  setError,
  error,
  clearErrors,
}: Props) => {
  const { onChange } = useImageUpload({
    setValue: (value: string) =>
      setValue(`projects.${idx}.previewImages`, [...values, value]),
    setError: (message) =>
      setError(`projects.${idx}.previewImages`, { message }),
    clearError: () => clearErrors(`projects.${idx}.previewImages`),
  })

  const removeImage = (value: string) =>
    setValue(
      `projects.${idx}.previewImages`,
      values.filter((i) => i !== value)
    )

  return (
    <S.Wrapper>
      <S.Images>
        {values.map((url, idx) => (
          <S.ImageWrapper key={idx}>
            <S.RemoveButton onClick={() => removeImage(url)}>
              <Icon.Xmark />
            </S.RemoveButton>
            <S.Image src={url} />
          </S.ImageWrapper>
        ))}
        {values.length < 4 && <ImageInput isPreview onChange={onChange} />}
      </S.Images>
      <S.Error>{error}</S.Error>
    </S.Wrapper>
  )
}

export default FourImageInputs
