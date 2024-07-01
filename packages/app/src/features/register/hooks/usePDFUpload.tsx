import { useToast } from '@features/toast'
import { ChangeEvent } from 'react'
import { PutPDFService } from '@features/register/services'
import useLoading from '@features/modal/hooks/useLoading'

interface Props {
  setError: (error: string) => void
}

const usePDFUpload = ({ setError }: Props) => {
  const { addToast } = useToast()
  const { loadingWrap } = useLoading()

  const showErrorMessage = (message: string) => {
    setError(message)
    addToast('error', message)
  }

  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0]) return

    const file = e.target.files[0]
    
    const data = await loadingWrap(PutPDFService(file), true)

    if (!data) return showErrorMessage('파일 업로드에 실패했습니다')

    addToast('success', '파일 업로드에 성공했습니다')

    return
  }

  return { onChange }
}

export default usePDFUpload
