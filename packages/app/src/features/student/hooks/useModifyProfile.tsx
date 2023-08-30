import { useRouter } from 'next/router'
import { RegisterFormType } from '@features/register/type'
import { useForm } from 'react-hook-form'
import modifyStudentService from '@features/student/service/modifyStudentService'
import { useToast } from '@features/toast'
import useLoading from '@features/modal/hooks/useLoading'

interface Props {
  defaultValue?: Partial<RegisterFormType>
}

const useModifyProfile = ({ defaultValue }: Props) => {
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
      ...defaultValue,
    },
  })
  const { addToast } = useToast()
  const { loadingWrap } = useLoading()
  const router = useRouter()

  const onSubmit = handleSubmit(async (form) => {
    const errorMessage = await loadingWrap(modifyStudentService(form))

    if (errorMessage) {
      return addToast('error', errorMessage)
    }
    await router.push('/')

    addToast('success', '정보 수정에 성공했습니다')
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

export default useModifyProfile
