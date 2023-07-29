import { Meta } from '@storybook/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import DatePicker from './index'

const config: Meta<typeof DatePicker> = {
  title: 'DatePicker',
  component: DatePicker,

  args: {},
}

export default config

interface FormType {
  date: string
}

export const Primary = () => {
  const {
    register,
    watch,
    setValue,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<FormType>()

  const onSubmit = handleSubmit(console.log)

  return (
    <form onSubmit={onSubmit}>
      <DatePicker
        {...register('date', {
          required: { value: true, message: '필수 값입니다' },
        })}
        value={watch('date')}
        setValue={(value) => setValue('date', value)}
        error={errors.date?.message}
        clearError={() => clearErrors('date')}
      />
      <button type='submit'>submit</button>
    </form>
  )
}
