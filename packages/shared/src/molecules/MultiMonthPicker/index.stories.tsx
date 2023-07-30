import { Meta } from '@storybook/react'
import { useForm } from 'react-hook-form'
import React from 'react'
import MultiMonthPicker from './index'

const config: Meta<typeof MultiMonthPicker> = {
  title: 'MultiMonthPicker',
  component: MultiMonthPicker,
}

export default config

interface FormType {
  startDate: string
  endDate: string | null
}

export const Primary = () => {
  const {
    register,
    watch,
    handleSubmit,
    clearErrors,
    setValue,
    formState: { errors },
  } = useForm<FormType>({
    defaultValues: { endDate: undefined },
  })

  const onSubmit = handleSubmit(console.log)

  return (
    <form onSubmit={onSubmit}>
      <MultiMonthPicker
        startDateRegister={register('startDate', {
          required: { value: true, message: '필수 값입니다' },
        })}
        endDateRegister={register('endDate', {
          required: {
            value: watch('endDate') !== null,
            message: '필수 값입니다',
          },
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
