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
    setValue,
    setError,
    formState: { errors },
  } = useForm<FormType>()

  const onUpload = async () => {
    setValue('file', 'https://hello.com')
    setError('file', {})
  }

  const onSubmit = () => {
    setError('file', { type: 'required' })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FileInput
        errors={!!errors.file?.type}
        {...register('file')}
        onUpload={onUpload}
      />
      <button>submit</button>
    </form>
  )
}
