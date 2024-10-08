import usePostFileMutation from '@features/register/queries/usePostFileMutation'
import { DescriptionWrapper, FileInput, ErrorWrapper } from '@sms/shared'
import { ChangeEvent } from 'react'
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
    <DescriptionWrapper description={field.scoreDescription}>
      <ErrorWrapper error={<ErrorMessage name={name} errors={errors} />}>
        <FileInput
          name={name}
          placeholder={field.placeholder ?? undefined}
          onChange={onUpload}
          onBlur={onBlur}
        />
      </ErrorWrapper>
    </DescriptionWrapper>
  )
}

export default FileUpload
