import usePostFileMutation from '@features/register/queries/usePostFileMutation'
import { FileInput } from '@sms/shared'
import { ChangeEvent } from 'react'

interface Props {
  name: string
  onChange: (value?: string) => void
  onBlur?: () => void
}

const FileUpload = ({ name, onChange, onBlur }: Props) => {
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

  return <FileInput name={name} onChange={onUpload} onBlur={onBlur} />
}

export default FileUpload
