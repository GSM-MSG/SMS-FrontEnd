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
  const { register, watch, handleSubmit } = useForm<FormType>()

  const onSubmit = handleSubmit(() => {})

  return (
    <form onSubmit={onSubmit}>
      <MultiDateInput
        startDateRegister={register('startDate')}
        endDateRegister={register('endDate')}
        min={watch('startDate')}
        max={watch('endDate')}
      />

      <button type='submit'>submit</button>
    </form>
  )
}
