import { useToast } from '@features/toast'
import { ChangeEvent } from 'react'
import { PostFileService } from '@features/register/services'
import useLoading from '@features/modal/hooks/useLoading'

interface Props {
  setValue: (value: string) => void
  setError: (error: string) => void
  clearError: () => void
}

const useImageUpload = ({ setValue, setError, clearError }: Props) => {
  const { addToast } = useToast()
  const { loadingWrap } = useLoading()

  const showErrorMessage = (message: string) => {
    setError(message)
    addToast('error', message)
  }

  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0]) return

    const file = e.target.files[0]

    const imageUrl = await loadingWrap(
      PostFileService(file, file.type.includes('image')),
      true
    )

    if (!imageUrl) return showErrorMessage('파일 업로드에 실패했습니다')

    setValue(imageUrl)
    addToast('success', '파일 업로드에 성공했습니다')
    clearError()

    return imageUrl
  }

  return { onChange }
}

export default useImageUpload
