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
  const { setValue, watch, handleSubmit } = useForm<FormType>()

  const onSubmit = handleSubmit(() => {})

  return (
    <form onSubmit={onSubmit}>
      <MultiDateInput
        startDate={watch('startDate')}
        endDate={watch('endDate')}
        setStartDate={(startDate) => setValue('startDate', startDate)}
        setEndDate={(endDate) => setValue('endDate', endDate)}
      />

      <button type='submit'>submit</button>
    </form>
  )
}
