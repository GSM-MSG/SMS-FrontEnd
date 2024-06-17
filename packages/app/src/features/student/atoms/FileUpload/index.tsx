import usePostFileMutation from '@features/register/queries/usePostFileMutation'
import { FileInput } from '@sms/shared'
import { ChangeEvent } from 'react'

interface Props {
  name: string
  onChange: (value?: string) => void
  onBlur?: () => void
}

const FileUpload = ({ name, onChange, onBlur }: Props) => {
  const { mutate } = usePostFileMutation({
    onSuccess: (data) => {
      onChange(data)
    },
  })

  const onUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    mutate({ file, isImage: file.type.includes('image') })
  }

  return <FileInput name={name} onChange={onUpload} onBlur={onBlur} />
}

export default FileUpload
