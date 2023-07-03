import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@store'
import { setParam } from '@store/studentParamSlice'
import useModal from './useModal'

const useStudentsFilter = () => {
  const dispatch = useDispatch()
  const { param } = useSelector((state: RootState) => ({
    param: state.studentParam.param,
  }))
  const router = useRouter()

  const { onClose } = useModal('filter')
  const { register, setValue, handleSubmit } = useForm<StudentParam>({
    defaultValues: {
      ...param,
    },
  })

  const onSubmit = handleSubmit(async (form) => {
    await router.push('/', {
      query: {
        ...form,
      },
    })
    dispatch(setParam(form))
    onClose()
  })

  return {
    register,
    setValue,
    onSubmit,
    minSalary: param.minSalary,
    maxSalary: param.maxSalary,
    maxGsmAuthenticationScore: param.maxGsmAuthenticationScore,
    minGsmAuthenticationScore: param.minGsmAuthenticationScore,
  }
}

export default useStudentsFilter
