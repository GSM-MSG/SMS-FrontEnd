import errors from '@features/student/service/errors'
import { useToast } from '@features/toast'
import ErrorMapper from '@lib/ErrorMapper'
import { RootState } from '@store'
import { addStudents, setTotoalSize } from '@store/studentListSlice'
import { nextStop, setIsError, setLoading } from '@store/studentParamSlice'
import { useDispatch, useSelector } from 'react-redux'
import studentListApi from '@features/student/service/studentListApi'

interface StudentsParams extends StudentParam {
  page: number
  size: number
}

const useStudent = () => {
  const dispatch = useDispatch()
  const { addToast } = useToast()
  const { studentParam, studentList, totalSize } = useSelector(
    (state: RootState) => ({
      studentParam: state.studentParam,
      studentList: state.studentList.studentList,
      totalSize: state.studentList.totalSize,
    })
  )

  const refetchStudents = async (params: StudentsParams) => {
    if (studentParam.nextStop) return

    dispatch(setLoading(true))
    const { data, isError, error } = await studentListApi({
      ...params,
    })
    dispatch(setLoading(false))

    if (isError) {
      dispatch(setIsError(isError))
      return addToast('error', ErrorMapper(error, errors))
    }
    dispatch(setTotoalSize(data.totalSize))
    if (data?.content) dispatch(addStudents(data.content))
    if (data.last) return dispatch(nextStop())
  }

  return {
    studentList,
    totalSize,
    refetchStudents,
  }
}

export default useStudent
