import { useToast } from '@features/toast'
import { ChangeEvent } from 'react'
import { PostFileService } from '@features/register/services'

interface Props {
  setValue: (value: string) => void
  setError: (error: string) => void
}

const useImageUpload = ({ setValue, setError }: Props) => {
  const { addToast } = useToast()

  const showErrorMessage = (message: string) => {
    setError(message)
    addToast('error', message)
  }

  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0])
      return showErrorMessage('파일이 존재하지 않습니다')

    const file = e.target.files[0]

    const imageUrl = await PostFileService(file, file.type.includes('image'))

    if (!imageUrl) return showErrorMessage('파일 업로드에 실패했습니다')

    setValue(imageUrl)
    addToast('success', '파일 업로드에 성공했습니다')

    return imageUrl
  }

  return { onChange }
}

export default useImageUpload
