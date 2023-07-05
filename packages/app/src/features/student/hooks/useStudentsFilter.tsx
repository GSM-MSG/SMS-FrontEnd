import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@store'
import { setParam } from '@store/studentParamSlice'
import studentApi from '@features/student/service/studentApi'
import useModal from './useModal'

const useStudentsFilter = () => {
  const [refetchStudents] = studentApi.useRefetchStudentMutation()
  const dispatch = useDispatch()
  const { param } = useSelector((state: RootState) => ({
    param: state.studentParam.param,
  }))
  const router = useRouter()

  const { onClose } = useModal('filter')
  const { register, setValue, handleSubmit, getValues } = useForm<StudentParam>(
    {
      defaultValues: {
        ...param,
      },
    }
  )

  const onSubmit = handleSubmit(async (form) => {
    refetchStudents({
      ...form,
    })
    dispatch(setParam(form))

    await router.push('/', {
      query: {
        ...form,
      },
    })
    onClose()
  })

  return {
    register,
    setValue,
    onSubmit,
    getValues,
    minSalary: param.minSalary,
    maxSalary: param.maxSalary,
    maxGsmAuthenticationScore: param.maxGsmAuthenticationScore,
    minGsmAuthenticationScore: param.minGsmAuthenticationScore,
  }
}

export default useStudentsFilter
