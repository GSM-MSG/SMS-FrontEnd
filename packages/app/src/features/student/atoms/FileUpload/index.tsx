import usePostFileMutation from '@features/register/queries/usePostFileMutation'
import { FileInput } from '@sms/shared'
import { ChangeEvent } from 'react'
import ErrorWrapper from '@sms/shared/src/atoms/ErrorWrapper'
import { ErrorMessage } from '@hookform/error-message'
import { useFormContext } from 'react-hook-form'
import type { Field } from '@features/student/dtos/res/AuthenticationFromResDto'

interface Props {
  name: string
  field: Field
  onChange: (value?: string) => void
  onBlur?: () => void
}

const FileUpload = ({ name, field, onChange, onBlur }: Props) => {
  const {
    formState: { errors },
  } = useFormContext()

  const { mutateAsync } = usePostFileMutation({
    onSuccess: (data) => {
      onChange(data)
    },
  })

  const onUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return undefined

    try {
      await mutateAsync({ file, isImage: file.type.includes('image') })
      return file.name
    } catch (e) {
      return undefined
    }
  }

  return (
    <ErrorWrapper error={<ErrorMessage name={name} errors={errors} />}>
      <FileInput
        name={name}
        placeholder={field.placeholder}
        onChange={onUpload}
        onBlur={onBlur}
      />
    </ErrorWrapper>
  )
}

export default FileUpload
