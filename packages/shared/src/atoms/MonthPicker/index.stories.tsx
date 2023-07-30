import { Meta } from '@storybook/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import MonthPicker from './index'

const config: Meta<typeof MonthPicker> = {
  title: 'MonthPicker',
  component: MonthPicker,

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

  const onSubmit = handleSubmit(() => {})

  return (
    <form onSubmit={onSubmit}>
      <MonthPicker
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
