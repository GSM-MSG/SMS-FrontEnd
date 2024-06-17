import useLoading from '@features/modal/hooks/useLoading'
import { useToast } from '@features/toast'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { TeacherRegisterFormType } from '@features/register/type'
import { PostTeacherRegisterService } from '@features/register/services'

const useTeacherRegister = () => {
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
  } = useForm<TeacherRegisterFormType>({
    defaultValues: {},
  })

  const onSubmit = handleSubmit(async (form: TeacherRegisterFormType) => {
    const res = await loadingWrap(PostTeacherRegisterService(form)) //쓸 api요청
    if (res) {
      loadingClose()
    }

    router.push('/')

    loadingClose()
    addToast('success', '회원가입에 성공했습니다')
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

export default useTeacherRegister
