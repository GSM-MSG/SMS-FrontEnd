import { Meta } from '@storybook/react'
import { useForm } from 'react-hook-form'
import React from 'react'
import MultiInput from './index'

const config: Meta<typeof MultiInput> = {
  title: 'MultiInput',
  component: MultiInput,
}

export default config

interface FormType {
  item: string[]
}

export const Primary = () => {
  const { register, control, handleSubmit } = useForm<FormType>()

  const onSubmit = (_form: FormType) => {}

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <MultiInput name='item' register={register} control={control} />
      <button type='submit'>submit</button>
    </form>
  )
}
