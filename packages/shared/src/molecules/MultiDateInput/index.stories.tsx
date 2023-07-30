import { Meta } from '@storybook/react'
import { useForm } from 'react-hook-form'
import React from 'react'
import MultiDateInput from './index'

const config: Meta<typeof MultiDateInput> = {
  title: 'MultiDateInput',
  component: MultiDateInput,
}

export default config

interface FormType {
  startDate: string
  endDate: string
}

export const Primary = () => {
  const {
    register,
    watch,
    handleSubmit,
    clearErrors,
    setValue,
    formState: { errors },
  } = useForm<FormType>()

  const onSubmit = handleSubmit(console.log)

  return (
    <form onSubmit={onSubmit}>
      <MultiDateInput
        startDateRegister={register('startDate', {
          required: { value: true, message: '필수 값입니다' },
        })}
        endDateRegister={register('endDate', {
          required: { value: true, message: '필수 값입니다' },
        })}
        startDate={watch('startDate')}
        endDate={watch('endDate')}
        onChangeStartDate={(value) => setValue('startDate', value)}
        onChangeEndDate={(value) => setValue('endDate', value)}
        startDateError={errors.startDate?.message}
        endDateError={errors.endDate?.message}
        clearErrorEndDate={() => clearErrors('endDate')}
        clearErrorStartDate={() => clearErrors('startDate')}
      />

      <button type='submit'>submit</button>
    </form>
  )
}
