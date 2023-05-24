import { Meta } from '@storybook/react'
import { useForm } from 'react-hook-form'
import React, { ChangeEvent } from 'react'
import Profile from './index'

const config: Meta<typeof Profile> = {
  title: 'Profile',
  component: Profile,
}

export default config

interface FormType {
  file: string
}

export const Primary = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormType>()

  const onUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    let url = ''
    if (e.target.files && e.target.files[0])
      url = URL.createObjectURL(e.target.files[0])

    setValue('file', url)
    return url
  }

  const onSubmit = () => {}

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Profile
        {...register('file', {
          required: { value: true, message: '필수 값입니다' },
        })}
        error={errors.file?.message}
        onUpload={onUpload}
      />
      <button>submit </button>
    </form>
  )
}
