import useImageUpload from '@features/register/hooks/useImageUpload'
import { UseFormSetError, UseFormSetValue } from 'react-hook-form'
import { FourImageInputs as ImageInputs } from '@sms/shared'
import { RegisterFormType } from '@features/register/type'

interface Props {
  idx: number
  values: string[]
  setValue: UseFormSetValue<RegisterFormType>
  setError: UseFormSetError<RegisterFormType>
}

const FourImageInputs = ({ idx, values, setValue, setError }: Props) => {
  const { onChange } = useImageUpload({
    setValue: (value: string) =>
      setValue(`projects.${idx}.previewImages`, [...values, value]),
    setError: (message) =>
      setError(`projects.${idx}.previewImages`, { message }),
  })

  return <ImageInputs onChange={onChange} />
}

export default FourImageInputs
