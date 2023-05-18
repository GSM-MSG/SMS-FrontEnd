import { RegisterFormType } from '@features/register/type'
import { ChangeEvent } from 'react'
import { useForm } from 'react-hook-form'

const useRegister = () => {
  const { register, control, handleSubmit, setValue } =
    useForm<RegisterFormType>()

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

  const onSubmit = handleSubmit(() => {})

  return { register, control, onSubmit, imageUpload, fileUpload }
}

export default useRegister
