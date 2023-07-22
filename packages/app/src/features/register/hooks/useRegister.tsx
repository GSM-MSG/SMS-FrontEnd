import { RegisterFormType } from '@features/register/type'
import { ChangeEvent } from 'react'
import { useToast } from '@features/toast'
import apiErrors from '@features/register/services/errors'
import ErrorMapper from '@lib/ErrorMapper'
import { useForm } from 'react-hook-form'
import {
  PostStudentInfoService,
  PostFileService,
} from '@features/register/services'
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
    formState: { errors },
  } = useForm<RegisterFormType>({
    defaultValues: {
      techStack: [],
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
      prizes: [{ name: '', type: '', date: '' }],
    },
  })

  const imageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    // TODO 리팩토링
    if (!e.target.files || !e.target.files[0]) {
      setError('profileImgUrl', { message: '이미지 업로드에 실패했습니다' })
      addToast('error', '이미지 업로드에 실패했습니다')
      return ''
    }
    const imageUrl = await PostFileService(e.target.files[0], true)
    if (!imageUrl) {
      setError('profileImgUrl', { message: '이미지 업로드에 실패했습니다' })
      addToast('error', '이미지 업로드에 실패했습니다')
      return ''
    }
    setValue('profileImgUrl', imageUrl)

    addToast('success', '이미지 업로드에 성공했습니다')
    return imageUrl
  }

  const fileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    // TODO 리팩토링
    if (!e.target.files || !e.target.files[0]) {
      setError('dreamBookFileUrl', { message: '업로드에 실패했습니다' })
      addToast('error', '업로드에 실패했습니다')
      return ''
    }
    const fileUrl = await PostFileService(e.target.files[0], false)
    if (!fileUrl) {
      setError('dreamBookFileUrl', { message: '업로드에 실패했습니다' })
      addToast('error', '업로드에 실패했습니다')
      return ''
    }
    setValue('dreamBookFileUrl', fileUrl)

    addToast('success', '업로드에 성공했습니다')
    return fileUrl
  }

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
    imageUpload,
    fileUpload,
    resetField,
    setError,
    errors,
    setValue,
    watch,
  }
}

export default useRegister
