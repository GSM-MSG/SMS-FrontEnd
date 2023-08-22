import useImageUpload from '@features/register/hooks/useImageUpload'
import {
  UseFormClearErrors,
  UseFormRegisterReturn,
  UseFormSetError,
  UseFormSetValue,
} from 'react-hook-form'
import { ImageInput } from '@sms/shared'
import { RegisterFormType } from '@features/register/type'

interface Props {
  idx: number
  setValue: UseFormSetValue<RegisterFormType>
  setError: UseFormSetError<RegisterFormType>
  error?: string
  clearErrors: UseFormClearErrors<RegisterFormType>
  register: UseFormRegisterReturn
}

const IconImageInput = ({
  idx,
  setValue,
  setError,
  error,
  clearErrors,
  register,
}: Props) => {
  const { onChange } = useImageUpload({
    setValue: (value: string) => setValue(`projects.${idx}.icon`, value),
    setError: (message) => setError(`projects.${idx}.icon`, { message }),
    clearError: () => clearErrors(`projects.${idx}.icon`),
  })

  return (
    <>
      <input {...register} hidden />
      <ImageInput onChange={onChange} error={error} />
    </>
  )
}

export default IconImageInput
