import { Meta } from '@storybook/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import FileInput from './index'

const config: Meta<typeof FileInput> = {
  title: 'FileInput',
  component: FileInput,
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

  const onUpload = async () => {
    setValue('file', 'owiejf')
    return 'owiejf'
  }

  const onSubmit = () => {}

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FileInput
        {...register('file', {
          required: { value: true, message: '필수 값입니다' },
        })}
        errors={errors.file?.message}
        onUpload={onUpload}
      />
      <button>submit</button>
    </form>
  )
}
