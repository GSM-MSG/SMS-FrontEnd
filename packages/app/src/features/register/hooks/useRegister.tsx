import { RegisterFormType } from '@features/register/type'
import { ChangeEvent } from 'react'
import { useForm } from 'react-hook-form'
import {
  PostStudentInfoService,
  PostFileService,
} from '@features/register/services'
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
    // TODO 리팩토링
    if (!e.target.files || !e.target.files[0]) {
      setError('profileImgUrl', { message: '이미지 업로드에 실패했습니다' })
      return ''
    }
    const imageUrl = await PostFileService(e.target.files[0], true)
    if (!imageUrl) {
      setError('profileImgUrl', { message: '이미지 업로드에 실패했습니다' })
      return ''
    }
    setValue('profileImgUrl', imageUrl)

    return imageUrl
  }

  const fileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    // TODO 리팩토링
    if (!e.target.files || !e.target.files[0]) {
      setError('dreamBookFileUrl', { type: 'required' })
      return ''
    }
    const fileUrl = await PostFileService(e.target.files[0], false)
    if (!fileUrl) {
      setError('dreamBookFileUrl', { type: 'required' })
      return ''
    }
    setValue('dreamBookFileUrl', fileUrl)

    return fileUrl
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
