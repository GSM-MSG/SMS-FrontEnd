import studentApi from '@features/student/service/studentApi'
import { RootState } from '@store'
import { setStudent } from '@store/studentDetailSlice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useLoggedIn from '@features/auth/hook/useLoggedIn'
import useModal from './useModal'

const useStudentDetail = () => {
  const [mutation] = studentApi.useStudentDetailMutation()
  const dispatch = useDispatch()
  const { onClose } = useModal()
  const { role, isSuccess } = useLoggedIn()
  const { id: studentId } = useSelector((state: RootState) => ({
    id: state.studentDetail.id,
  }))

  useEffect(() => {
    if (!studentId) return
    let studentRole = ''

    if (!isSuccess) studentRole = 'anonymous/'
    else if (role === 'ROLE_TEACHER') studentRole = 'teacher/'
    ;(async () => {
      const data = await mutation({ studentId, role: studentRole })
      if ('error' in data) return onClose()

      dispatch(setStudent(data.data))
    })()
  }, [studentId])
}

export default useStudentDetail
