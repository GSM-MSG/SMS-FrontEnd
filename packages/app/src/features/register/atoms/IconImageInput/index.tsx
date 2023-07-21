import useImageUpload from '@features/register/hooks/useImageUpload'
import { UseFormSetError, UseFormSetValue } from 'react-hook-form'
import { ImageInput } from '@sms/shared'
import { RegisterFormType } from '@features/register/type'

interface Props {
  idx: number
  setValue: UseFormSetValue<RegisterFormType>
  setError: UseFormSetError<RegisterFormType>
  error?: string
}

const IconImageInput = ({ idx, setValue, setError, error }: Props) => {
  const { onChange } = useImageUpload({
    setValue: (value: string) => setValue(`projects.${idx}.icon`, value),
    setError: (message) => setError(`projects.${idx}.icon`, { message }),
  })

  return <ImageInput onChange={onChange} error={error} />
}

export default IconImageInput
