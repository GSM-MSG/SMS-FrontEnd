import { RegisterFormType } from '@features/register/type'
import { ChangeEvent } from 'react'
import { useForm } from 'react-hook-form'
import { PostStudentInfoService } from '@features/register/services'
import { useRouter } from 'next/router'

const useRegister = () => {
  const router = useRouter()
  const {
    register,
    control,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<RegisterFormType>()

  const imageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0]) return ''
    const value = URL.createObjectURL(e.target.files[0])
    setValue('profileImgUrl', value)

    return value
  }

  const fileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    e
    setValue('dreamBookFileUrl', 'https://hello.com')
  }

  const onSubmit = handleSubmit(async (form: RegisterFormType) => {
    if (!form.profileImgUrl)
      return setError('profileImgUrl', { message: '필수 값입니다' })
    if (!form.portfolioUrl)
      return setError('portfolioUrl', { message: '필수 값입니다' })

    if (!(await PostStudentInfoService(form))) return

    router.push('/')
  })

  return { register, control, onSubmit, imageUpload, fileUpload, errors }
}

export default useRegister
