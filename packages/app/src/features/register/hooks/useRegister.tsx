import { useRouter } from 'next/router'
import { RegisterFormType } from '@features/register/type'
import { useToast } from '@features/toast'
import apiErrors from '@features/register/services/errors'
import ErrorMapper from '@lib/ErrorMapper'
import { useForm } from 'react-hook-form'
import { PostStudentInfoService } from '@features/register/services'
import useLoading from '@features/modal/hooks/useLoading'

const useRegister = () => {
  const { addToast } = useToast()
  const router = useRouter()
  const { loadingWrap, loadingClose } = useLoading()
  const {
    register,
    control,
    handleSubmit,
    setValue,
    setError,
    watch,
    resetField,
    clearErrors,
    formState: { errors },
  } = useForm<RegisterFormType>({
    defaultValues: {
      techStacks: [],
    },
  })

  const onSubmit = handleSubmit(async (form: RegisterFormType) => {
    const res = await loadingWrap(PostStudentInfoService(form))
    if (res) {
      loadingClose()
      return addToast('error', ErrorMapper(res, apiErrors))
    }

    router.push('/')

    loadingClose()
    addToast('success', '학생 정보 기입에 성공했습니다')
  })

  return {
    register,
    control,
    onSubmit,
    resetField,
    setError,
    errors,
    setValue,
    watch,
    clearErrors,
  }
}

export default useRegister
