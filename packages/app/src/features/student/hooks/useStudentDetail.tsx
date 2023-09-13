import studentApi from '@features/student/service/studentApi'
import { useEffect } from 'react'
import { useModal } from '@features/modal/hooks'
import { useToast } from '@features/toast'
import ErrorMapper from '@lib/ErrorMapper'
import errors from '@features/student/service/errors'

interface Props {
  studentId: string
}

const useStudentDetail = ({ studentId }: Props) => {
  const { error, data, isLoading } = studentApi.useStudentDetailQuery(
    { studentId },
    { skip: !studentId }
  )
  const { onClose } = useModal()
  const { addToast } = useToast()

  useEffect(() => {
    if (studentId && error) {
      addToast('error', ErrorMapper(error, errors))
      return onClose()
    }
  }, [studentId])

  return { data: data || null, isLoading }
}

export default useStudentDetail
