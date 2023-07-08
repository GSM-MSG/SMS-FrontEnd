import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@store'
import { resetPage, setParam } from '@store/studentParamSlice'
import { resetStudents } from '@store/studentListSlice'
import ParamsFilter from '@lib/ParamsFilter'
import useModal from './useModal'
import useStudent from './useStudent'

const useStudentsFilter = () => {
  const dispatch = useDispatch()
  const { param, studentParam } = useSelector((state: RootState) => ({
    param: state.studentParam.param,
    studentParam: state.studentParam,
  }))
  const router = useRouter()
  const { refetchStudents } = useStudent()
  const { onClose } = useModal('filter')
  const { register, setValue, handleSubmit, getValues, watch, reset } =
    useForm<StudentParam>({
      defaultValues: {
        grade: [],
        majors: [],
        classNum: [],
        department: [],
        techStacks: [],
        formOfEmployment: [],
        ...param,
      },
    })

  const onSubmit = handleSubmit(async (form) => {
    dispatch(resetPage())
    dispatch(resetStudents())
    dispatch(setParam(form))
    refetchStudents({ ...form, size: studentParam.size, page: 1 })

    await router.push('/', {
      query: {
        ...ParamsFilter(form),
      },
    })
    onClose()
  })

  return {
    register,
    setValue,
    onSubmit,
    getValues,
    watch,
    reset: () =>
      reset({
        grade: [],
        majors: [],
        classNum: [],
        department: [],
        techStacks: [],
        formOfEmployment: [],
      }),
    minSalary: param.minSalary,
    maxSalary: param.maxSalary,
    maxGsmAuthenticationScore: param.maxGsmAuthenticationScore,
    minGsmAuthenticationScore: param.minGsmAuthenticationScore,
  }
}

export default useStudentsFilter
