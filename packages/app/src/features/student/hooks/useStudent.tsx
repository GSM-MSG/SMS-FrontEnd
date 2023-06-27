import { studentApi } from '@features/student'
import errors from '@features/student/service/errors'
import { useToast } from '@features/toast'
import ErrorMapper from '@lib/ErrorMapper'
import { RootState } from '@store'
import { nextStop, setLoading } from '@store/studentParamSlice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const useStudent = () => {
  const dispatch = useDispatch()
  const { addToast } = useToast()
  const { studentParam } = useSelector((state: RootState) => ({
    studentParam: state.studentParam,
  }))
  const { data, isLoading, isError, error } = studentApi.useStudentQuery(
    studentParam.param,
    {
      refetchOnMountOrArgChange: true,
      refetchOnReconnect: true,
      refetchOnFocus: true,
    }
  )

  useEffect(() => {
    if (!isError) return

    if (typeof error === 'string') return addToast('error', error)
    addToast('error', ErrorMapper(error, errors))
  }, [isError])

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
