import { RegisterFormType } from '@features/register/type'
import { useToast } from '@features/toast'
import apiErrors from '@features/register/services/errors'
import ErrorMapper from '@lib/ErrorMapper'
import { useForm } from 'react-hook-form'
import { PostStudentInfoService } from '@features/register/services'
import useLoggedIn from '@features/auth/hook/useLoggedIn'

const useRegister = () => {
  const { addToast } = useToast()
  const { refetchLoggedIn } = useLoggedIn({})
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
      regions: [''],
      certificates: [''],
      languageCertificates: [{ score: '', languageCertificateName: '' }],
      projects: [
        {
          name: '',
          icon: '',
          links: [{ name: '', url: '' }],
          inProgress: { end: '', start: '' },
          myActivity: '',
          techStacks: [],
          description: '',
          previewImages: [],
        },
      ],
      prizes: [{ date: '', kind: '', name: '' }],
    },
  })

  const onSubmit = handleSubmit(async (form: RegisterFormType) => {
    const res = await PostStudentInfoService(form)
    if (res) return addToast('error', ErrorMapper(res, apiErrors))

    addToast('success', '학생 정보 기입에 성공했습니다')
    await refetchLoggedIn()

    window.location.href = '/'
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
