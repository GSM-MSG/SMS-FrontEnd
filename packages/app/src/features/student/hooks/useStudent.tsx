import errors from '@features/student/service/errors'
import { useToast } from '@features/toast'
import ErrorMapper from '@lib/ErrorMapper'
import { RootState } from '@store'
import { actions } from '@features/student/stores'
import { useDispatch, useSelector } from 'react-redux'
import studentListApi from '@features/student/service/studentListApi'
import StudentType from '@features/student/types/StudentType'

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

    dispatch(actions.setLoading(true))
    const { data, isError, error } = await studentListApi(
      {
        ...params,
      },
      null
    )
    dispatch(actions.setLoading(false))

    if (isError) {
      dispatch(actions.setIsError(isError))
      return addToast('error', ErrorMapper(error, errors))
    }
    dispatch(actions.setTotoalSize(data.totalSize))
    if (data?.content) dispatch(actions.addStudents(data.content))
    if (data.last) return dispatch(actions.nextStop())
  }

  const setStudentList = (
    students?: StudentType[],
    totalSize?: number,
    last?: boolean
  ) => {
    if (!students || !totalSize || !last) return

    dispatch(actions.resetStudents())
    dispatch(actions.addStudents(students))
    dispatch(actions.setTotoalSize(totalSize))
    if (last) dispatch(actions.nextStop())
  }

  return {
    studentList,
    totalSize,
    refetchStudents,
    setStudentList,
  }
}

export default useStudent
