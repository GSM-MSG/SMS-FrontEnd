import { studentApi } from '@features/student'
import { RootState } from '@store'
import { nextStop, setLoading } from '@store/studentParamSlice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const useStudent = () => {
  const dispatch = useDispatch()
  const { studentParam } = useSelector((state: RootState) => ({
    studentParam: state.studentParam,
  }))
  const { data, isLoading } = studentApi.useStudentQuery(studentParam.param)

  useEffect(() => {
    if (isLoading) return
    dispatch(setLoading(isLoading))
  }, [isLoading])

  useEffect(() => {
    if (data?.last) dispatch(nextStop())
  }, [data])

  return { data }
}

export default useStudent
