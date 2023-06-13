import studentApi from '@features/student/service/studentApi'
import { RootState } from '@store'
import { setStudent } from '@store/studentDetailSlice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const useStudentDetail = () => {
  const [mutation] = studentApi.useStudentDetailMutation()
  const dispatch = useDispatch()
  const { id } = useSelector((state: RootState) => ({
    id: state.studentDetail.id,
  }))

  useEffect(() => {
    if (!id) return
    ;(async () => {
      const data = await mutation(id)
      if ('error' in data) return

      dispatch(setStudent(data.data))
    })()
  }, [id])
}

export default useStudentDetail