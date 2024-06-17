import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@store'
import { actions } from '@features/student/stores'
import ParamsFilter from '@lib/ParamsFilter'
import { useModal } from '@features/modal/hooks'
import toQueryString from '@features/student/lib/toQueryString'
import { useRouter } from 'next/router'

const useStudentsFilter = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { param } = useSelector((state: RootState) => ({
    param: state.studentParam.param,
  }))
  const { onClose } = useModal()
  const { register, setValue, handleSubmit, getValues, watch, reset, control } =
    useForm<StudentParam>({
      defaultValues: {
        grade: [],
        majors: [],
        classNum: [],
        department: [],
        techStacks: [],
        formOfEmployment: [],
        minSalary: 0,
        maxSalary: 9999,
        minGsmAuthenticationScore: 0,
        maxGsmAuthenticationScore: 990,
        ...param,
      },
    })

  const onSubmit = handleSubmit(async (form) => {
    dispatch(actions.resetPage())
    dispatch(actions.setParam(form))
    ParamsFilter(form)

    router.push('/', toQueryString(ParamsFilter(form)))
    onClose()
  })

  const onClickMajor = (major: string) => {
    const majors = watch('majors')
    if (majors?.includes(major))
      setValue(
        'majors',
        majors?.filter((i) => i !== major)
      )
    else if (majors) setValue('majors', [...majors, major])
  }

  return {
    register,
    setValue,
    onSubmit,
    getValues,
    watch,
    control,
    onClickMajor,
    reset: () =>
      reset({
        grade: [],
        majors: [],
        classNum: [],
        department: [],
        techStacks: [],
        formOfEmployment: [],
        minSalary: 0,
        maxSalary: 9999,
        minGsmAuthenticationScore: 0,
        maxGsmAuthenticationScore: 990,
        stuNumSort: '',
        salarySort: '',
        gsmAuthenticationScoreSort: '',
      }),
  }
}

export default useStudentsFilter
