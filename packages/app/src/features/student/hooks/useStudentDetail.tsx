import studentApi from '@features/student/service/studentApi'
import { useEffect } from 'react'
import useLoggedIn from '@features/auth/hook/useLoggedIn'
import { useModal } from '@features/modal/hooks'
import { useToast } from '@features/toast'
import ErrorMapper from '@lib/ErrorMapper'
import errors from '@features/student/service/errors'

const useStudentDetail = (studentId: string) => {
  let studentRole = ''
  const { role, isSuccess } = useLoggedIn({})

  if (!isSuccess || !role) studentRole = 'anonymous/'
  else if (role === 'ROLE_TEACHER') studentRole = 'teacher/'

  const { error, data, isLoading } = studentApi.useStudentDetailQuery(
    {
      studentId,
      role: studentRole,
    },
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

  return { data, isLoading }
}

export default useStudentDetail
